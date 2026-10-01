import SectionTitle from "./SectionTitle";
import {
  FaGraduationCap,
  FaShieldAlt,
  FaCubes,
  FaRocket,
  FaRobot,
  FaAward,
  FaLanguage,
} from "react-icons/fa";

export default function About() {
  const principles = [
    {
      icon: <FaRocket className="text-xl text-cyan-500" />,
      title: "Radical Technical Adaptability",
      subtitle: "Web · Desktop · Mobile · CMS",
      desc: "No platform bottleneck is insurmountable — Tauri for low-resource desktop apps, React Native / Flutter for native mobile, and custom WordPress plugins & Gutenberg blocks built from first principles.",
    },
    {
      icon: <FaShieldAlt className="text-xl text-blue-500" />,
      title: "High Availability & Fault Tolerance",
      subtitle: "Zero Single Points of Failure",
      desc: "Active load balancing and reverse proxy routing with Nginx, container scaling with Docker & Kubernetes, resilient connection pooling, and distributed caching with Redis.",
    },
    {
      icon: <FaCubes className="text-xl text-emerald-500" />,
      title: "Domain Modularity",
      subtitle: "Separation of Concerns",
      desc: "Strict isolation between business logic, presentation layers, and infrastructure adapters, so codebases stay testable, refactorable, and clean across long product lifecycles.",
    },
    {
      icon: <FaRobot className="text-xl text-amber-500" />,
      title: "AI-Augmented Pipelines",
      subtitle: "MCP · LangChain · n8n · RAG",
      desc: "Agentic orchestration, semantic search, and n8n workflows that turn complex manual overhead into streamlined, self-managing software.",
    },
  ];

  const certifications = [
    { title: "Complete Web Development (AI-First)", issuer: "Programming Hero" },
    {
      title: "Autonomous Voice-Controlled Robotics Lead",
      issuer: "Institute Level Skills Competition (2023)",
    },
    {
      title: "English Proficiency",
      issuer: "Duolingo — Professional Working Fluency",
    },
  ];

  const languages = [
    { name: "English", level: "Professional Working" },
    { name: "Bangla", level: "Native" },
    { name: "Hindi", level: "Basic Working" },
  ];

  const cardClass =
    "p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm";

  return (
    <section id="about" className="scroll-mt-24 px-2 sm:px-4 mb-20">
      <SectionTitle
        sectionId="about-title"
        badge="✦ ABOUT ME"
        title="Engineering Systems Built to Scale"
        subtitle="Extreme technical ownership — from initial problem analysis and architectural design to zero-downtime production delivery."
      />

      {/* Summary + credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <div className={`${cardClass} lg:col-span-3 space-y-4`}>
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I&apos;m a{" "}
            <strong className="text-zinc-900 dark:text-white">
              Full-Stack Software Engineer &amp; Systems Architect
            </strong>{" "}
            based in Dhaka, specializing in high-availability web platforms,
            enterprise microservices, and distributed cloud systems. I architect
            resilient REST/GraphQL APIs with{" "}
            <strong className="text-zinc-900 dark:text-white">NestJS</strong> and{" "}
            <strong className="text-zinc-900 dark:text-white">PostgreSQL</strong>, lead
            cloud deployments across{" "}
            <strong className="text-zinc-900 dark:text-white">AWS</strong> and{" "}
            <strong className="text-zinc-900 dark:text-white">DigitalOcean</strong>, and
            deliver cross-platform products across Web (Next.js), Desktop (Tauri),
            and Mobile (Flutter, React Native).
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m experienced in active traffic load balancing with Nginx,
            multi-tenant SaaS architecture, fiat &amp; cryptocurrency billing
            engines (Stripe, NOWPayments, Plisio), and intelligent AI/RAG
            automation pipelines. I believe systems must be self-healing,
            automated, maintainable, and cost-efficient — code isn&apos;t just
            written to function, it&apos;s structured to scale and outlive team
            transitions.
          </p>
        </div>

        <div className={`${cardClass} lg:col-span-2 space-y-5`}>
          {/* Education */}
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              <FaGraduationCap className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Education
              </p>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">
                Diploma in Computer Science &amp; Technology
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Kushtia Polytechnic Institute · Graduated 2025 · CGPA 3.48
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <FaAward className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                Certifications &amp; Honors
              </p>
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <FaLanguage className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                Languages
              </p>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-2.5 py-1 rounded-lg text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80"
                  >
                    <strong className="font-semibold">{lang.name}</strong> · {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((item) => (
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
