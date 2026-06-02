import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joswebworks.in"),
  title: {
    default: "JOS Webworks | Premium Product Studio for Startups",
    template: "%s | JOS Webworks",
  },
  description:
    "JOS Webworks engineers high-performance web platforms, mobile apps, and autonomous AI agents that give your startup operational leverage. Book a free discovery call.",
  keywords: [
    "product studio",
    "web development",
    "mobile apps",
    "AI agents",
    "startup development",
    "Next.js",
    "React",
    "custom web development Pune",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "JOS Webworks | Premium Product Studio for Startups",
    description:
      "We build scalable products so founders can focus on growth. Web platforms, mobile apps, and autonomous AI agents.",
    url: "https://www.joswebworks.in",
    siteName: "JOS Webworks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "JOS Webworks — Premium Product Studio for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JOS Webworks | Premium Product Studio for Startups",
    description:
      "We build scalable products so founders can focus on growth. Web platforms, mobile apps, and autonomous AI agents.",
    images: [
      {
        url: "/og-image.png",
        alt: "JOS Webworks — Premium Product Studio for Startups",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "JOS Webworks",
              "image": "https://www.joswebworks.in/og-image.png",
              "url": "https://www.joswebworks.in",
              "telephone": "+919119446550",
              "logo": "https://www.joswebworks.in/joswebworkslogo.png",
              "sameAs": [
                "https://github.com/joswebworks1",
                "https://instagram.com/joswebworks",
                "https://linkedin.com/company/joswebworks"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "Om Narkhede",
                  "jobTitle": "Co-Founder & Lead Developer"
                },
                {
                  "@type": "Person",
                  "name": "Jayesh Mahajan",
                  "jobTitle": "Co-Founder & Strategy Lead"
                },
                {
                  "@type": "Person",
                  "name": "Shivam Murkute",
                  "jobTitle": "Co-Founder & Design Lead"
                }
              ],
              "foundingDate": "2026",
              "description": "Premium Product Studio in Pune, India. We engineer high-performance web platforms (Next.js, React), mobile apps, and autonomous AI agents for startups.",
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web Development in Pune"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Autonomous AI Agent Integration"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body 
        className="min-h-full flex flex-col font-sans bg-white dark:bg-[#030303] text-slate-900 dark:text-neutral-100 transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
