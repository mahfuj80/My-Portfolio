"use client";

import { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import SectionTitle from "./SectionTitle";
import contactAnimation from "@/src/assets/contactAnimation.json";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialDescription =
    "I'm on the hunt for new opportunities—check the links below! Reach out for job offers and professional connections. Let's build success together.";

  return (
    <section id="contact" className="scroll-mt-24 px-4 mb-16">
      <SectionTitle
        sectionId="contact-title"
        title="Contact Me"
        border="------------------------"
      />

      <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-md">
        {/* Form and Animation */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-10 gap-10">
          {/* Form */}
          <div className="w-full lg:w-1/2 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Mahfujur Rahman"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="your.name@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 hover:from-blue-600 hover:to-green-500 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </div>

          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center items-center max-w-md">
            {mounted && (
              <Lottie
                src={contactAnimation}
                loop={true}
                className="w-full max-h-96"
              />
            )}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="w-full text-center py-10 px-6 bg-zinc-100/80 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            Connect with me on socials!
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6">
            {socialDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/mahfujurrahman06627/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="p-3.5 rounded-xl bg-white dark:bg-zinc-800 text-blue-600 hover:scale-110 shadow hover:shadow-md transition-all text-2xl"
            >
              <FaFacebook />
            </a>

            <a
              href="https://github.com/mahfuj80"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:scale-110 shadow hover:shadow-md transition-all text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mahfujur-rahman-632590202/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3.5 rounded-xl bg-white dark:bg-zinc-800 text-blue-500 hover:scale-110 shadow hover:shadow-md transition-all text-2xl"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/Mahfuj_A_A_"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="p-3.5 rounded-xl bg-white dark:bg-zinc-800 text-sky-400 hover:scale-110 shadow hover:shadow-md transition-all text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
