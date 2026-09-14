export default function SectionTitle({ sectionId, title, subtitle, badge }) {
  // If no badge provided, provide a clean default
  const badgeText = badge || "✦ DISCOVER";

  return (
    <div id={sectionId} className="scroll-mt-24 text-center my-8 md:my-12">
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 dark:border-cyan-400/20 mb-3 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
        {badgeText}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
        <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center gap-1.5 mt-4">
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-500 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50" />
        <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
      </div>
    </div>
  );
}
