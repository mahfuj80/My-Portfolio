"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import projects from "@/data/projectsData";
import highlights from "@/data/highlightsData";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLock } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 px-2 sm:px-4 mb-24">
      <SectionTitle
        sectionId="projects-title"
        badge="✦ CASE STUDIES"
        title="Featured Work & Platforms"
        subtitle="Production systems architected at scale, alongside open-source full-stack builds you can explore live."
      />

      {/* Production architecture highlights (proprietary work, no public links) */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Production Architecture Highlights
          </h3>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 group-hover:scale-110 transition-transform">
                    <Icon className="text-xl" />
                  </div>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                    title="Proprietary client work: source and demo are not public"
                  >
                    <FaLock className="text-[9px]" />
                    Proprietary
                  </span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          Open-Source Builds
        </h3>
        <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              filter === cat.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105"
                : "bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl shadow-lg hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 overflow-hidden group"
          >
            {/* Project Preview Window */}
            <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-zinc-950">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer relative"
              >
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </a>

              {/* Status and category pills */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                  {project.category === "fullstack" ? "Full Stack" : "Frontend"}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                    ★ Featured
                  </span>
                )}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    {project.tagline && (
                      <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {project.tagline}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                {project.highlights && (
                  <div className="pt-2 space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies used */}
              {project.technologies && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                    Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech.icon && (
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={14}
                            height={14}
                            className="object-contain"
                          />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Live Preview</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                {project.GithubLink && (
                  <a
                    href={project.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl border border-zinc-300 dark:border-zinc-700 transition-all transform hover:-translate-y-0.5"
                  >
                    <FaGithub className="text-sm" />
                    <span>Client Code</span>
                  </a>
                )}

                {project.serverLink && (
                  <a
                    href={project.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl border border-zinc-300 dark:border-zinc-700 transition-all transform hover:-translate-y-0.5"
                  >
                    <FaGithub className="text-sm" />
                    <span>Server Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
