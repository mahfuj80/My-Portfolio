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
  metadataBase: new URL("https://mahfuj80.github.io/My-Portfolio"),
  title: {
    default:
      "Mahfujur Rahman | Full-Stack Software Engineer, Systems Architect & Backend Developer",
    template: "%s | Mahfujur Rahman",
  },
  description:
    "Portfolio of Md. Mahfujur Rahman — Full-Stack Software Engineer, Systems Architect & Backend Developer in Dhaka. Engineering high-availability platforms with NestJS, Next.js, PostgreSQL, Docker, Nginx, and AWS.",
  keywords: [
    "Mahfujur Rahman",
    "Md. Mahfujur Rahman",
    "Mahfujur Rahman Software Engineer",
    "Mahfujur Rahman Backend Developer",
    "Mahfujur Rahman Systems Architect",
    "Software Engineer",
    "Software Architecture",
    "Systems Architect",
    "Backend Developer",
    "Backend Engineer",
    "Full-Stack Software Engineer",
    "NestJS Developer",
    "Next.js Developer",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Microservices",
    "DevOps",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Mahfujur Rahman", url: "https://mahfuj80.github.io/My-Portfolio/" }],
  creator: "Mahfujur Rahman",
  publisher: "Mahfujur Rahman",
  alternates: {
    canonical: "https://mahfuj80.github.io/My-Portfolio/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://mahfuj80.github.io/My-Portfolio/",
    title:
      "Mahfujur Rahman | Full-Stack Software Engineer, Systems Architect & Backend Developer",
    description:
      "High-availability web platforms, enterprise microservices, cross-platform apps, and cloud infrastructure by Mahfujur Rahman.",
    siteName: "Mahfujur Rahman Portfolio",
    images: [
      {
        url: "/mahfujur-rahman.png",
        width: 800,
        height: 800,
        alt: "Mahfujur Rahman - Full-Stack Software Engineer, Systems Architect and Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mahfujur Rahman | Full-Stack Software Engineer & Systems Architect",
    description:
      "Full-Stack Software Engineer, Systems Architect & Backend Developer building high-availability platforms.",
    creator: "@Mahfuj_A_A_",
    images: ["/mahfujur-rahman.png"],
  },
  icons: {
    icon: "/fab.png",
    apple: "/fab.png",
  },
  verification: {
    google: "google7fa0668c5942d6f9",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mahfuj80.github.io/My-Portfolio/#person",
      "name": "Mahfujur Rahman",
      "alternateName": ["Md. Mahfujur Rahman", "Mahfuj"],
      "url": "https://mahfuj80.github.io/My-Portfolio/",
      "image": {
        "@type": "ImageObject",
        "@id": "https://mahfuj80.github.io/My-Portfolio/#image",
        "url": "https://mahfuj80.github.io/My-Portfolio/mahfujur-rahman.png",
        "caption":
          "Mahfujur Rahman - Full-Stack Software Engineer, Systems Architect and Backend Developer",
      },
      "jobTitle": [
        "Full-Stack Software Engineer",
        "Systems Architect",
        "Backend Developer",
      ],
      "description":
        "Full-Stack Software Engineer & Systems Architect based in Dhaka, building high-availability platforms, enterprise microservices, and distributed cloud systems with NestJS, Next.js, PostgreSQL, Docker, Nginx, and AWS.",
      "worksFor": {
        "@type": "Organization",
        "name": "Linkware",
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "Bangladesh",
      },
      "sameAs": [
        "https://github.com/mahfuj80",
        "https://www.linkedin.com/in/mahfujur-rahman-632590202/",
        "https://twitter.com/Mahfuj_A_A_",
        "https://dev.to/mahfujurrahman",
        "https://medium.com/@mahfujurrahman06627",
        "https://stackoverflow.com/users/19129869/mahfujur-rahman",
        "https://www.facebook.com/mahfujurrahman06627/",
      ],
      "knowsAbout": [
        "Software Engineering",
        "Software Architecture",
        "Systems Architecture",
        "Backend Development",
        "Full-Stack Development",
        "NestJS",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Nginx",
        "Microservices",
        "REST API",
        "GraphQL",
        "Tauri",
        "DevOps",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mahfuj80.github.io/My-Portfolio/#website",
      "url": "https://mahfuj80.github.io/My-Portfolio/",
      "name": "Mahfujur Rahman Portfolio",
      "publisher": {
        "@id": "https://mahfuj80.github.io/My-Portfolio/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mahfuj80.github.io/My-Portfolio/#webpage",
      "url": "https://mahfuj80.github.io/My-Portfolio/",
      "name":
        "Mahfujur Rahman | Full-Stack Software Engineer, Systems Architect & Backend Developer",
      "isPartOf": {
        "@id": "https://mahfuj80.github.io/My-Portfolio/#website",
      },
      "about": {
        "@id": "https://mahfuj80.github.io/My-Portfolio/#person",
      },
      "primaryImageOfPage": {
        "@id": "https://mahfuj80.github.io/My-Portfolio/#image",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex flex-col min-h-full bg-[#f8fafc] text-[#0f172a] dark:bg-[#080c14] dark:text-[#f1f5f9] relative selection:bg-cyan-500 selection:text-white"
      >
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
