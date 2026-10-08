import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Mahfujur Rahman | Full-Stack Software Engineer & Systems Architect",
  description:
    "Portfolio of Md. Mahfujur Rahman — Full-Stack Software Engineer & Systems Architect in Dhaka, building high-availability platforms with NestJS, Next.js, PostgreSQL, Docker, Nginx, and AWS, plus multi-tenant SaaS, crypto & fiat billing engines, and AI/RAG automation.",
  keywords: [
    "Mahfujur Rahman",
    "Full-Stack Software Engineer",
    "Systems Architect",
    "NestJS Developer",
    "Next.js Developer",
    "Backend Engineer",
    "DevOps",
    "Multi-Tenant SaaS",
    "Payment Gateway Integration",
    "Tauri",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Mahfujur Rahman" }],
  creator: "Mahfujur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahfuj80.github.io/My-Portfolio/",
    title: "Mahfujur Rahman | Full-Stack Software Engineer & Systems Architect",
    description:
      "High-availability web platforms, enterprise microservices, cross-platform apps, and cloud infrastructure by Mahfujur Rahman.",
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
      <body suppressHydrationWarning className="flex flex-col min-h-full bg-[#f8fafc] text-[#0f172a] dark:bg-[#080c14] dark:text-[#f1f5f9] relative selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-09Z2W198MD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-09Z2W198MD');
        `}
      </Script>
    </html>
  );
}
