"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative flex h-8 w-14 items-center rounded-full border border-slate-200/80 bg-slate-100/80 dark:border-neutral-800 dark:bg-neutral-900/60 p-1 cursor-pointer transition-colors duration-300 select-none focus:outline-none"
    >
      {/* Sliding Knob */}
      <motion.div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-black shadow-sm text-slate-600 dark:text-slate-350"
        animate={{
          x: theme === "light" ? 0 : 22,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        {theme === "light" ? (
          <Sun className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" strokeWidth={2.5} />
        ) : (
          <Moon className="h-3.5 w-3.5 text-cyan-400 fill-cyan-400/20" strokeWidth={2.5} />
        )}
      </motion.div>
    </button>
  );
}
