import SectionTitle from '../SectionTitle/SectionTitle';
import skills from './SkillsData/skillsData';

const Skills = () => {
  console.log(skills);
  return (
    <section className="px-4">
      <SectionTitle title={'Skills'} border={'---------------'}></SectionTitle>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4"></div>
    </section>
  );
};

export default Skills;
