import Image from "next/image";
import Profile from "@/src/assets/icons/MahfujurRahman.png";
import RotatingRole from "./RotatingRole";
import { FaArrowRight, FaAws } from "react-icons/fa6";
import {
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiNginx,
  SiTauri,
} from "react-icons/si";

export default function Banner() {
  const techStack = [
    { icon: <SiNestjs />, name: "NestJS", color: "hover:text-rose-500 hover:border-rose-500/40" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-500/40" },
    { icon: <SiTypescript />, name: "TypeScript", color: "hover:text-blue-500 hover:border-blue-500/40" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "hover:text-sky-600 hover:border-sky-600/40" },
    { icon: <SiDocker />, name: "Docker", color: "hover:text-sky-500 hover:border-sky-500/40" },
    { icon: <SiNginx />, name: "Nginx", color: "hover:text-green-600 hover:border-green-600/40" },
    { icon: <FaAws />, name: "AWS", color: "hover:text-amber-500 hover:border-amber-500/40" },
    { icon: <SiTauri />, name: "Tauri", color: "hover:text-yellow-500 hover:border-yellow-500/40" },
  ];

  const stats = [
    {
      value: "3+",
      label: "Years Industry Experience",
      subtext: "Linkware · NEXSTACK · Lyricz",
      href: "#experience",
    },
    {
      value: "15+",
      label: "Projects Shipped",
      subtext: "SaaS, Billing & Web Platforms",
      href: "#projects",
    },
    {
      value: "3",
      label: "Platforms Covered",
      subtext: "Web · Desktop · Mobile",
      href: "#skills",
    },
  ];

  return (
    <section className="relative px-2 sm:px-4 rounded-3xl mb-16 overflow-hidden">
      {/* Ambient background container (Zero heavy GIF, ultra-fast CSS glow) */}
      <div className="relative min-h-[78vh] flex items-center justify-center rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-b from-white via-cyan-50/20 to-white dark:from-zinc-950 dark:via-[#090e1a] dark:to-zinc-950 shadow-2xl p-6 sm:p-10 lg:p-14">
        {/* Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text Column */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Opportunities & Freelance</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-500 text-transparent bg-clip-text">
                  Mahfujur Rahman
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-zinc-700 dark:text-zinc-200">
                Full-Stack Software Engineer &amp; Systems Architect
              </p>
              <RotatingRole />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Designing high-availability web platforms, enterprise microservices, and distributed cloud systems. From NestJS &amp; PostgreSQL backends to load-balanced Linux infrastructure, multi-gateway billing engines, and AI/RAG automation, I take ownership from architecture to zero-downtime production.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Core Tech Arsenal
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 shadow-sm backdrop-blur transition-all duration-200 ${tech.color}`}
                  >
                    <span className="text-base">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Profile Column */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 opacity-60 group-hover:opacity-100 blur-lg transition duration-500" />

              <div className="relative p-2 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 shadow-2xl">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-zinc-900">
                  <Image
                    src={Profile}
                    alt="Mahfujur Rahman"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badge floating on photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white text-xs flex items-center justify-between">
                    <div>
                      <p className="font-bold text-cyan-400">Mahfujur Rahman</p>
                      <p className="text-[11px] text-zinc-300">Full-Stack &amp; Systems Architect</p>
                    </div>
                    <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-[10px] border border-cyan-500/30">
                      @ Linkware
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Bento Stats Strip */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-8 max-w-5xl mx-auto px-4">
        {stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl font-black font-mono">{stat.value}</span>
            </div>
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {stat.label}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {stat.subtext}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
