import SectionTitle from "./SectionTitle";
import skillDomains from "@/data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="skills-title"
        badge="✦ MY ARSENAL"
        title="Technical Stack & Architecture Toolbox"
        subtitle="From enterprise backends and cross-platform clients to load-balanced infrastructure, payment rails, and AI automation."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {skillDomains.map((domain) => {
          const DomainIcon = domain.icon;
          return (
            <div
              key={domain.id}
              className="flex flex-col p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform ${domain.accent}`}
                >
                  <DomainIcon className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {domain.skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      {SkillIcon && <SkillIcon className="text-sm shrink-0" />}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
