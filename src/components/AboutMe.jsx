"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Brain,
  Compass,
} from "lucide-react";

/**
 * Four Personal Highlights
 */
const highlights = [
  {
    id: "real-products",
    title: "Building Real Products",
    description: "Developing full-stack applications that solve practical problems.",
    icon: Layers,
  },
  {
    id: "ai-infra",
    title: "Building with AI",
    description: "Working with LLM APIs, intelligent routing, and caching systems.",
    icon: Sparkles,
  },
  {
    id: "systems",
    title: "Understanding Systems",
    description: "Exploring authentication protocols, backend architecture, and computer networks.",
    icon: ShieldCheck,
  },
  {
    id: "learning-practice",
    title: "Learning Through Practice",
    description: "Strengthening problem-solving skills through DSA and hands-on projects.",
    icon: Brain,
  },
];

export default function AboutMe() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative w-full bg-[#080808] py-20 sm:py-24 md:py-28 px-5 sm:px-12 md:px-16 lg:px-20 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-br from-[#E50914]/5 via-[#200609]/15 to-transparent blur-3xl pointer-events-none"
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
          className="mb-10 sm:mb-14"
        >
          {/* Eyebrow Accent */}
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-1.5 h-3.5 bg-[#E50914] rounded-xs" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#B3B3B3] uppercase">
              ABOUT ME
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            A LITTLE ABOUT ME
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-2xl font-normal">
            Always learning. Always building.
          </p>
        </motion.div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Narrative Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="lg:col-span-6 flex flex-col justify-between bg-[#121215] rounded-2xl border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 ease-out p-6 sm:p-8 md:p-9 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60 select-text"
          >
            <div>
              {/* Card Sub-header / Panel Label */}
              <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-zinc-300 uppercase">
                  INTRODUCTION
                </span>
              </div>

              {/* Introduction Body */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  I&apos;m a final-year B.Tech Information Technology student passionate about software engineering, full-stack development, and AI infrastructure.
                </p>
                <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-normal">
                  I enjoy turning ideas into working products, understanding how systems operate behind the scenes, and learning through hands-on development.
                </p>
              </div>
            </div>

            {/* Bottom Highlight Callout */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-2 shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
                  Focused on clean architecture, practical problem-solving, and continuous improvement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Four Personal Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5 sm:gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  }}
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-[#E50914]/40 hover:-translate-y-1 transition-all duration-300 ease-out shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/50 select-text"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914] group-hover:border-[#E50914]/40 shrink-0 transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed mt-1 font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
