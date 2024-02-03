import SectionTitle from '../SectionTitle/SectionTitle';
import projects from './ProjectsData/ProjectData';
import './ProjectsStyle.css';

const Projects = () => {
  console.log(projects);
  return (
    <>
      <SectionTitle
        sectionId={'projects'}
        title={'My Projects'}
        border={'----------------------------'}
      ></SectionTitle>
      <section className="px-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mb-12">
        {projects?.map((project) => (
          <div key={project?.id} className="flex-1">
            <div className="p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
              <div className="screen">
                <a href={project?.liveLink}>
                  <img
                    className="rounded-lg h-96 w-[300px]"
                    src={project?.images[0]}
                    alt="Project Image"
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project?.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project?.liveLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
                >
                  Live Link
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
