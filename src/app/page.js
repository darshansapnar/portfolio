"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "@/components/Header";

export default function WelcomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#070102] bg-[radial-gradient(ellipse_85%_70%_at_50%_38%,_#2e090f_0%,_#1b0508_45%,_#0e0204_72%,_#070102_100%)] select-none">
      {/* Subtle cinematic burgundy/wine ambient background shade */}
      <div
        className="pointer-events-none absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] md:w-[950px] h-[380px] sm:h-[480px] md:h-[580px] bg-gradient-to-b from-[#8f1018]/14 via-[#33070c]/28 to-transparent rounded-full blur-[90px] sm:blur-[130px] -z-0"
        aria-hidden="true"
      />

      {/* Header with DS wordmark and ENTER PORTFOLIO link */}
      <Header showNav={false} />

      {/* Centered Profile Content Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-6 -mt-3 sm:-mt-5 md:-mt-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center text-center max-w-4xl w-full"
        >
          {/* Netflix Style Profile Avatar */}
          <Link
            href="/home"
            tabIndex={-1}
            aria-hidden="true"
            className="relative group cursor-pointer focus:outline-none"
          >
            {/* Profile Avatar Container with thin, understated red border */}
            <div className="relative w-[155px] h-[155px] sm:w-[195px] sm:h-[195px] md:w-[218px] md:h-[218px] aspect-square rounded-2xl overflow-hidden border border-[#E50914]/40 group-hover:border-[#E50914]/80 shadow-xl shadow-black/70 transition-all duration-300 ease-out bg-[#0e0204]">
              <Image
                src="/images/netflix-avatar.png"
                alt="Netflix Profile Placeholder"
                fill
                sizes="(max-width: 640px) 155px, (max-width: 768px) 195px, 218px"
                priority
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Name: DARSHAN in white, SAPNAR in vivid red (clean typography, no neon glow) */}
          <h1 className="mt-6 sm:mt-7 md:mt-8 text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-black tracking-tight leading-none text-white flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
            <span>DARSHAN</span>
            <span className="text-[#E50914]">
              SAPNAR
            </span>
          </h1>

          {/* Softened, subtle horizontal divider line (no bright neon flare) */}
          <div
            className="relative flex items-center justify-center w-28 sm:w-36 h-2 my-2 sm:my-2.5 pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/35 to-transparent" />
          </div>

          {/* Tagline: DEVELOPER · AI · PROBLEM SOLVER */}
          <p className="mt-0.5 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#b0b0b6] flex items-center justify-center flex-wrap">
            <span>DEVELOPER</span>
            <span className="text-[#E50914]/80 mx-2 sm:mx-3.5 font-bold select-none text-xs">
              ·
            </span>
            <span>AI</span>
            <span className="text-[#E50914]/80 mx-2 sm:mx-3.5 font-bold select-none text-xs">
              ·
            </span>
            <span>PROBLEM SOLVER</span>
          </p>

          {/* Primary Action Button: Solid, muted crimson red, no permanent neon glow */}
          <div className="mt-6 sm:mt-8 md:mt-9">
            <Link
              href="/home"
              className="group inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 bg-[#B81D24] hover:bg-[#a1181e] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] rounded-md transition-all duration-200 shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/70 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              <span>ENTER PORTFOLIO</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Minimal bottom spacer for layout balance */}
      <div className="py-4 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
