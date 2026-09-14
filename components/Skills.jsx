"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import skills from "@/data/skillsData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "backend", label: "Backend & DB" },
    { id: "languages", label: "Languages" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="skills-title"
        badge="✦ MY ARSENAL"
        title="Technical Skills & Expertise"
        subtitle="A versatile toolkit spanning modern frontend frameworks, backend architecture, and core computer science tools."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105"
                : "bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id + skill.name}
            className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-14 h-14 relative flex items-center justify-center mb-3">
              <Image
                src={skill.image}
                alt={skill.name}
                width={52}
                height={52}
                className="object-contain max-h-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
              />
            </div>
            <p className="font-bold text-sm text-zinc-800 dark:text-zinc-200 text-center group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </p>
            {skill.experience && (
              <span className="mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60">
                {skill.experience}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
