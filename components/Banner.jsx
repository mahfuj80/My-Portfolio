import Image from "next/image";
import Profile from "@/src/assets/MahfujurRahman.png";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Banner() {
  return (
    <section className="relative px-4 rounded-2xl mb-16 overflow-hidden">
      {/* Hero Background */}
      <div
        className="relative min-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url(/Banner-bg.gif)",
        }}
      >
        <div className="absolute inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-[2px]"></div>

        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
              Mahfujur Rahman
            </h1>

            <p className="text-lg sm:text-xl font-medium leading-relaxed italic bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 text-transparent bg-clip-text max-w-xl mx-auto md:mx-0">
              Passionate React Developer with a solid foundation in Computer
              Science and Engineering, honed through dedicated studies at
              Kushtia Polytechnic Institute.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 hover:from-blue-600 hover:to-green-500 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex gap-6 justify-center md:justify-start items-center pt-4">
              <div
                title="React"
                className="text-4xl sm:text-5xl text-cyan-400 hover:scale-110 transition-transform cursor-pointer drop-shadow"
              >
                <FaReact />
              </div>
              <div
                title="Tailwind CSS"
                className="text-4xl sm:text-5xl text-sky-400 hover:scale-110 transition-transform cursor-pointer drop-shadow"
              >
                <SiTailwindcss />
              </div>
              <div
                title="MongoDB"
                className="text-4xl sm:text-5xl text-emerald-400 hover:scale-110 transition-transform cursor-pointer drop-shadow"
              >
                <SiMongodb />
              </div>
              <div
                title="Node.js"
                className="text-4xl sm:text-5xl text-green-500 hover:scale-110 transition-transform cursor-pointer drop-shadow"
              >
                <FaNodeJs />
              </div>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-emerald-400 shadow-2xl">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src={Profile}
                  alt="Mahfujur Rahman"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Banner */}
      <div className="relative z-20 flex flex-col md:flex-row gap-6 justify-center items-center -mt-10 max-w-4xl mx-auto px-4">
        {/* Card 1 */}
        <div className="h-36 w-64 flex flex-col justify-center items-center bg-white/95 dark:bg-zinc-900/95 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-5xl font-black bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            8+
          </p>
          <a
            href="#projects"
            className="mt-2 flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 font-semibold hover:underline group"
          >
            <span>Projects</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Card 2 */}
        <div className="h-36 w-64 flex flex-col justify-center items-center bg-white/95 dark:bg-zinc-900/95 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Resume
          </p>
          <a
            href="/Mahfujur_Rahman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 font-semibold hover:underline group"
          >
            <span>View Resume</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Card 3 */}
        <div className="h-36 w-64 flex flex-col justify-center items-center bg-white/95 dark:bg-zinc-900/95 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center px-2">
            Current Project
          </p>
          <a
            href="https://fitness-tracker-a12.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 font-semibold hover:underline group"
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
