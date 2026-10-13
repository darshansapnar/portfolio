"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";

/**
 * Static project entries stored in a local JavaScript array
 */
const projects = [
  {
    id: "dauth",
    number: "01",
    title: "DAuth",
    category: "Identity & Authentication",
    description:
      "A self-hosted OpenID Connect identity provider designed to provide secure authentication and authorization for applications.",
    tags: ["Node.js", "Express.js", "React", "PostgreSQL", "Prisma", "JOSE"],
    type: "auth",
  },
  {
    id: "relay",
    number: "02",
    title: "Relay",
    category: "AI & Real-Time Communication",
    description:
      "An AI-powered video conferencing platform built for real-time video meetings, audio communication, and screen sharing, with planned AI-powered transcription, meeting summaries, and action items.",
    tags: ["React", "Node.js", "Express.js", "LiveKit"],
    type: "video",
  },
  {
    id: "llm-gateway",
    number: "03",
    title: "LLM Gateway",
    category: "AI Infrastructure",
    description:
      "AI infrastructure for intelligent LLM routing, semantic caching, and reduced API costs through optimized request handling.",
    tags: ["JavaScript", "Node.js", "React", "Express.js", "Redis"],
    type: "ai",
  },
  {
    id: "hisaab",
    number: "04",
    title: "hiSaab",
    category: "Mobile Application",
    description:
      "A mobile app designed to simplify shared hostel expense tracking and make everyday expense management easier.",
    tags: ["React Native", "Expo"],
    type: "mobile",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="relative w-full bg-[#080808] pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28 px-5 sm:px-12 md:px-16 lg:px-20 overflow-hidden"
    >
      {/* Subtle top ambient crimson glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[300px] bg-gradient-to-b from-[#E50914]/8 via-[#200609]/10 to-transparent blur-3xl pointer-events-none"
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
              ORIGINAL RELEASES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            Featured Projects
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-2xl font-normal">
            A selection of products and infrastructure I&apos;ve built.
          </p>
        </motion.div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
