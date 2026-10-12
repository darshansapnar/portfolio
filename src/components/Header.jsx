"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header({ showSkipIntro = true, skipIntroHref = "/home" }) {
  return (
    <header className="w-full px-6 py-6 sm:px-12 sm:py-8 md:px-16 flex items-center justify-between select-none z-20">
      {/* Brand Wordmark: Bold Red DS */}
      <Link
        href="/"
        className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B0D10] rounded-sm transition-transform duration-200 active:scale-95"
        aria-label="Darshan Portfolio Home"
      >
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#E50914] transition-opacity duration-200 group-hover:opacity-90">
          DS
        </span>
      </Link>

      {/* Skip Intro Link */}
      {showSkipIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Link
            href={skipIntroHref}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#B3B3B3] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-2 py-1"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      )}
    </header>
  );
}
