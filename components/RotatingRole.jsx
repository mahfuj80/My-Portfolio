"use client";

import { useEffect, useState } from "react";

// Mirrors the typing tagline on the GitHub profile README.
const roles = [
  "Full-Stack & Systems Architect | NestJS • Next.js",
  "Cross-Platform Engineer | Web • Desktop (Tauri) • Mobile",
  "High-Availability Infra | Linux • Load Balancing • Docker",
  "AI-Augmented Automation & Scalable SaaS Systems",
];

export default function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <p
      className="min-h-[3rem] sm:min-h-[1.75rem] font-mono text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400"
      aria-live="polite"
    >
      <span className="text-zinc-400 dark:text-zinc-500 select-none">&gt; </span>
      <span key={index} className="animate-fade-up">
        {roles[index]}
      </span>
      <span className="inline-block w-2 h-4 ml-1 align-middle bg-cyan-500 animate-pulse" />
    </p>
  );
}
