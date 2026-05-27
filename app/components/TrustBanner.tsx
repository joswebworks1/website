"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "TechFlow", style: "font-bold italic" },
  { name: "Meridian AI", style: "font-extrabold tracking-tight" },
  { name: "CloudStack", style: "font-semibold tracking-wide" },
  { name: "DataPulse", style: "font-black uppercase text-[0.85em]" },
  { name: "NeuralPath", style: "font-bold tracking-widest text-[0.9em]" },
  { name: "VentureSync", style: "font-extrabold italic tracking-tight" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function TrustBanner() {
  return (
    <section className="bg-slate-50/50 dark:bg-[#0a0a0a]/50 border-y border-slate-100 dark:border-neutral-900/60 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-400 dark:text-neutral-500"
        >
          Trusted by fast-growing startups and professionals.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 gap-y-6 md:gap-16"
        >
          {brands.map((brand) => (
            <motion.span
              key={brand.name}
              variants={itemVariants}
              className={`select-none text-xl text-slate-300 dark:text-neutral-600 md:text-2xl ${brand.style} hover:text-slate-400 dark:hover:text-neutral-400 transition-colors duration-200`}
            >
              {brand.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
