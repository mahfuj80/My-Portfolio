import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 mb-8 mx-2 sm:mx-4 rounded-3xl bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              alt="Mahfujur Rahman Logo"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                Mahfujur Rahman
              </span>
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                Full-Stack &amp; React Developer
              </span>
            </div>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            <li>
              <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-zinc-200/70 dark:border-zinc-800/70" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="font-semibold hover:underline text-zinc-700 dark:text-zinc-300">
              Mahfujur Rahman
            </Link>
            . All Rights Reserved.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            <span>Built with Next.js 16 &amp; Tailwind CSS v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
