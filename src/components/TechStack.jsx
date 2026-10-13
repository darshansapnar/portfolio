"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Binary,
} from "lucide-react";

/**
 * Skill categories and technologies stored in a local JavaScript data structure.
 */
const techCategories = [
  {
    id: "languages",
    title: "Languages & Web Fundamentals",
    icon: Code2,
    skills: [
      "C",
      "C++",
      "Python",
      "JavaScript (ES Modules)",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "LLM APIs",
      "LiveKit SDK",
      "WebRTC",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Redis",
    ],
  },
  {
    id: "devops",
    title: "Developer Tools & DevOps",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Linux",
      "Vercel",
    ],
  },
  {
    id: "cs-fundamentals",
    title: "Core Computer Science",
    icon: Binary,
    skills: [
      "Data Structures & Algorithms",
      "Problem Solving",
      "Operating Systems",
      "Computer Networks",
      "Caching",
      "Vector Search",
      "CI/CD",
    ],
  },
];

/**
 * Reusable Technology Tile Component
 * Clean, compact, text-based tile with subtle hover effect and restrained red highlight.
 */
function TechTile({ name }) {
  return (
    <div
      className="group/tile inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#18181c] hover:bg-[#202026] border border-white/[0.07] hover:border-[#E50914]/40 transition-all duration-200 select-text cursor-default"
      role="listitem"
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/tile:bg-[#E50914] group-hover/tile:scale-125 transition-all duration-200"
        aria-hidden="true"
      />
      <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover/tile:text-white transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      aria-label="Technologies I Work With"
      className="relative w-full bg-[#080808] py-20 sm:py-24 md:py-28 px-5 sm:px-12 md:px-16 lg:px-20 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Subtle background ambient burgundy/red glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-b from-[#200609]/20 via-[#E50914]/5 to-transparent blur-3xl pointer-events-none"
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
          className="mb-12 sm:mb-16"
        >
          {/* Eyebrow Accent */}
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-1.5 h-3.5 bg-[#E50914] rounded-xs" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#B3B3B3] uppercase">
              TECH ARSENAL
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            Technologies I Work With
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-2xl font-normal">
            The tools and technologies I use to build applications and explore AI infrastructure.
          </p>
        </motion.div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {techCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="group flex flex-col h-full bg-[#121215] rounded-2xl border border-white/[0.08] hover:border-[#E50914]/30 hover:-translate-y-1 transition-all duration-300 ease-out p-6 sm:p-7 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914] group-hover:border-[#E50914]/40 transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Count Badge */}
                  <span className="text-[11px] font-mono text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06] select-none">
                    {category.skills.length}
                  </span>
                </div>

                {/* Technology Tiles List */}
                <div
                  className="flex flex-wrap gap-2 sm:gap-2.5 content-start"
                  role="list"
                  aria-label={`${category.title} technologies`}
                >
                  {category.skills.map((skill) => (
                    <TechTile key={skill} name={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
