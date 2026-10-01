import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import nodemailer from "nodemailer";

// Stored in Google Secret Manager — never shipped to the browser.
// Set with: firebase functions:secrets:set GMAIL_USER / GMAIL_APP_PASSWORD
const GMAIL_USER = defineSecret("GMAIL_USER");
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");

const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };
const MIN_MESSAGE_LENGTH = 10;
const MIN_FILL_TIME_MS = 3000;
const RATE_LIMIT = { max: 5, windowMs: 60 * 60 * 1000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort, per-instance rate limiter. `maxInstances` below keeps the
// total number of instances (and therefore the overall budget) bounded.
const hitsByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hitsByIp.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  const limited = recent.length >= RATE_LIMIT.max;
  if (!limited) recent.push(now);
  hitsByIp.set(ip, recent);

  if (hitsByIp.size > 1000) {
    for (const [key, times] of hitsByIp) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hitsByIp.delete(key);
    }
  }
  return limited;
}

const clean = (value) => (typeof value === "string" ? value.trim() : "");
const singleLine = (value) => value.replace(/[\r\n]+/g, " ");
const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );

function validate(body) {
  const data = {
    name: singleLine(clean(body.name)),
    email: clean(body.email),
    subject: singleLine(clean(body.subject)),
    message: clean(body.message),
  };
  const errors = {};

  if (!data.name) errors.name = "Please enter your name.";
  else if (data.name.length > LIMITS.name) errors.name = `Name must be under ${LIMITS.name} characters.`;

  if (!EMAIL_RE.test(data.email) || data.email.length > LIMITS.email) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.subject.length > LIMITS.subject) {
    errors.subject = `Subject must be under ${LIMITS.subject} characters.`;
  }

  if (data.message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
  } else if (data.message.length > LIMITS.message) {
    errors.message = `Message must be under ${LIMITS.message} characters.`;
  }

  return { data, errors };
}

function renderHtml({ name, email, subject, message }) {
  const row = (label, value) => `
    <tr>
      <td style="padding:6px 0;color:#64748b;font-size:13px;width:90px;vertical-align:top">${label}</td>
      <td style="padding:6px 0;color:#0f172a;font-size:14px;font-weight:600">${value}</td>
    </tr>`;

  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f1f5f9;padding:24px">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
      <div style="background:linear-gradient(135deg,#06b6d4,#2563eb,#4f46e5);padding:20px 24px;color:#ffffff">
        <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:.85">Portfolio Contact Form</div>
        <div style="font-size:20px;font-weight:700;margin-top:4px">New message from ${escapeHtml(name)}</div>
      </div>
      <div style="padding:20px 24px">
        <table style="width:100%;border-collapse:collapse">
          ${row("Name", escapeHtml(name))}
          ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#2563eb">${escapeHtml(email)}</a>`)}
          ${row("Subject", escapeHtml(subject || "—"))}
        </table>
        <div style="margin-top:16px;padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>
        <p style="margin-top:16px;color:#94a3b8;font-size:12px">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      </div>
    </div>
  </div>`;
}

let transporter;
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER.value(),
      // Google displays app passwords in groups of four; SMTP wants them without spaces.
      pass: GMAIL_APP_PASSWORD.value().replace(/\s+/g, ""),
    },
  });
  return transporter;
}

export const contact = onRequest(
  {
    region: "us-central1",
    secrets: [GMAIL_USER, GMAIL_APP_PASSWORD],
    maxInstances: 2,
    timeoutSeconds: 30,
  },
  async (req, res) => {
    res.set("Cache-Control", "no-store");

    if (req.method !== "POST") {
      res.set("Allow", "POST");
      res.status(405).json({ ok: false, error: "Method not allowed." });
      return;
    }

    const body = req.body && typeof req.body === "object" ? req.body : {};

    // Bot traps: a hidden honeypot field and a minimum time spent on the form.
    // Report success so bots get no signal to adapt to.
    if (clean(body.hp_field) || !(Number(body.elapsedMs) >= MIN_FILL_TIME_MS)) {
      res.status(200).json({ ok: true });
      return;
    }

    const { data, errors } = validate(body);
    if (Object.keys(errors).length) {
      res.status(400).json({ ok: false, error: "Please fix the highlighted fields.", errors });
      return;
    }

    const ip = String(req.headers["x-forwarded-for"] || req.ip || "unknown").split(",")[0].trim();
    if (isRateLimited(ip)) {
      res.status(429).json({
        ok: false,
        error: "You've sent several messages recently. Please try again later.",
      });
      return;
    }

    try {
      const owner = GMAIL_USER.value();
      await getTransporter().sendMail({
        from: { name: "Portfolio Contact", address: owner },
        to: owner,
        replyTo: { name: data.name, address: data.email },
        subject: `[Portfolio] ${data.subject || `New message from ${data.name}`}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject || "—"}\n\n${data.message}`,
        html: renderHtml(data),
      });
      res.status(200).json({ ok: true });
    } catch (err) {
      logger.error("Failed to send contact email", { code: err.code, reason: err.message });
      res.status(500).json({
        ok: false,
        error: "Your message couldn't be sent right now. Please try again in a few minutes.",
      });
    }
  }
);
