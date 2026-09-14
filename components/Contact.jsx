"use client";

import { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import SectionTitle from "./SectionTitle";
import contactAnimation from "@/src/assets/contactAnimation.json";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaCheck,
  FaCopy,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const directEmail = "mahfujurrahman06627@gmail.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link with encoded subject and body
    const mailtoUrl = `mailto:${directEmail}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="contact-title"
        badge="✦ GET IN TOUCH"
        title="Let's Build Something Exceptional"
        subtitle="Have an open opportunity, freelance project, or simply want to chat tech? Reach out anytime!"
      />

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* Email Copy Card */}
        <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-cyan-500/40 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 text-cyan-500">
              <FaEnvelope className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Email
              </p>
              <p className="text-sm font-bold text-zinc-900 dark:text-white truncate max-w-[170px]">
                {directEmail}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 transition-colors"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-500" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <FaCopy />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/mahfujur-rahman-632590202/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-blue-500/40 hover:-translate-y-0.5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-500 group-hover:scale-105 transition-transform">
              <FaLinkedinIn className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                LinkedIn
              </p>
              <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                Connect on LinkedIn
              </p>
            </div>
          </div>
          <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/mahfuj80"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-zinc-500/40 hover:-translate-y-0.5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:scale-105 transition-transform">
              <FaGithub className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                GitHub
              </p>
              <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                @mahfuj80
              </p>
            </div>
          </div>
          <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* Location & Status Card */}
        <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Location &amp; Status
            </p>
            <p className="text-sm font-bold text-zinc-900 dark:text-white">
              Kushtia, Bangladesh
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              Open to Remote &amp; Onsite
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Form & Animation Card */}
      <div className="rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 shadow-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all shadow-sm"
                placeholder="e.g. Alex Johnson"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all shadow-sm"
                placeholder="e.g. alex@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all shadow-sm"
                placeholder="Project Inquiry / Job Opportunity"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all shadow-sm"
                placeholder="Write your message or inquiry here..."
                required
              />
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-2">
                <FaCheck className="shrink-0" />
                <span>Opening your email client to dispatch message. Thank you!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
            >
              <FaPaperPlane className="text-xs" />
              <span>{isSubmitting ? "Preparing Message..." : "Send Message"}</span>
            </button>
          </form>

          {/* Lottie Animation & Side Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center max-w-md">
            {mounted && (
              <Lottie
                src={contactAnimation}
                loop={true}
                className="w-full max-h-80"
              />
            )}
            <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
              Fast response guaranteed within 24 hours.
            </p>
          </div>
        </div>

        {/* Social Links Footer Bar */}
        <div className="w-full py-8 px-6 bg-zinc-50/90 dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Also find me on social platforms:
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mahfuj80"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-cyan-500 hover:scale-110 shadow-sm transition-all text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mahfujur-rahman-632590202/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-blue-500 hover:scale-110 shadow-sm transition-all text-xl"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/Mahfuj_A_A_"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-sky-400 hover:scale-110 shadow-sm transition-all text-xl"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.facebook.com/mahfujurrahman06627/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-blue-600 hover:scale-110 shadow-sm transition-all text-xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
