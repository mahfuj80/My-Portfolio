import SectionTitle from "./SectionTitle";
import experience from "@/data/experienceData";
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="experience-title"
        badge="✦ CAREER PATH"
        title="Professional Experience"
        subtitle="Three years shipping production systems — from responsive product UIs to enterprise backends and cloud infrastructure."
      />

      <ol className="relative max-w-4xl mx-auto border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 md:mx-auto space-y-8">
        {experience.map((job) => (
          <li key={job.id} className="relative pl-8 sm:pl-10">
            {/* Timeline node */}
            <span
              className={`absolute -left-[13px] top-6 flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                job.current
                  ? "bg-cyan-500 border-cyan-200 dark:border-cyan-900 shadow-md shadow-cyan-500/40"
                  : "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700"
              }`}
            >
              <FaBriefcase
                className={`text-[10px] ${job.current ? "text-white" : "text-zinc-500 dark:text-zinc-400"}`}
              />
            </span>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      job.current
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"
                    }`}
                  >
                    {job.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <FaMapMarkerAlt className="text-[10px]" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {job.summary}
              </p>

              <ul className="space-y-2 mb-5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    <FaCheckCircle className="text-emerald-500 text-xs shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
