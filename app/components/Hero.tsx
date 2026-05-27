"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Server, TrendingUp, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import TypewriterHeadline from "./TypewriterHeadline";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      
      // Initialize with mouse at center initially
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--mouse-x", `${rect.width / 2}px`);
      container.style.setProperty("--mouse-y", `${rect.height / 2}px`);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 bg-[#f0f6ff] dark:bg-[#020810]"
    >
      {/* ── Real-time Interactive Spotlight Background ── */}
      <div aria-hidden="true" className="spotlight-bg" />

      {/* ── Vignette: dark edges + radial glow ── */}
      <div aria-hidden="true" className="hero-vignette" />



      {/* ── Repeating Glowing Vertical Lines (Pinstripes) matching Reference ── */}
      <div aria-hidden="true" className="hero-vertical-lines-container">
        <div className="hero-vertical-lines absolute inset-0" />
      </div>
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          maskImage: 'radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 0%, transparent 100%)'
        }}
      >
        <div className="hero-vertical-lines-interactive absolute inset-0" />
      </div>

      {/* ── Drifting Micro-Particles ── */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => {
          const particles = [
            { top: "15%", left: "20%", size: "4px", duration: "9s", delay: "0s" },
            { top: "45%", left: "15%", size: "6px", duration: "13s", delay: "-3s" },
            { top: "72%", left: "32%", size: "3px", duration: "11s", delay: "-5s" },
            { top: "25%", left: "68%", size: "5px", duration: "10s", delay: "-1.5s" },
            { top: "58%", left: "82%", size: "4px", duration: "14s", delay: "-4.5s" },
            { top: "83%", left: "58%", size: "5px", duration: "12s", delay: "-7s" },
          ];
          const particle = particles[i];
          return (
            <div
              key={`p-${i}`}
              className="absolute rounded-full bg-cyan-500/20 dark:bg-cyan-400/15 blur-[0.5px] animate-float-particle"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
                "--particle-duration": particle.duration,
                "--particle-delay": particle.delay,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Copy & Actions ── */}
          <motion.div
            className="lg:col-span-7 text-left flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline with Typewriter Effect */}
            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1] font-display min-h-[140px] sm:min-h-[170px] lg:min-h-[220px]"
            >
              <TypewriterHeadline />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-white leading-relaxed font-sans"
            >
              JOS Webworks engineers high-performance web platforms, mobile apps,
              and autonomous AI agents that give your startup operational leverage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-stretch justify-start gap-4 sm:flex-row sm:items-center w-full"
            >
              <a
                href="#book"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-blue-600/30 hover:border-blue-600/60 dark:border-[#00F5A0]/35 dark:hover:border-[#00F5A0]/60 bg-blue-50/10 hover:bg-blue-50/20 dark:bg-[#00F5A0]/5 dark:hover:bg-[#00F5A0]/10 backdrop-blur-md px-8 py-4 text-base font-semibold text-blue-600 dark:text-[#00F5A0] shadow-lg shadow-blue-500/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/15"
              >
                Book a Discovery Call
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-neutral-800/60 hover:border-slate-400 dark:hover:border-[#00F5A0]/30 bg-white/5 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-base font-semibold text-slate-700 dark:text-[#00F5A0]/95 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Our Portfolio
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2 text-sm text-slate-400 dark:text-neutral-500 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-[#00F5A0] shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_#00F5A0] animate-pulse" />
              <span>Free 30-min strategy session. No commitment.</span>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Auto-Scrolling Feature Columns ── */}
          <div className="hidden lg:block lg:col-span-5 h-[520px] overflow-hidden mask-fade relative">
            <div className="grid grid-cols-2 gap-4 h-full">
              
              {/* Left column - scrolling UP */}
              <div className="flex flex-col gap-4 animate-marquee-up hover:[animation-play-state:paused] cursor-pointer">
                {[...Array(2)].map((_, i) => (
                  <div key={`col1-${i}`} className="flex flex-col gap-4">
                    {/* Card 1: Conversion Analytics */}
                    <div className="bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-2xl p-5 shadow-sm relative overflow-hidden group/card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-[#0073CF]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">Metrics</span>
                      </div>
                      <div className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">+184%</div>
                      <p className="text-xs text-slate-500 dark:text-neutral-400">Increase in organic signup rates.</p>
                      
                      {/* Self-drawing micro sparkline */}
                      <div className="relative mt-4">
                        <svg className="w-full h-8 text-[#00C2CB] stroke-current fill-none" viewBox="0 0 100 20" strokeWidth="2">
                          <motion.path 
                            d="M0,15 Q15,5 30,12 T60,2 T90,14 T100,5" 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                          />
                        </svg>
                        <motion.div 
                          className="absolute w-2 h-2 bg-[#0073CF] rounded-full shadow-[0_0_8px_rgba(0,115,207,0.8)]"
                          style={{ left: "60px", top: "2px" }}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    {/* Card 2: AI Workflow Nodes */}
                    <div className="bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-[#00C2CB]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">AI Agent</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs border border-slate-100 dark:border-neutral-800 p-2 rounded-lg bg-white dark:bg-[#141414]">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-slate-600 dark:text-neutral-400">Inbound Request</span>
                        </div>
                        <motion.div 
                          className="flex items-center gap-2 text-xs border border-[#00C2CB]/30 p-2 rounded-lg bg-cyan-500/5 shadow-[0_0_8px_rgba(0,194,203,0.05)]"
                          animate={{ borderColor: ["rgba(0,194,203,0.2)", "rgba(0,194,203,0.6)", "rgba(0,194,203,0.2)"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-ping" />
                          <span className="text-[#00C2CB] font-medium">LLM Classifier</span>
                        </motion.div>
                        <div className="flex items-center gap-2 text-xs border border-emerald-500/20 p-2 rounded-lg bg-emerald-500/5">
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
                          />
                          <span className="text-emerald-500">Auto-Resolved</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Database Sync Ring */}
                    <div className="bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">Sync State</span>
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.svg 
                          className="w-8 h-8 text-[#0073CF]" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </motion.svg>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            Edge DB Sync
                            <motion.span 
                              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1.2, repeat: Infinity }}
                            />
                          </div>
                          <div className="text-[10px] text-slate-400 dark:text-neutral-500">100% synchronized</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column - scrolling DOWN */}
              <div className="flex flex-col gap-4 animate-marquee-down hover:[animation-play-state:paused] cursor-pointer">
                {[...Array(2)].map((_, i) => (
                  <div key={`col2-${i}`} className="flex flex-col gap-4">
                    {/* Card 4: Edge Server Speed */}
                    <div className="bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                          <Server className="w-4 h-4 text-indigo-500" />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">Network</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">us-east-1 (Vercel)</span>
                          <span className="font-semibold text-emerald-500 flex items-center gap-1.5">
                            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1, repeat: Infinity }} /> 8ms
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">eu-west-2 (London)</span>
                          <span className="font-semibold text-emerald-500 flex items-center gap-1.5">
                            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1, delay: 0.3, repeat: Infinity }} /> 12ms
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">ap-southeast-1</span>
                          <span className="font-semibold text-[#00C2CB] flex items-center gap-1.5">
                            <motion.span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB]" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1, delay: 0.6, repeat: Infinity }} /> 29ms
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 5: Design Tokens UI */}
                    <div className="bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                          <Cpu className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">UI Tokens</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="h-2 w-full bg-slate-200 dark:bg-neutral-800 rounded-full overflow-hidden relative">
                          <motion.div 
                            className="h-full bg-[#0073CF] rounded-full"
                            animate={{ width: ["30%", "85%", "30%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                          <div className="flex gap-1.5">
                            <motion.span className="w-4 h-4 rounded-full bg-slate-900 dark:bg-white" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
                            <span className="w-4 h-4 rounded-full bg-blue-500" />
                            <span className="w-4 h-4 rounded-full bg-cyan-500" />
                          </div>
                          <motion.span 
                            className="text-[10px] text-[#0073CF] font-bold uppercase tracking-wider"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                          >
                            Active
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    {/* Card 6: Chat Agent Bubble */}
                    <div className="bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded-full bg-[#0073CF] flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-900 dark:text-white">JOS Build Agent</span>
                      </div>
                      <div className="bg-slate-100 dark:bg-neutral-800/60 p-2.5 rounded-lg rounded-tl-none relative">
                        <p className="text-[11px] text-slate-600 dark:text-neutral-300 leading-relaxed font-mono">
                          PR #402: 12 checks passed. Merged into main. Deployed in 84ms.
                          <motion.span 
                            className="inline-block w-1.5 h-3 bg-slate-400 dark:bg-neutral-500 ml-0.5 align-middle"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
