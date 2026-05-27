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
  title: "JOS Webworks | Premium Product Studio for Startups",
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
  ],
  openGraph: {
    title: "JOS Webworks | Premium Product Studio for Startups",
    description:
      "We build scalable products so founders can focus on growth. Web platforms, mobile apps, and autonomous AI agents.",
    type: "website",
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
