"use client";

import { Globe, Smartphone, Bot, Check, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Next-Gen Web Platforms",
    icon: Globe,
    description:
      "Lightning-fast web applications built with Next.js, React, and Tailwind. Optimized for extreme performance, SEO conversion, and global edge delivery.",
    features: ["Server-Side Rendering (SSR)", "Global Edge caching", "Real-time user analytics", "100% Core Web Vitals score"],
    highlighted: false,
    color: "from-cyan-500/25 to-blue-500/10",
    activeColor: "from-cyan-500/40 via-blue-500/30 to-cyan-500/10",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,194,203,0.15)]",
  },
  {
    title: "Autonomous AI Agents",
    icon: Bot,
    description:
      "Custom AI integrations that automate repetitive customer workflows, process unstructured files, and make real-time decisions with operational leverage.",
    features: [
      "Custom LLM API orchestration",
      "Event-driven workflow triggers",
      "Automated file processing pipelines",
      "Self-correcting agent execution",
    ],
    highlighted: true,
    color: "from-purple-500/20 via-cyan-500/20 to-blue-500/10",
    activeColor: "from-purple-500/40 via-cyan-500/40 to-blue-500/20",
    glow: "shadow-[0_0_30px_rgba(0,194,203,0.1)] dark:shadow-none group-hover:shadow-[0_0_40px_rgba(0,194,203,0.25)]",
  },
  {
    title: "Native Mobile Apps",
    icon: Smartphone,
    description:
      "Sleek, fluid iOS and Android mobile experiences engineered with React Native. From rapid prototype validation to global app store deployment.",
    features: ["Cross-platform fluid UI", "Rich push notification server", "Secure offline-first syncing", "Biometric & payment checkouts"],
    highlighted: false,
    color: "from-blue-500/20 to-indigo-500/10",
    activeColor: "from-blue-500/40 via-indigo-500/35 to-blue-500/10",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,115,207,0.15)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);

  // Colors for the grid based on active card
  const gridColors = [
    "rgba(0, 194, 203, 0.12)",  // Web (Cyan)
    "rgba(147, 51, 234, 0.15)", // AI (Purple)
    "rgba(59, 130, 246, 0.12)",  // Mobile (Blue)
  ];

  return (
    <section 
      id="services" 
      className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#030303] border-y border-slate-100 dark:border-neutral-900/60 relative overflow-hidden transition-colors duration-500"
      style={{
        "--grid-accent-color": gridColors[activeIndex]
      } as React.CSSProperties}
    >
      {/* ── Grid Background ── */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_70%,transparent_100%)] opacity-35 dark:opacity-20 transition-all duration-500"
      />

      {/* Dynamic Background Glow Orb (Smoothly slides and changes color behind active card) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <motion.div 
          className="w-[450px] h-[450px] rounded-full blur-[110px]"
          animate={{
            backgroundColor: activeIndex === 0 ? "rgba(0, 194, 203, 0.07)" : activeIndex === 2 ? "rgba(59, 130, 246, 0.07)" : "rgba(147, 51, 234, 0.08)",
            x: activeIndex === 0 ? -320 : activeIndex === 2 ? 320 : 0,
            y: activeIndex === 0 ? -50 : activeIndex === 2 ? 50 : 0,
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center select-none"
        >
          {/* Upper Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 dark:border-cyan-500/10 dark:bg-cyan-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0073CF] dark:text-[#00C2CB] mb-4">
            <Zap className="w-3.5 h-3.5" /> Capabilities
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.1] font-sans">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#0073CF] bg-clip-text text-transparent">
              scale, under one roof.
            </span>
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-neutral-400 max-w-xl mx-auto font-medium">
            From concept to deployment, we handle the full stack. Click on the cards below to preview our technology.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Card 1: Web Platforms */}
          <ServiceCard 
            service={services[0]} 
            index={0}
            isActive={activeIndex === 0}
            onSelect={() => setActiveIndex(0)}
          >
            <WebPlatformsVisual />
          </ServiceCard>

          {/* Card 2: AI Agents (Highlighted) */}
          <ServiceCard 
            service={services[1]} 
            index={1}
            isActive={activeIndex === 1}
            onSelect={() => setActiveIndex(1)}
          >
            <AIAgentsVisual />
          </ServiceCard>

          {/* Card 3: Mobile Apps */}
          <ServiceCard 
            service={services[2]} 
            index={2}
            isActive={activeIndex === 2}
            onSelect={() => setActiveIndex(2)}
          >
            <MobileAppsVisual />
          </ServiceCard>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Bento Card ── */
