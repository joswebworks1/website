"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Users,
  Briefcase,
  Zap,
  Heart,
  Target,
  TrendingUp,
  HeartHandshake,
  Rocket,
} from "lucide-react";

/* ── Brand SVG Icons (not in lucide-react v1+) ── */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/* ── Animation Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18, delay },
  }),
};

/* ── Team Data ── */
const team = [
  {
    name: "Om Narkhede",
    role: "Co-Founder & Lead Developer",
    bio: "Visionary developer and architect behind JOS Webworks' technical foundation. Om leads product engineering, ensuring every platform we ship is performant, scalable, and pixel-perfect.",
    image: "/om.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    gradient: "from-[#0073CF] to-[#00C2CB]",
    glowColor: "rgba(0,115,207,0.25)",
  },
  {
    name: "Jayesh Mahajan",
    role: "Co-Founder & Strategy Lead",
    bio: "The strategic mind of the trio, Jayesh bridges the gap between business goals and digital execution. He handles client relationships, growth strategy, and ensures every project delivers measurable impact.",
    image: "/jayesh.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    gradient: "from-[#00C2CB] to-[#0050A0]",
    glowColor: "rgba(0,194,203,0.25)",
  },
  {
    name: "Shivam Murkute",
    role: "Co-Founder & Design Lead",
    bio: "Shivam crafts the visual identity and user experiences that make our clients' brands stand out. His design philosophy merges aesthetics with function — creating interfaces users love to interact with.",
    image: "/shivam.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    gradient: "from-[#0050A0] to-[#0073CF]",
    glowColor: "rgba(0,80,160,0.25)",
  },
];

/* ── Stats ── */
const stats = [
  { icon: Briefcase, label: "Clients Served", value: "5+" },
  { icon: Zap, label: "Projects Delivered", value: "10+" },
  { icon: Users, label: "Founders", value: "3" },
  { icon: Heart, label: "Support Always", value: "24/7" },
];

/* ── Values ── */
const values = [
  {
    icon: Target,
    iconColor: "text-[#0073CF]",
    iconBg: "bg-[#0073CF]/10 dark:bg-[#0073CF]/15",
    title: "Mission-Driven",
    desc: "We exist to make digital excellence accessible to everyone, not just the big players.",
  },
  {
    icon: Zap,
    iconColor: "text-[#00C2CB]",
    iconBg: "bg-[#00C2CB]/10 dark:bg-[#00C2CB]/15",
    title: "Startup-Paced",
    desc: "As a young startup ourselves, we move fast, think lean, and deliver with urgency.",
  },
  {
    icon: HeartHandshake,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15",
    title: "Client-Obsessed",
    desc: "Your success is our success. We stay invested long after launch day.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    title: "Growing Together",
    desc: "Every client's win fuels our growth. We're building this journey alongside you.",
  },
];

/* ── WhatsApp SVG ── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-white dark:bg-[#030303]">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f0f6ff] dark:bg-[#020810]">
          {/* Background layers */}
          <div aria-hidden="true" className="spotlight-bg" />
          <div aria-hidden="true" className="hero-vignette" />
          <div aria-hidden="true" className="hero-vertical-lines-container">
            <div className="hero-vertical-lines absolute inset-0" />
          </div>

          {/* Floating particles */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[
              { top: "20%", left: "10%", size: "5px", duration: "10s", delay: "0s" },
              { top: "60%", left: "85%", size: "4px", duration: "13s", delay: "-4s" },
              { top: "40%", left: "70%", size: "6px", duration: "9s",  delay: "-2s" },
              { top: "75%", left: "25%", size: "3px", duration: "12s", delay: "-6s" },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-cyan-500/20 dark:bg-cyan-400/15 blur-[0.5px] animate-float-particle"
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

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 dark:border-cyan-500/20 bg-blue-500/5 dark:bg-cyan-500/5 backdrop-blur-sm mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-pulse" />
              <span className="text-xs font-semibold text-[#0073CF] dark:text-[#00C2CB] uppercase tracking-wider">
                Our Story
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Built by{" "}
              <span className="gradient-text">Three Friends,</span>
              <br />
              Driven by One Vision
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              JOS Webworks is a student-led digital agency on a mission to make premium digital
              solutions accessible to every business — especially those who don&apos;t know where to start.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#founders"
                className="group inline-flex items-center gap-2 rounded-full border border-blue-600/30 hover:border-blue-600/60 dark:border-cyan-500/30 dark:hover:border-cyan-500/60 bg-blue-50/10 hover:bg-blue-50/20 dark:bg-cyan-500/5 dark:hover:bg-cyan-500/10 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-blue-600 dark:text-[#00C2CB] shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Meet the Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 bg-white/5 hover:bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS BAR
        ═══════════════════════════════════════ */}
        <section className="py-14 bg-white dark:bg-[#030303] border-b border-slate-100 dark:border-neutral-900">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={i * 0.1}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-5 h-5 text-[#0073CF] dark:text-[#00C2CB]" />
                  </div>
                  <div className="text-3xl font-extrabold font-display gradient-text">{value}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            OUR STORY
        ═══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-white dark:bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Story copy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-blue-500/10 dark:bg-cyan-500/10 text-[#0073CF] dark:text-[#00C2CB] border border-blue-500/20 dark:border-cyan-500/20 mb-4">
                    Who We Are
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  custom={0.1}
                  className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight"
                >
                  Three college friends who decided to{" "}
                  <span className="gradient-text">build something real</span>
                </motion.h2>

                <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  JOS Webworks began where most great ideas do — in a college setting, fuelled by ambition
                  and a genuine desire to solve real problems. Jayesh, Om, and Shivam saw a gap: countless
                  small businesses and entrepreneurs were being left behind in the digital era simply because
                  they didn&apos;t have the right support or knowledge.
                </motion.p>

                <motion.p variants={fadeUp} custom={0.3} className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  So we built JOS Webworks — a digital agency designed specifically for businesses and
                  individuals who want to grow online but aren&apos;t sure where to begin. We handle everything
                  from websites and social media strategy to full digital marketing campaigns, so you can
                  focus on what you do best.
                </motion.p>

                <motion.p variants={fadeUp} custom={0.4} className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  Having already partnered with{" "}
                  <strong className="text-slate-800 dark:text-white">5+ clients</strong> across various industries,
                  we&apos;re a young agency with the hunger of a startup and the precision of seasoned professionals.
                  Every project we take on is a chance to prove that great digital work doesn&apos;t have to cost a fortune.
                </motion.p>

                {/* Social handles */}
                <motion.div variants={fadeUp} custom={0.5} className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/919119446550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp Channel
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/30 bg-blue-600/5 hover:bg-blue-600/10 text-[#0073CF] dark:text-blue-400 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: Values card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f0f6ff] to-[#e8f4fd] dark:from-[#0a1628] dark:to-[#020810] border border-slate-200/60 dark:border-neutral-800/60 p-8 shadow-xl">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#0073CF]/10 to-[#00C2CB]/10 dark:from-[#0073CF]/20 dark:to-[#00C2CB]/20 blur-xl" />
                  <div className="relative space-y-5">
                    {values.map(({ icon: Icon, iconColor, iconBg, title, desc }, i) => (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 120 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-100 dark:border-neutral-800/50 hover:border-[#0073CF]/30 dark:hover:border-[#00C2CB]/30 transition-colors duration-200"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                          <Icon className={`w-5 h-5 ${iconColor}`} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOUNDERS
        ═══════════════════════════════════════ */}
        <section id="founders" className="py-20 md:py-28 bg-[#f8faff] dark:bg-[#020810]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-blue-500/10 dark:bg-cyan-500/10 text-[#0073CF] dark:text-[#00C2CB] border border-blue-500/20 dark:border-cyan-500/20 mb-4">
                The Founders
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
                The people behind the work
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                We&apos;re not a faceless agency. We&apos;re three friends who care deeply about what we build —
                and who you&apos;re building it with.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map(({ name, role, bio, image, linkedin, github, instagram, gradient, glowColor }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }}
                  whileHover={{ boxShadow: `0 20px 60px ${glowColor}`, y: -8 }}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0d0d0d] border border-slate-200/60 dark:border-neutral-800/60 shadow-lg transition-all duration-500"
                >
                  {/* Top gradient stripe */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

                  <div className="relative pt-8 pb-10 px-6 flex flex-col items-center">
                    {/* Avatar */}
                    <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white dark:ring-[#0d0d0d] ring-offset-2 ring-offset-white dark:ring-offset-[#0d0d0d] shadow-xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 z-10`} />
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>

                    {/* Name & Role */}
                    <h3 className="mt-5 text-xl font-extrabold font-display text-slate-900 dark:text-white text-center">
                      {name}
                    </h3>
                    <p className={`mt-1 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent text-center`}>
                      {role}
                    </p>

                    {/* Bio */}
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-center">
                      {bio}
                    </p>

                    {/* Social icons */}
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} LinkedIn`}
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-neutral-800 text-slate-500 hover:text-[#0073CF] hover:border-[#0073CF]/30 hover:bg-[#0073CF]/5 dark:text-slate-400 dark:hover:text-[#00C2CB] dark:hover:border-[#00C2CB]/30 dark:hover:bg-[#00C2CB]/5 transition-all duration-200"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} GitHub`}
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-neutral-800 text-slate-500 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-900 transition-all duration-200"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} Instagram`}
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-neutral-800 text-slate-500 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 dark:text-slate-400 dark:hover:text-pink-400 dark:hover:border-pink-500/30 dark:hover:bg-pink-500/5 transition-all duration-200"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SUPPORT / JOURNEY
        ═══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-white dark:bg-[#030303]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-blue-500/10 dark:bg-cyan-500/10 text-[#0073CF] dark:text-[#00C2CB] border border-blue-500/20 dark:border-cyan-500/20 mb-4"
              >
                Our Journey
              </motion.span>

              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
              >
                We&apos;re growing — and your{" "}
                <span className="gradient-text">support means everything</span>
              </motion.h2>

              <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                We&apos;re a bootstrapped startup built from the ground up with nothing but passion, late nights,
                and a relentless commitment to quality. Every client we&apos;ve worked with has been a milestone —
                not just a number.
              </motion.p>

              <motion.p variants={fadeUp} custom={0.3} className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                As we grow, we&apos;re expanding our services, sharpening our craft, and building a portfolio
                we&apos;re incredibly proud of. If you believe in what we&apos;re doing — whether you&apos;re a potential client,
                a collaborator, or just someone who loves supporting young builders — we&apos;d love to have you
                on this journey with us.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0073CF]/10 to-[#00C2CB]/10 dark:from-[#0073CF]/15 dark:to-[#00C2CB]/15 border border-blue-500/20 dark:border-cyan-500/20"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0073CF]/10 dark:bg-[#00C2CB]/15 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-4 h-4 text-[#0073CF] dark:text-[#00C2CB]" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  5+ clients served · Growing every day · Best is yet to come
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CONTACT
        ═══════════════════════════════════════ */}
        <section id="contact" className="py-20 md:py-28 bg-[#f8faff] dark:bg-[#020810]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Copy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              >
                <motion.span variants={fadeUp} custom={0} className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-blue-500/10 dark:bg-cyan-500/10 text-[#0073CF] dark:text-[#00C2CB] border border-blue-500/20 dark:border-cyan-500/20 mb-4">
                  Reach Out
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  custom={0.1}
                  className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight"
                >
                  Have a project in mind?{" "}
                  <span className="gradient-text">Let&apos;s talk.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  Whether you want a new website, need help with social media, or simply want to understand
                  what digital marketing can do for your business — we&apos;re here for it. Reach out, and
                  let&apos;s figure out the best path forward together.
                </motion.p>
                <motion.p variants={fadeUp} custom={0.3} className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  No jargon, no pressure — just an honest conversation about how we can help you grow.
                </motion.p>
              </motion.div>

              {/* Right: Contact cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="space-y-4"
              >
                {/* Email */}
                <motion.a
                  variants={fadeUp}
                  custom={0}
                  href="mailto:joswebworks@gmail.com"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200/60 dark:border-neutral-800/60 hover:border-[#0073CF]/40 dark:hover:border-[#00C2CB]/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-[#0073CF] dark:text-[#00C2CB]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Email Us</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0073CF] dark:group-hover:text-[#00C2CB] transition-colors">
                      joswebworks@gmail.com
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-neutral-700 ml-auto group-hover:text-[#0073CF] dark:group-hover:text-[#00C2CB] group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>

                {/* Phone */}
                <motion.a
                  variants={fadeUp}
                  custom={0.1}
                  href="tel:+919119446550"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200/60 dark:border-neutral-800/60 hover:border-[#0073CF]/40 dark:hover:border-[#00C2CB]/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-[#0073CF] dark:text-[#00C2CB]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Call / WhatsApp</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0073CF] dark:group-hover:text-[#00C2CB] transition-colors">
                      +91 9119446550
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-neutral-700 ml-auto group-hover:text-[#0073CF] dark:group-hover:text-[#00C2CB] group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  variants={fadeUp}
                  custom={0.2}
                  href="https://wa.me/919119446550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200/60 dark:border-neutral-800/60 hover:border-green-500/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-200">
                    <WhatsAppIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">WhatsApp Chat</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      Message us directly
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-neutral-700 ml-auto group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>

                {/* Instagram DM */}
                <motion.a
                  variants={fadeUp}
                  custom={0.3}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200/60 dark:border-neutral-800/60 hover:border-pink-500/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors duration-200">
                    <MessageCircle className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">DM on Instagram</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">
                      @joswebworks
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-neutral-700 ml-auto group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
