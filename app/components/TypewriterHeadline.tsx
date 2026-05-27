"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypewriterHeadline() {
  const part1 = "We Build ";
  const part2 = "Scalable Products";
  const part3 = " So Founders Can Focus on Growth.";
  const totalLength = part1.length + part2.length + part3.length;

  const [charCount, setCharCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (charCount >= totalLength) {
      setIsDone(true);
      return;
    }

    // Determine typing speed based on character type for a natural human feel
    let delay = 35; // base speed
    const currentPos = charCount;
    const allText = part1 + part2 + part3;
    const lastChar = allText[currentPos - 1];

    if (lastChar === " ") {
      delay = 55; // pause slightly after spaces
    } else if (lastChar === "." || lastChar === ",") {
      delay = 200; // longer pause at punctuation
    } else {
      // Add slight random variance
      delay = 25 + Math.random() * 25;
    }

    const timer = setTimeout(() => {
      setCharCount((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [charCount, totalLength]);

  const getSlicedText = () => {
    let p1 = "";
    let p2 = "";
    let p3 = "";

    if (charCount <= part1.length) {
      p1 = part1.slice(0, charCount);
    } else if (charCount <= part1.length + part2.length) {
      p1 = part1;
      p2 = part2.slice(0, charCount - part1.length);
    } else {
      p1 = part1;
      p2 = part2;
      p3 = part3.slice(0, charCount - part1.length - part2.length);
    }

    return { p1, p2, p3 };
  };

  const { p1, p2, p3 } = getSlicedText();

  return (
    <span className="relative text-slate-900 dark:text-white">
      {p1}
      {p2 && (
        <span className="text-slate-900 dark:text-white font-extrabold">
          {p2}
        </span>
      )}
      {p3}
      
      {/* Blinking Cursor */}
      <motion.span
        className={`inline-block w-[3px] h-[0.85em] ml-1.5 align-middle ${
          isDone 
            ? "bg-slate-400 dark:bg-neutral-500" 
            : "bg-[#0073CF] dark:bg-[#00C2CB] shadow-[0_0_8px_rgba(0,194,203,0.8)]"
        }`}
        animate={isDone ? { opacity: [1, 0, 1] } : { opacity: [1, 0.2, 1], scaleY: [1, 1.05, 1] }}
        transition={{
          duration: isDone ? 1.2 : 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </span>
  );
}
