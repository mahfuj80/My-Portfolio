import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 mb-6 mx-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md">
      <div className="container mx-auto p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              className="h-16 w-auto object-contain"
              alt="Mahfujur Rahman Logo"
            />
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="font-medium hover:underline text-zinc-700 dark:text-zinc-300">
            Mahfujur Rahman
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
