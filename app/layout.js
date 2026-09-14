import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahfujur Rahman | Full-Stack & React Developer Portfolio",
  description:
    "Portfolio of Mahfujur Rahman — Passionate Full-Stack & Frontend React Developer specializing in Next.js, React, Node.js, and modern high-performance web applications.",
  keywords: [
    "Mahfujur Rahman",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Web Developer Portfolio",
    "MERN Stack",
  ],
  authors: [{ name: "Mahfujur Rahman" }],
  creator: "Mahfujur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahfuj80.github.io/My-Portfolio/",
    title: "Mahfujur Rahman | Full-Stack & React Developer Portfolio",
    description:
      "Explore modern web applications, full-stack projects, and technical skills by Mahfujur Rahman.",
    siteName: "Mahfujur Rahman Portfolio",
  },
  icons: {
    icon: "/fab.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full bg-[#f8fafc] text-[#0f172a] dark:bg-[#080c14] dark:text-[#f1f5f9] relative selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
