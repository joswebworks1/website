"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem("promo-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
      document.documentElement.classList.add("has-promo-banner");
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("promo-banner-dismissed", "true");
    document.documentElement.classList.remove("has-promo-banner");
  };

  if (!mounted || !isVisible) {
    return null;
  }

  const promoText = "Special Offer — Professional website designed and built in 2 weeks! ✨ Plus one month of free revisions! 🚀 Get started today!";

  return (
    <div className="fixed top-0 left-0 right-0 h-9 bg-gradient-to-r from-[#00C2CB] to-[#0073CF] text-white flex items-center justify-between overflow-hidden z-[100] shadow-sm select-none border-b border-white/10">
      {/* Moving Text Marquee */}
      <div className="flex w-full items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-left font-sans text-xs font-semibold uppercase tracking-wider">
          <div className="flex shrink-0 gap-8 px-4">
            <span>{promoText}</span>
            <span className="opacity-40">•</span>
          </div>
          <div className="flex shrink-0 gap-8 px-4" aria-hidden="true">
            <span>{promoText}</span>
            <span className="opacity-40">•</span>
          </div>
          <div className="flex shrink-0 gap-8 px-4" aria-hidden="true">
            <span>{promoText}</span>
            <span className="opacity-40">•</span>
          </div>
          <div className="flex shrink-0 gap-8 px-4" aria-hidden="true">
            <span>{promoText}</span>
            <span className="opacity-40">•</span>
          </div>
        </div>
      </div>

      {/* Fixed Close Button with Gradient Fade Background */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0073CF] via-[#0073CF]/90 to-transparent flex items-center justify-end pr-4 pointer-events-none z-10">
        <button
          onClick={handleClose}
          className="pointer-events-auto p-1 text-white hover:text-cyan-200 transition-colors rounded-full hover:bg-white/10 active:scale-95 flex items-center justify-center"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4 animate-pulse" />
        </button>
      </div>
    </div>
  );
}
