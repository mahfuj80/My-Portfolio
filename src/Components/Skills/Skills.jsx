import SectionTitle from '../SectionTitle/SectionTitle';
import skills from './SkillsData/skillsData';

const Skills = () => {
  console.log(skills);
  return (
    <>
      <SectionTitle title={'Skills'} border={'---------------'}></SectionTitle>
      <section className="px-4 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-gray-600  rounded-lg py-6 mb-12">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills?.map((skill) => (
            <div
              key={skill?.id}
              className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-rose-200 dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-700 dark:text-white rounded-lg py-2 w-36 mx-auto"
            >
              <img className="w-12" src={skill?.image} alt={skill?.name} />
              <p className="font-bold text-2xl">{skill?.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
