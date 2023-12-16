/* eslint-disable react/prop-types */
const SectionTitle = ({ title, border }) => {
  return (
    <div>
      <p className="text-4xl font-black text-gray-900 dark:text-white text-center pt-4 bg-gradient-to-r from-cyan-400 to-blue-800 text-transparent bg-clip-text">
        {title}
      </p>
      <p className="text-2xl font-black text-gray-900 dark:text-white text-center pb-6 -mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
        {border}
      </p>
    </div>
  );
};

export default SectionTitle;
