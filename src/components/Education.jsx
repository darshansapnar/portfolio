"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-label="Education Section"
      className="relative w-full bg-[#080808] py-20 sm:py-24 md:py-28 px-5 sm:px-12 md:px-16 lg:px-20 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#E50914]/5 via-[#200609]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="mb-10 sm:mb-12"
        >
          {/* Eyebrow Accent */}
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-1.5 h-3.5 bg-[#E50914] rounded-xs" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#B3B3B3] uppercase">
              ACADEMIC BACKGROUND
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            Education
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-2xl font-normal">
            Formal education in engineering and technology.
          </p>
        </motion.div>

        {/* Compact Education Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-[#E50914]/40 hover:-translate-y-1 transition-all duration-300 ease-out shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60 select-text"
        >
          {/* Graduation Cap Icon Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914] group-hover:border-[#E50914]/40 group-hover:scale-105 shrink-0 transition-all duration-300 ease-out shadow-md shadow-[#E50914]/5">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-[#E50914]" />
          </div>

          {/* Degree & College Details */}
          <div className="flex-1 min-w-0">
            {/* Primary Text: Degree */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-white transition-colors">
              B.Tech in Information Technology
            </h3>

            {/* Secondary Text: College Name */}
            <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] font-normal leading-relaxed">
              K.K. Wagh Institute of Engineering Education and Research, Nashik
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
