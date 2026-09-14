import SectionTitle from "./SectionTitle";
import { FaGraduationCap, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-xl text-cyan-500" />,
      title: "Computer Science & Engineering",
      subtitle: "Kushtia Polytechnic Institute",
      desc: "Comprehensive academic foundation in software architecture, operating systems, networking, and algorithmic problem-solving.",
    },
    {
      icon: <FaCode className="text-xl text-blue-500" />,
      title: "Full-Stack Development",
      subtitle: "MERN & Next.js Ecosystem",
      desc: "Building end-to-end applications with React 19, Next.js 16, Node.js, Express, MongoDB, and Firebase authentication.",
    },
    {
      icon: <FaRocket className="text-xl text-emerald-500" />,
      title: "Performance & UI/UX",
      subtitle: "Tailwind CSS & Responsive Design",
      desc: "Delivering mobile-first, responsive, and accessible interfaces with fluid micro-interactions and optimized load speeds.",
    },
    {
      icon: <FaLightbulb className="text-xl text-amber-500" />,
      title: "Clean Architecture",
      subtitle: "Maintainable & Scalable Code",
      desc: "Committed to modular structure, readable codebases, Git collaboration, and continuous integration workflows.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="about-title"
        badge="✦ ABOUT ME"
        title="Engineering Modern Web Experiences"
        subtitle="A journey rooted in Computer Science fundamentals, evolving into full-stack craftsmanship."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex flex-col p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
              {item.subtitle}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
