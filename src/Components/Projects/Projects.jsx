import SectionTitle from '../SectionTitle/SectionTitle';
import projects from './ProjectsData/ProjectData';

const Projects = () => {
  console.log(projects);
  return (
    <section className="px-4">
      <SectionTitle
        title={'My Projects'}
        border={'----------------------------'}
      ></SectionTitle>
    </section>
  );
};

export default Projects;
