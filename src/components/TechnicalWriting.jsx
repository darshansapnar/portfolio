"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Network, Router, BookOpen, ExternalLink, Globe } from "lucide-react";

/**
 * Local JavaScript data structure for technical articles.
 * URL is kept as a placeholder (null) until published.
 */
const articles = [
  {
    id: "understanding-network-devices",
    title: "Understanding Network Devices",
    topic: "Computer Networks",
    description:
      "Explore how devices communicate with servers through network devices such as switches and routers, and how data travels across a network.",
    platform: "Hashnode",
    url: "https://understanding-networkdevicesforbeginners.hashnode.dev/understanding-network-devices",
  },
];

export default function TechnicalWriting() {
  const shouldReduceMotion = useReducedMotion();
  const article = articles[0];

  return (
    <section
      id="writing"
      aria-label="Technical Writing Section"
      className="relative w-full bg-[#080808] py-20 sm:py-24 md:py-28 px-5 sm:px-12 md:px-16 lg:px-20 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Subtle background ambient burgundy/red glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-l from-[#E50914]/5 via-[#200609]/15 to-transparent blur-3xl pointer-events-none"
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
              ARTICLES & INSIGHTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            Technical Writing
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-2xl font-normal">
            Breaking down systems, protocols, and networking concepts into clear technical guides.
          </p>
        </motion.div>

        {/* Compact Responsive Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="group relative flex flex-col md:flex-row bg-[#121215] rounded-2xl border border-white/[0.08] hover:border-[#E50914]/40 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/70 overflow-hidden select-text max-w-5xl"
          aria-label={`${article.title} - ${article.topic}`}
        >
          {/* Left/Top: Networking-Themed Visual Showcase */}
          <div className="relative w-full md:w-80 lg:w-96 h-48 md:h-auto shrink-0 overflow-hidden bg-gradient-to-br from-[#24080b] via-[#150709] to-[#0c0c0e] flex items-center justify-center border-b md:border-b-0 md:border-r border-white/[0.06]">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:16px_16px]"
              aria-hidden="true"
            />

            {/* Ambient radial glow */}
            <div
              className="absolute w-36 h-36 rounded-full bg-[#E50914]/15 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Interactive/Scaling composition on hover */}
            <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
              {/* Dashed outer ring */}
              <div
                className="absolute w-28 h-28 rounded-full border border-[#E50914]/25 border-dashed"
                aria-hidden="true"
              />

              {/* Central Router Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shadow-lg shadow-black/40 mb-2.5 backdrop-blur-sm">
                <Router className="w-7 h-7 text-[#E50914]" />
              </div>

              {/* Packet Routing Chip */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                <Network className="w-3 h-3 text-[#E50914]" />
                <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-300">
                  Switches &amp; Routers
                </span>
              </div>
            </div>

            {/* Corner protocol badge */}
            <div
              className="absolute bottom-2.5 left-3 flex items-center gap-1 text-zinc-600"
              aria-hidden="true"
            >
              <Globe className="w-3 h-3 text-zinc-600" />
              <span className="text-[10px] font-mono tracking-wider text-zinc-600">
                TCP/IP · OSI
              </span>
            </div>
          </div>

          {/* Right/Bottom: Article Content Body */}
          <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 md:p-9">
            <div>
              {/* Top Meta: Topic & Platform Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                {/* Topic Indicator */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E50914]/10 border border-[#E50914]/20 text-[11px] font-bold tracking-wider uppercase text-red-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" aria-hidden="true" />
                  <span>{article.topic}</span>
                </div>

                {/* Platform Badge */}
                <span className="text-[11px] font-mono font-medium text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.08]">
                  {article.platform}
                </span>
              </div>

              {/* Article Title */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-normal max-w-2xl">
                {article.description}
              </p>
            </div>

            {/* Read Article Action Area */}
            <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between">
              {article.url ? (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E50914] hover:bg-[#b80710] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E50914]/25 active:translate-y-0 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold rounded-md shadow-md shadow-black/40 transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                /* Non-clickable placeholder container (no fake link rendered) */
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-medium text-zinc-400 select-none cursor-default"
                  aria-disabled="true"
                >
                  <BookOpen className="w-4 h-4 text-[#E50914]" aria-hidden="true" />
                  <span className="text-zinc-200 font-semibold">Read Article</span>
                  <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
