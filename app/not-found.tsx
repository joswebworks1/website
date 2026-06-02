"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, Compass } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18, delay },
  }),
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-white dark:bg-[#030303] relative overflow-hidden flex flex-col justify-center min-h-[70vh] pt-32 pb-20">
        {/* Glowing Background spotlights */}
        <div aria-hidden="true" className="spotlight-bg" />
        <div aria-hidden="true" className="hero-vignette" />
        
        {/* Floating particles */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[
            { top: "25%", left: "15%", size: "4px", duration: "11s", delay: "0s" },
            { top: "70%", left: "80%", size: "5px", duration: "14s", delay: "-3s" },
            { top: "35%", left: "75%", size: "3px", duration: "10s", delay: "-1s" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20 dark:bg-cyan-400/15 blur-[0.5px] animate-float-particle"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                "--particle-duration": p.duration,
                "--particle-delay": p.delay,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-md mx-auto px-6 text-center">
          {/* Glowing Icon */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl border border-blue-500/20 dark:border-cyan-500/20 bg-blue-500/5 dark:bg-cyan-500/5 backdrop-blur-md mb-8 relative group"
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#0073CF]/20 to-[#00C2CB]/20 blur opacity-40 group-hover:opacity-75 transition duration-300" />
            <Compass className="w-10 h-10 text-[#0073CF] dark:text-[#00C2CB] animate-spin-slow relative" />
          </motion.div>

          {/* Huge 404 Text */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-8xl md:text-9xl font-extrabold font-display tracking-tighter bg-gradient-to-r from-[#0073CF] via-[#00A1D6] to-[#00C2CB] bg-clip-text text-transparent leading-none"
          >
            404
          </motion.h1>

          {/* Section Subtitle */}
          <motion.h2
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-2xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
          >
            The digital platform or resource you are looking for has been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-blue-600/30 hover:border-blue-600/60 dark:border-cyan-500/30 dark:hover:border-cyan-500/60 bg-blue-500/5 hover:bg-blue-500/10 dark:bg-cyan-500/5 dark:hover:bg-cyan-500/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-blue-600 dark:text-[#00C2CB] shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              Go Back Home
            </Link>
            <Link
              href="/about#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 bg-white/5 hover:bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
