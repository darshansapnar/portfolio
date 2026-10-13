"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero Component
 * 
 * Cinematic streaming-platform hero banner:
 * - Abstract 3D glass geometry background with glowing red edges (#E50914)
 * - Multi-tier dark gradient overlays for maximum text legibility
 * - Left-aligned vertically-centered content
 * - Eyebrow, Main Heading (DARSHAN SAPNAR with SAPNAR in red), Subtitle, Description
 * - Primary "▶ View Projects" and Secondary "Download Resume" buttons
 * - Compact Stats row with subtle red-accented vertical separators
 * - Restrained, cinematic staggered entrance animations
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { value: "3+", label: "Major Projects" },
    { value: "69+", label: "LeetCode Problems" },
    { value: "5+", label: "Technologies" },
    { value: "∞", label: "Learning" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full overflow-hidden bg-[#080808] bg-cover bg-no-repeat bg-[right_35%] sm:bg-[right_25%] md:bg-right px-5 sm:px-12 md:px-16 lg:px-20 select-text"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* 1. Left-to-right dark gradient overlay: keeps left 50% dark & quiet for readable text */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#080808] via-[#080808]/95 sm:via-[#080808]/85 md:via-[#080808]/75 to-[#080808]/70 md:to-transparent"
        aria-hidden="true"
      />

      {/* 2. Top subtle vignette overlay for clear header visibility */}
      <div
        className="absolute inset-x-0 top-0 h-36 z-[2] pointer-events-none bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent"
        aria-hidden="true"
      />

      {/* 3. Bottom fade overlay into pure black (#080808) */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 z-[2] pointer-events-none bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent"
        aria-hidden="true"
      />

      {/* Hero Content - Aligned with shared section container boundary */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-14 sm:pb-16 md:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl md:max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Eyebrow: A DEVELOPER ORIGINAL */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-3 sm:mb-4 select-none"
          >
            <span className="w-1.5 h-3.5 bg-[#E50914] rounded-xs" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#B3B3B3] uppercase">
              A DEVELOPER ORIGINAL
            </span>
          </motion.div>

          {/* Main Heading: DARSHAN SAPNAR */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white uppercase leading-[0.95] mb-4 sm:mb-5 drop-shadow-sm"
          >
            DARSHAN <span className="text-[#E50914]">SAPNAR</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-medium text-white/90 mb-3 tracking-wide"
          >
            Final Year B.Tech IT Student | Full-Stack Developer | AI | Problem Solver
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-xl mb-7 sm:mb-8 leading-relaxed font-normal"
          >
            Building scalable applications, exploring AI, and turning ideas into real products.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-[#E50914] hover:bg-[#b80710] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E50914]/25 active:translate-y-0 active:scale-[0.98] text-white text-sm sm:text-base font-semibold rounded-md shadow-lg shadow-black/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white select-none"
            >
              <span className="text-xs sm:text-sm">▶</span>
              <span>View Projects</span>
            </a>

            {/* Secondary Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-black/50 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white text-sm sm:text-base font-medium rounded-md border border-[#333333] backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white select-none"
            >
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-4 gap-x-3 sm:gap-x-6 pt-6 border-t border-[#333333]/80 max-w-xl"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 group/stat">
                <div className="flex flex-col transition-transform duration-200 group-hover/stat:-translate-y-0.5">
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#B3B3B3] font-normal">
                    {stat.label}
                  </span>
                </div>

                {/* Vertical Separator with Red Accent */}
                {index < stats.length - 1 && (
                  <div
                    className="hidden sm:flex h-8 w-px bg-[#333333] relative items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute w-[2px] h-3 bg-[#E50914] rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
