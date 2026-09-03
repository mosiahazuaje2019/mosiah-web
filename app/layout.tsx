import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Mosiah Azuaje | Full Stack Developer – Web, SEO & GEO",
  description:
    "Full Stack Developer specializing in modern web applications, technical SEO, GEO, React, Next.js, Laravel and Node.js. Building fast, scalable and search-ready web experiences.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Technical SEO",
    "GEO",
    "Generative Engine Optimization",
    "Web Performance",
    "Remote Developer",
  ],
  openGraph: {
    title: "Mosiah Azuaje | Full Stack Developer",
    description:
      "Building fast, scalable and search-ready web experiences with React, Next.js, Laravel and Node.js.",
    url: "https://mosiah.dev",
    siteName: "Mosiah Azuaje",
    images: [
      {
        url: "https://mosiah.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mosiah Azuaje Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosiah Azuaje | Full Stack Developer",
    description:
      "Building fast, scalable and search-ready web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://mosiah.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mosiah Azuaje",
              jobTitle: "Full Stack Developer",
              url: "https://mosiah.dev",
              sameAs: [
                "https://www.linkedin.com/in/mosiahazuaje/",
                "https://github.com/mosiahazuaje2019",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Laravel",
                "Node.js",
                "NestJS",
                "Vue.js",
                "Technical SEO",
                "Generative Engine Optimization",
                "Cloud Computing",
                "Web Performance",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
