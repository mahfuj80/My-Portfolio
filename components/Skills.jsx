import Image from "next/image";
import SectionTitle from "./SectionTitle";
import skills from "@/data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 mb-20">
      <SectionTitle
        sectionId="skills-title"
        title="Skills"
        border="----------------"
      />

      <div className="p-6 md:p-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/20 dark:border-cyan-500/10 backdrop-blur-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills?.map((skill) => (
            <div
              key={skill?.id + skill?.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 relative flex items-center justify-center mb-2">
                <Image
                  src={skill?.image}
                  alt={skill?.name}
                  width={48}
                  height={48}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 text-center">
                {skill?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
