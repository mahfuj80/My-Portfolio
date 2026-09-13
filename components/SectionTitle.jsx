export default function SectionTitle({ sectionId, title, border }) {
  return (
    <div id={sectionId} className="scroll-mt-24 text-center my-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500">
        {title}
      </h2>
      <p className="text-xl md:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 select-none -mt-1">
        {border}
      </p>
    </div>
  );
}
