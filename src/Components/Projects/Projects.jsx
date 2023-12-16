import SectionTitle from '../SectionTitle/SectionTitle';
import projects from './ProjectsData/ProjectData';

const Projects = () => {
  console.log(projects);
  return (
    <>
      <SectionTitle
        title={'My Projects'}
        border={'----------------------------'}
      ></SectionTitle>
      <section className="px-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mb-12">
        {projects?.map((project) => (
          <div key={project?.id}></div>
        ))}
      </section>
    </>
  );
};

export default Projects;
