"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-slate-100 shadow-sm dark:bg-black dark:border-neutral-900"
            : "bg-white dark:bg-black"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center select-none"
          >
            <Image
              src="/joswebworkslogo.png"
              alt="JOS Webworks Logo"
              width={320}
              height={80}
              className="h-20 w-auto object-contain -my-4.5"
              priority
            />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/#book"
              className="inline-flex items-center justify-center rounded-full border border-blue-500/30 dark:border-cyan-500/30 bg-blue-500/10 hover:bg-blue-500/20 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 backdrop-blur-md px-5 py-2 text-sm font-semibold text-[#0073CF] dark:text-[#00C2CB] transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md active:translate-y-0"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex md:hidden items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-300 dark:hover:bg-neutral-900/40"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden dark:bg-black"
          >
            <div className="flex min-h-full flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  className="text-2xl font-semibold text-slate-800 transition-colors hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="mt-4 flex flex-col items-center gap-6"
              >
                <ThemeToggle />
                <a
                  href="/#book"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-blue-500/30 dark:border-cyan-500/30 bg-blue-500/10 hover:bg-blue-500/20 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-[#0073CF] dark:text-[#00C2CB] transition-all duration-200 hover:-translate-y-0.5 shadow-lg active:translate-y-0"
                >
                  Book a Call
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
