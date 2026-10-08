"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
  FaMedium,
  FaStackOverflow,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaUser,
  FaEnvelope,
  FaTag,
  FaLock,
} from "react-icons/fa";

// Using Web3Forms for serverless form submissions
const WEB3FORMS_ACCESS_KEY = "7c4346cf-7166-4bcb-8718-7950130df288";

const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };
const MIN_MESSAGE_LENGTH = 10;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const topics = ["Job Opportunity", "Freelance Project", "Collaboration", "Just Saying Hi"];

const infoItems = [
  { icon: FaMapMarkerAlt, label: "Based in", value: "Dhaka, Bangladesh" },
  { icon: FaBriefcase, label: "Availability", value: "Open to remote & onsite roles" },
  { icon: FaClock, label: "Response time", value: "Usually within 24 hours" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/mahfuj80", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mahfujur-rahman-632590202/", icon: FaLinkedinIn },
  { name: "Twitter", href: "https://twitter.com/Mahfuj_A_A_", icon: FaTwitter },
  { name: "Dev.to", href: "https://dev.to/mahfujurrahman", icon: FaDev },
  { name: "Medium", href: "https://medium.com/@mahfujurrahman06627", icon: FaMedium },
  { name: "Stack Overflow", href: "https://stackoverflow.com/users/19129869/mahfujur-rahman", icon: FaStackOverflow },
  { name: "Facebook", href: "https://www.facebook.com/mahfujurrahman06627/", icon: FaFacebook },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (form.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }
  return errors;
}

const inputBase =
  "w-full rounded-xl border bg-white/90 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 shadow-sm transition-all focus:outline-none focus:ring-4";
const inputOk =
  "border-zinc-200 dark:border-zinc-700/80 focus:border-cyan-500 focus:ring-cyan-500/15 hover:border-zinc-300 dark:hover:border-zinc-600";
const inputBad = "border-rose-400 dark:border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/15";

function Field({ id, label, icon: Icon, error, hint, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
        >
          {label}
        </label>
        {hint}
      </div>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-[15px] text-sm text-zinc-400 dark:text-zinc-500 pointer-events-none" />
        )}
        {children}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverError, setServerError] = useState("");
  const [sentName, setSentName] = useState("");
  const mountedAt = useRef(0);
  const honeypot = useRef(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const errors = attempted ? validate(form) : {};
  const sending = status === "sending";

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const fieldProps = (field) => ({
    id: field,
    name: field,
    value: form[field],
    onChange: update(field),
    maxLength: LIMITS[field],
    disabled: sending,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(validate(form)).length) return;

    setStatus("sending");
    setServerError("");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      if (form.subject) formData.append("subject", form.subject);
      formData.append("message", form.message);

      // Web3forms specific honeypot
      if (honeypot.current?.checked) {
        formData.append("botcheck", "true");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setSentName(form.name.trim().split(/\s+/)[0]);
      setForm(emptyForm);
      setAttempted(false);
      setStatus("success");
    } catch (err) {
      setServerError(
        err instanceof TypeError
          ? "Network error — please check your connection and try again."
          : err.message
      );
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="contact-title"
        badge="✦ GET IN TOUCH"
        title="Let's Build Something Exceptional"
        subtitle="Have an open role, a freelance project, or an architecture challenge? Send a message and it lands straight in my inbox."
      />

      <div className="rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 shadow-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Info panel */}
          <aside className="relative lg:col-span-2 p-7 sm:p-10 overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-300/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative flex flex-col h-full gap-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/15 border border-white/20 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Available for new work
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-black leading-tight">
                  Let&apos;s talk about your next project.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-cyan-50/85 leading-relaxed">
                  Whether it&apos;s a full-time role, a freelance build, or an
                  architecture review — I read and reply to every message
                  personally.
                </p>
              </div>

              <ul className="space-y-4">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center bg-white/15 border border-white/20 backdrop-blur">
                      <Icon className="text-base" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-100/70">
                        {label}
                      </p>
                      <p className="text-sm font-semibold">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-100/70 mb-3">
                  Find me online
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={name}
                      aria-label={name}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white hover:text-blue-700 hover:-translate-y-0.5 transition-all"
                    >
                      <Icon className="text-base" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <div className="lg:col-span-3 p-6 sm:p-10">
            {status === "success" ? (
              <div
                role="status"
                className="h-full min-h-[420px] flex flex-col items-center justify-center text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl" />
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-lg shadow-emerald-500/30">
                    <FaCheck className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white">
                  Message sent{sentName ? `, ${sentName}` : ""}!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Thanks for reaching out. Your message is in my inbox and
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Topic chips */}
                <div>
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    What&apos;s this about?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => {
                      const active = form.subject === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          disabled={sending}
                          aria-pressed={active}
                          onClick={() =>
                            setForm((prev) => ({ ...prev, subject: active ? "" : topic }))
                          }
                          className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                            active
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-md shadow-cyan-500/25"
                              : "bg-white/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-300"
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="name" label="Your Name" icon={FaUser} error={errors.name}>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Alex Johnson"
                      className={`${inputBase} ${errors.name ? inputBad : inputOk} pl-10 pr-4 py-3`}
                      {...fieldProps("name")}
                    />
                  </Field>
                  <Field id="email" label="Your Email" icon={FaEnvelope} error={errors.email}>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="alex@company.com"
                      className={`${inputBase} ${errors.email ? inputBad : inputOk} pl-10 pr-4 py-3`}
                      {...fieldProps("email")}
                    />
                  </Field>
                </div>

                <Field id="subject" label="Subject" icon={FaTag} error={errors.subject}>
                  <input
                    type="text"
                    placeholder="Pick a topic or write your own"
                    className={`${inputBase} ${inputOk} pl-10 pr-4 py-3`}
                    {...fieldProps("subject")}
                  />
                </Field>

                <Field
                  id="message"
                  label="Message"
                  error={errors.message}
                  hint={
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                      {form.message.length}/{LIMITS.message}
                    </span>
                  }
                >
                  <textarea
                    rows={6}
                    placeholder="Tell me about the role, project, or idea — timelines and tech stack help."
                    className={`${inputBase} ${errors.message ? inputBad : inputOk} px-4 py-3 resize-y min-h-[150px]`}
                    {...fieldProps("message")}
                  />
                </Field>

                {/* Honeypot: invisible to people, tempting to bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                  <label htmlFor="hp_field">Leave this field empty</label>
                  <input
                    ref={honeypot}
                    type="checkbox"
                    name="botcheck"
                    id=""
                    style={{ display: "none" }}
                  />
                </div>

                {status === "error" && serverError && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-sm"
                  >
                    <FaExclamationTriangle className="shrink-0 mt-0.5" />
                    <span>{serverError}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <FaLock className="text-[10px] shrink-0" />
                    Your details are only used to reply to you.
                  </p>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-60 disabled:cursor-wait disabled:hover:translate-y-0"
                  >
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
