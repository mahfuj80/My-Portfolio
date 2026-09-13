import Image from "next/image";
import SectionTitle from "./SectionTitle";
import projects from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 mb-20">
      <SectionTitle
        sectionId="projects-title"
        title="My Projects"
        border="----------------------------"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects?.map((project) => (
          <div
            key={project?.id}
            className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Scrollable image on hover */}
            <div className="project-screen relative w-full h-72 sm:h-80 overflow-hidden bg-zinc-950">
              <a
                href={project?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
              >
                <Image
                  src={project?.images[0]}
                  alt={project?.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-screen-img object-cover object-top transition-all duration-[6000ms] ease-in-out"
                />
              </a>
            </div>

            {/* Content info */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project?.name}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project?.description}
                </p>
              </div>

              {/* Technologies used */}
              {project?.technologies && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
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
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href={project?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors"
                >
                  Live Preview
                  <svg
                    className="w-4 h-4"
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

                {project?.GithubLink && (
                  <a
                    href={project.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg border border-zinc-300 dark:border-zinc-700 transition-colors"
                  >
                    Client Code
                  </a>
                )}

                {project?.serverLink && (
                  <a
                    href={project.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg border border-zinc-300 dark:border-zinc-700 transition-colors"
                  >
                    Server Code
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
