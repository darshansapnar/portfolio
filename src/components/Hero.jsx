"use client";

import { motion } from "framer-motion";

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
 */
export default function Hero() {
  const stats = [
    { value: "3+", label: "Major Projects" },
    { value: "69+", label: "LeetCode Problems" },
    { value: "5+", label: "Technologies" },
    { value: "∞", label: "Learning" },
  ];

  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808] bg-cover bg-no-repeat bg-[right_35%] sm:bg-[right_25%] md:bg-right select-text"
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
        className="absolute inset-x-0 bottom-0 h-36 sm:h-48 z-[2] pointer-events-none bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent"
        aria-hidden="true"
      />

      {/* Hero Content - Vertically centered and positioned on the left side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 pt-24 pb-24 sm:py-32 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl md:max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Eyebrow: A DEVELOPER ORIGINAL */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
            <span className="w-1.5 h-3.5 bg-[#E50914] rounded-xs" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#B3B3B3] uppercase">
              A DEVELOPER ORIGINAL
            </span>
          </div>

          {/* Main Heading: DARSHAN SAPNAR */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white uppercase leading-[0.95] mb-4 sm:mb-5 drop-shadow-sm">
            DARSHAN <span className="text-[#E50914]">SAPNAR</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 mb-3 tracking-wide">
            Final Year B.Tech IT Student | Full-Stack Developer | AI Enthusiast
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-xl mb-7 sm:mb-8 leading-relaxed font-normal">
            Building scalable applications, exploring AI, and turning ideas into real products.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Primary Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-[#E50914] hover:bg-[#b80710] active:scale-[0.98] text-white text-sm sm:text-base font-semibold rounded-md shadow-lg shadow-black/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white select-none"
            >
              <span className="text-xs sm:text-sm">▶</span>
              <span>View Projects</span>
            </a>

            {/* Secondary Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-black/50 hover:bg-white/10 active:scale-[0.98] text-white text-sm sm:text-base font-medium rounded-md border border-[#333333] hover:border-white/50 backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white select-none"
            >
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-4 gap-x-3 sm:gap-x-6 pt-6 border-t border-[#333333]/80 max-w-xl">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#B3B3B3] font-normal">
                    {stat.label}
                  </span>
                </div>

                {/* Vertical Separator with Red Accent (shown on desktop or within rows) */}
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
          </div>
        </motion.div>
      </div>

    </section>
  );
}
