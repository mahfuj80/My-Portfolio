/* eslint-disable react/prop-types */
const SectionTitle = ({ title }) => {
  return (
    <div>
      <p className="text-4xl font-black text-gray-900 dark:text-white text-center py-4">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