function ServiceCard({
  service,
  index,
  isActive,
  onSelect,
  children,
}: {
  service: (typeof services)[number];
  index: number;
  isActive: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) {
  const Icon = service.icon;
  const isCenter = service.highlighted;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={onSelect}
      className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${
        isActive ? service.activeColor : service.color
      } transition-all duration-500 ${service.glow} flex flex-col cursor-pointer select-none ${
        isActive 
          ? "scale-[1.01] shadow-xl shadow-cyan-500/5 ring-1 ring-cyan-500/20 dark:ring-cyan-400/20" 
          : "opacity-60 dark:opacity-50 hover:opacity-100 transition-all duration-300"
      }`}
    >
      {/* Inner Card Body */}
      <div className={`relative h-full rounded-[23px] p-6 md:p-8 flex flex-col flex-1 justify-between overflow-hidden transition-all duration-500 border ${
        isActive 
          ? "bg-white dark:bg-[#121212] border-cyan-500/30 dark:border-cyan-400/30" 
          : "bg-white/80 dark:bg-[#0f0f0f] border-slate-100/50 dark:border-neutral-900/60"
      }`}>
        
        {/* Subtle overlay decorative blur */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-cyan-400/5 blur-2xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />

        {/* Top Section */}
        <div>
          {/* Header row (Icon & Badge) */}
          <div className="flex items-center justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${
              isActive 
                ? "border-[#00C2CB] text-[#00C2CB]" 
                : "border-slate-200 dark:border-neutral-700 text-slate-400 dark:text-neutral-500"
            }`}>
              <Icon className="h-5 w-5" />
            </div>
            
            {isCenter && (
              <span className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-[10px] font-bold text-white tracking-wider uppercase transition-all duration-500 ${
                isActive 
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md shadow-purple-500/25 animate-pulse" 
                  : "bg-neutral-600 px-3 py-0.5 text-white"
              }`}>
                <Sparkles className="w-3 h-3" /> Core Service
              </span>
            )}
          </div>

          <h3 className="mt-6 text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
            {service.title}
          </h3>
          <p className="mt-2.5 text-sm md:text-base text-slate-500 dark:text-neutral-400 leading-relaxed font-medium transition-colors duration-500">
            {service.description}
          </p>
        </div>

        {/* Visual Graphic Showcase (Inserted in the middle) */}
        <div className={`my-6 py-4 flex items-center justify-center border-y rounded-2xl min-h-[140px] transition-colors duration-500 ${
          isActive 
            ? "border-cyan-500/10 dark:border-cyan-400/10 bg-cyan-500/5 dark:bg-cyan-500/2" 
            : "border-slate-50 dark:border-neutral-900/40 bg-slate-50/30 dark:bg-neutral-900/10"
        }`}>
          {children}
        </div>

        {/* Bottom Section: Feature Checklist */}
        <ul className="flex flex-col gap-2.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <span className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                isActive 
                  ? "bg-cyan-500/20 dark:bg-cyan-400/25 text-[#00C2CB]" 
                  : "bg-blue-500/10 dark:bg-blue-400/10 text-slate-400 dark:text-neutral-500"
              }`}>
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span className={`transition-colors duration-500 ${isActive ? "text-slate-800 dark:text-slate-100" : "text-slate-500 dark:text-neutral-400"}`}>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ── Visual Mockup: Web Platforms ── */
function WebPlatformsVisual() {
  return (
    <div className="w-full max-w-[240px] bg-[#0c0c0e]/90 border border-neutral-800 rounded-xl p-3 shadow-md font-mono text-[10px]">
      {/* Browser Bar */}
      <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-neutral-800">
        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        <div className="flex-1 bg-neutral-900 rounded px-2 py-0.5 text-[8px] text-neutral-500 text-center truncate">
          joswebworks.com/speed
        </div>
      </div>
      {/* Body content */}
      <div className="flex items-center justify-between gap-2">
        {/* Performance Ring */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-neutral-800" strokeWidth="2.5" />
              <motion.circle 
                cx="18" 
                cy="18" 
                r="16" 
                fill="none" 
                className="stroke-emerald-500" 
                strokeWidth="2.5" 
                strokeDasharray="100 100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
            </svg>
            <span className="absolute text-[10px] font-bold text-emerald-500">100</span>
          </div>
          <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Lighthouse</span>
        </div>
        
        {/* Metrics List */}
        <div className="flex flex-col gap-1.5 text-neutral-400 font-sans">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>FCP: <strong className="text-white">0.3s</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>LCP: <strong className="text-white">0.5s</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>SEO Score: <strong className="text-white">100%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Visual Mockup: AI Agents ── */
function AIAgentsVisual() {
  return (
    <div className="w-full max-w-[240px] flex flex-col items-stretch gap-2.5 font-sans">
      {/* Node 1: Input */}
      <div className="flex items-center justify-between border border-neutral-800 dark:border-neutral-800 bg-[#0f0f11] p-2 rounded-lg text-[10px] text-neutral-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0073CF]" />
          <span>Inbound Document</span>
        </div>
        <span className="text-[8px] bg-neutral-900 px-1 py-0.2 rounded text-neutral-500 font-mono">invoice.pdf</span>
      </div>

      {/* Node 2: Processing (Bot) */}
      <div className="relative flex items-center justify-center py-1">
        {/* Connection line */}
        <div className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-[#0073CF] via-[#00C2CB] to-emerald-500" />
        
        {/* Glowing Bot bubble */}
        <motion.div 
          className="relative z-10 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 border border-white/20"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bot className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Node 3: Success */}
      <div className="flex items-center justify-between border border-emerald-500/20 bg-emerald-500/5 p-2 rounded-lg text-[10px] text-emerald-500">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Structured Data Extracted</span>
        </div>
        <span className="text-[8px] bg-emerald-950/20 px-1.5 py-0.5 rounded text-emerald-400 font-semibold font-mono">100% Success</span>
      </div>
    </div>
  );
}

/* ── Visual Mockup: Mobile Apps ── */
function MobileAppsVisual() {
  return (
    <div className="w-[110px] h-[136px] bg-[#0c0c0e] border-[3px] border-neutral-800 rounded-[18px] relative overflow-hidden shadow-md font-sans text-white p-2">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-neutral-800 rounded-b-lg z-20" />
      
      {/* Top Header */}
      <div className="flex justify-between items-center text-[7px] text-neutral-500 pt-0.5 px-0.5 mb-1.5">
        <span>9:41</span>
        <div className="flex items-center gap-0.5">
          <span className="w-1 h-1 rounded-full bg-neutral-500" />
          <span className="w-1.5 h-1 rounded bg-neutral-500" />
        </div>
      </div>

      {/* Chart Block */}
      <div className="bg-[#141417] border border-neutral-800/80 rounded-lg p-1.5 flex flex-col gap-1">
        <span className="text-[7px] text-neutral-400 font-semibold uppercase tracking-wider">Metrics</span>
        <div className="text-[12px] font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
          +42.8%
        </div>
        
        {/* Simple path animation */}
        <div className="h-5 flex items-end">
          <svg className="w-full h-full text-blue-500 fill-none" viewBox="0 0 50 15">
            <motion.path 
              d="M0,15 L10,12 L20,8 L30,10 L40,3 L50,0" 
              stroke="currentColor" 
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Small floating UI card inside */}
      <motion.div 
        className="absolute bottom-1.5 left-1.5 right-1.5 bg-cyan-500/10 border border-[#00C2CB]/25 p-1 rounded-md flex items-center justify-between text-[6px] text-[#00C2CB] shadow-lg shadow-cyan-500/5"
        animate={{ y: [2, -2, 2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Push Active</span>
        <span className="w-1 h-1 rounded-full bg-[#00C2CB] animate-ping" />
      </motion.div>
    </div>
  );
}
