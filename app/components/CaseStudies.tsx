"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, TrendingUp, ChevronLeft, ChevronRight, Check, Eye, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface CaseStudy {
  icon: LucideIcon;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metricHighlight: string;
  projectUrl?: string; // Optional link to live project
  status?: "completed" | "working" | string; // Project status
  slides: {
    label: string;
    image?: string; // Optional path for user to drop in real images
    autoScroll?: boolean; // Enable vertical auto-scrolling for long screenshots
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    icon: TrendingUp,
    title: "UPLIFTX",
    challenge:
      "Event organizers struggled to find, coordinate, and manage reliable volunteers at scale, creating major bottlenecks for large-scale operations.",
    solution:
      "Designed and developed a premium volunteer management platform featuring real-time opportunity tracking, slot enrollment, and cryptographically verified digital certification.",
    result: "2,500+ volunteers onboarded · 100+ events managed",
    metricHighlight: "2.5K+ volunteers",
    projectUrl: "https://www.upliftxevents.com/",
    status: "completed",
    slides: [
      { label: "User Workout", image: "/UPLIFTX-1.png", autoScroll: true },
    ],
  },
  {
    icon: Heart,
    title: "Amoré",
    challenge:
      "Couples faced high stress and fragmentation trying to discover, communicate, and book luxury wedding vendors across separate platforms.",
    solution:
      "Built a unified luxury marketplace connecting couples with curated venues, decorators, photographers, and DJs, complete with digital booking, client portfolios, and invite tracking.",
    result: "12,000+ verified vendors · 4.9★ average couple rating",
    metricHighlight: "4.9★ rated",
    projectUrl: "https://ethereal-weddings.vercel.app/",
    status: "working",
    slides: [
      { label: "Live Platform", image: "/Amoré-1.png", autoScroll: true },
    ],
  },
  {
    icon: GraduationCap,
    title: "Pune Public School",
    challenge:
      "Teachers struggled with manual student management — tracking attendance, sharing timetables, and posting notices was time-consuming and disconnected, with no centralised system for students to stay updated.",
    solution:
      "Built a full-stack school management app with dual logins. Teachers can add students, manage timetables (auto-synced to students), mark attendance, and post daily notices & homework. Students can view their timetable, attendance records, notices, and personal profile — all in real time.",
    result: "Seamless teacher–student communication · Real-time timetable & attendance sync",
    metricHighlight: "Dual-role app",
    status: "completed",
    slides: [
      { label: "App Preview 1", image: "/pune public school app 1.jpeg", autoScroll: false },
      { label: "App Preview 2", image: "/pune public school app 2.jpeg", autoScroll: false },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CaseStudies() {
  return (
    <section id="work" className="bg-white dark:bg-[#030303] py-20 md:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-48 right-[-10%] w-[500px] h-[500px] bg-blue-500/2 dark:bg-blue-500/1 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center select-none"
        >
          {/* Upper Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 dark:border-cyan-500/10 dark:bg-cyan-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0073CF] dark:text-[#00C2CB] mb-4">
            <Eye className="w-3.5 h-3.5" /> Case Studies
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.1] font-sans">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#0073CF] bg-clip-text text-transparent">
              Proven Execution.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-neutral-400 max-w-xl mx-auto font-medium">
            Real projects. Measurable impact. Here&apos;s how we help founders design, build, and ship faster.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Case Study Card with Screenshot/Mockup Carousel ── */
function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = study.icon;
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % study.slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + study.slides.length) % study.slides.length);
  };

  // Render pre-designed HTML mockup previews if image is not supplied
  const renderSlidePreview = (studyIndex: number, slideIdx: number) => {
    return null;
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-50/50 dark:bg-[#0f0f0f] rounded-3xl p-6 border border-slate-100/85 dark:border-neutral-900/80 shadow-sm dark:shadow-none transition-all duration-300 hover:border-slate-200 dark:hover:border-neutral-800 hover:-translate-y-1 hover:shadow-md flex flex-col"
    >
      
      {/* ── Product Screenshot/Mockup Carousel ── */}
      <div className="relative w-full h-[240px] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-neutral-800/60 mb-6 bg-slate-100 dark:bg-black/60 group/carousel">
        
        {/* Slides transition content */}
        <div className="absolute inset-0 z-0">
          {study.slides[activeSlide].image ? (
            <img 
              src={study.slides[activeSlide].image} 
              alt={`${study.title} screenshot`}
              className={`w-full h-full object-cover ${
                study.slides[activeSlide].autoScroll ? "animate-screenshot-scroll" : ""
              }`}
            />
          ) : (
            renderSlidePreview(index, activeSlide)
          )}
        </div>

        {/* Slide navigation controls */}
        {study.slides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 dark:bg-black/80 text-slate-800 dark:text-neutral-200 border border-slate-200/30 dark:border-neutral-800/30 flex items-center justify-center hover:bg-white dark:hover:bg-black active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 dark:bg-black/80 text-slate-800 dark:text-neutral-200 border border-slate-200/30 dark:border-neutral-800/30 flex items-center justify-center hover:bg-white dark:hover:bg-black active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Thumbnail tab selector / dots */}
        {study.slides.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
            {study.slides.map((slide, slideIdx) => (
              <button
                key={slide.label}
                onClick={() => setActiveSlide(slideIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === slideIdx 
                    ? "w-4 bg-[#00C2CB]" 
                    : "w-1.5 bg-neutral-400/50 hover:bg-neutral-200"
                }`}
                title={slide.label}
                aria-label={`Go to slide ${slideIdx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Slide name badge */}
        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase tracking-wider border border-white/5 z-10">
          {study.slides[activeSlide].label}
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-slate-200 dark:border-neutral-700 text-[#0073CF] dark:text-[#00C2CB]">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {study.title}
          </h3>
        </div>
        {study.status && (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border transition-all duration-300 ${
            study.status === "completed"
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/10"
              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 dark:border-amber-500/10"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              study.status === "completed" ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
            }`} />
            {study.status}
          </span>
        )}
      </div>

      {/* Challenge */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="w-1 h-1.5 rounded-full bg-rose-500" />
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-rose-500">
            Challenge
          </span>
        </div>
        <div className="pl-2.5 border-l border-rose-500/20">
          <p className="text-xs md:text-sm text-slate-500 dark:text-neutral-400 leading-relaxed font-medium">
            {study.challenge}
          </p>
        </div>
      </div>

      {/* Solution */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="w-1 h-1.5 rounded-full bg-blue-500" />
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-500">
            Solution
          </span>
        </div>
        <div className="pl-2.5 border-l border-blue-500/20">
          <p className="text-xs md:text-sm text-slate-500 dark:text-neutral-400 leading-relaxed font-medium">
            {study.solution}
          </p>
        </div>
      </div>

      {/* Result */}
      <div className="mt-auto">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="w-1 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-500">
            Result
          </span>
        </div>
        <div className="pl-2.5 border-l border-emerald-500/20">
          <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-neutral-300 leading-relaxed">
            {study.result}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold tracking-wide border border-emerald-100 dark:border-emerald-900/40 uppercase">
            {study.metricHighlight}
          </span>
          {study.projectUrl && (
            <a
              href={study.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C2CB] hover:text-[#0073CF] transition-colors group/link"
            >
              Visit Website
              <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
