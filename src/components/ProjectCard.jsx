"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  Lock,
  Video,
  Sparkles,
  Radio,
  Cpu,
  Zap,
  Network,
  Smartphone,
  Receipt,
  Wallet,
  Split,
  ExternalLink,
  Download,
} from "lucide-react";

/**
 * Custom inline SVG icon for GitHub
 */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/**
 * Visual Showcase Compositions for each project type
 * Displays project screenshot image if provided, with fallback to stylized SVG visual.
 */
function ProjectVisual({ type, number, image, title }) {
  if (image) {
    const objectPos =
      type === "mobile"
        ? "object-top"
        : type === "ai"
        ? "object-top"
        : "object-center";

    return (
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#0c0c0e] border-b border-white/[0.06] flex items-center justify-center">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:16px_16px] z-0"
          aria-hidden="true"
        />

        {/* Ambient radial glow on hover */}
        <div
          className="absolute inset-0 bg-radial from-[#E50914]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Project Screenshot Image with smooth zoom on hover */}
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={number === "01" || number === "02"}
          className={`object-cover ${objectPos} transition-transform duration-500 ease-out group-hover:scale-105`}
        />

        {/* Subtle dark gradient overlay at top and bottom for contrast and seamless transition */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/35 pointer-events-none z-10"
          aria-hidden="true"
        />
      </div>
    );
  }
  if (type === "auth") {
    return (
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#24080b] via-[#150709] to-[#0c0c0e] flex items-center justify-center border-b border-white/[0.06]">
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

        {/* Watermark project number */}
        <span
          className="absolute -bottom-3 right-3 text-7xl font-black font-mono text-white/[0.03] group-hover:text-white/[0.07] transition-colors pointer-events-none select-none"
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Restrained Scaling composition on hover */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
          {/* Dashed outer security ring (clean static ring) */}
          <div
            className="absolute w-28 h-28 rounded-full border border-[#E50914]/25 border-dashed"
            aria-hidden="true"
          />

          {/* Central Shield Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shadow-lg shadow-black/40 mb-2 backdrop-blur-sm">
            <ShieldCheck className="w-7 h-7 text-[#E50914]" />
          </div>

          {/* Floating Key/Token Chip */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
            <KeyRound className="w-3 h-3 text-[#E50914]" />
            <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-300">
              OIDC 2.0 / JWT
            </span>
          </div>
        </div>

        {/* Decorative corner lock */}
        <div
          className="absolute bottom-2.5 left-3 flex items-center gap-1 text-zinc-600"
          aria-hidden="true"
        >
          <Lock className="w-3 h-3 text-zinc-600" />
          <span className="text-[10px] font-mono tracking-wider text-zinc-600">AUTH.SRV</span>
        </div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#200924] via-[#130718] to-[#0c0c0e] flex items-center justify-center border-b border-white/[0.06]">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ff3366_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        {/* Ambient radial glow */}
        <div
          className="absolute w-36 h-36 rounded-full bg-[#b81d38]/15 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Watermark project number */}
        <span
          className="absolute -bottom-3 right-3 text-7xl font-black font-mono text-white/[0.03] group-hover:text-white/[0.07] transition-colors pointer-events-none select-none"
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Status badge top-left */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 border border-red-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
          <span className="text-[9px] font-bold tracking-wider text-red-300 uppercase">
            LIVEKIT WebRTC
          </span>
        </div>

        {/* Restrained Scaling composition on hover */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
          {/* Central Video Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#93112a]/20 border border-[#b81d38]/40 flex items-center justify-center shadow-lg shadow-black/40 mb-2 backdrop-blur-sm">
            <Video className="w-7 h-7 text-[#ff3355]" />
          </div>

          {/* Audio Waveform visualization */}
          <div className="flex items-end gap-1 h-4 mb-1">
            <span className="w-1 h-2 rounded-full bg-[#E50914]/70" />
            <span className="w-1 h-4 rounded-full bg-[#ff3355]" />
            <span className="w-1 h-3 rounded-full bg-[#E50914]" />
            <span className="w-1 h-4 rounded-full bg-[#ff3355]" />
            <span className="w-1 h-2 rounded-full bg-[#E50914]/70" />
          </div>

          {/* Floating AI chip */}
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-red-400" />
            <span className="text-[10px] font-mono tracking-wider text-zinc-300">
              AI Summaries
            </span>
          </div>
        </div>

        {/* Decorative corner radio symbol */}
        <div
          className="absolute bottom-2.5 left-3 flex items-center gap-1 text-zinc-600"
          aria-hidden="true"
        >
          <Radio className="w-3 h-3 text-zinc-600" />
          <span className="text-[10px] font-mono tracking-wider text-zinc-600">RT.STREAM</span>
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#24080b] via-[#140608] to-[#0c0c0e] flex items-center justify-center border-b border-white/[0.06]">
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

        {/* Watermark project number */}
        <span
          className="absolute -bottom-3 right-3 text-7xl font-black font-mono text-white/[0.03] group-hover:text-white/[0.07] transition-colors pointer-events-none select-none"
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Fast Path indicator top-left */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
          <Zap className="w-3 h-3 text-[#E50914]" />
          <span className="text-[9px] font-mono font-semibold tracking-wider text-zinc-300 uppercase">
            SEMANTIC CACHE
          </span>
        </div>

        {/* Restrained Scaling composition on hover */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
          {/* Central CPU Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shadow-lg shadow-black/40 mb-2 backdrop-blur-sm">
            <Cpu className="w-7 h-7 text-[#E50914]" />
          </div>

          {/* Router Node connection chip */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
            <Network className="w-3 h-3 text-red-400" />
            <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-300">
              Redis Routing Hub
            </span>
          </div>
        </div>

        {/* Decorative corner node status */}
        <div
          className="absolute bottom-2.5 left-3 flex items-center gap-1 text-zinc-600"
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-mono tracking-wider text-zinc-600">GATEWAY.ONLINE</span>
        </div>
      </div>
    );
  }

  // Fallback / Mobile ("mobile")
  return (
    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#240f09] via-[#160a06] to-[#0c0c0e] flex items-center justify-center border-b border-white/[0.06]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ff5533_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      {/* Ambient radial glow */}
      <div
        className="absolute w-36 h-36 rounded-full bg-[#a32214]/15 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Watermark project number */}
      <span
        className="absolute -bottom-3 right-3 text-7xl font-black font-mono text-white/[0.03] group-hover:text-white/[0.07] transition-colors pointer-events-none select-none"
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Split indicator top-left */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
        <Split className="w-3 h-3 text-[#ff5533]" />
        <span className="text-[9px] font-mono font-semibold tracking-wider text-zinc-300 uppercase">
          SHARED LEDGER
        </span>
      </div>

      {/* Restrained Scaling composition on hover */}
      <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
        {/* Central Smartphone Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-[#a32214]/20 border border-[#c23321]/40 flex items-center justify-center shadow-lg shadow-black/40 mb-2 backdrop-blur-sm">
          <Smartphone className="w-7 h-7 text-[#ff5533]" />
        </div>

        {/* Ledger & Wallet chip */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
          <Receipt className="w-3 h-3 text-[#ff5533]" />
          <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-300">
            Hostel Expense Tracker
          </span>
        </div>
      </div>

      {/* Decorative corner wallet */}
      <div
        className="absolute bottom-2.5 left-3 flex items-center gap-1 text-zinc-600"
        aria-hidden="true"
      >
        <Wallet className="w-3 h-3 text-zinc-600" />
        <span className="text-[10px] font-mono tracking-wider text-zinc-600">EXPENSE.APP</span>
      </div>
    </div>
  );
}

/**
 * Reusable ProjectCard Component
 * Consistent subtle lift, restrained visual zoom, and border highlight across all 4 cards.
 */
export default function ProjectCard({ project, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const { number, title, category, description, tags, type, image, githubUrl, liveUrl, apkUrl } = project;
  const primaryUrl = liveUrl || apkUrl || githubUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className="group relative flex flex-col h-full bg-[#121215] rounded-2xl border border-white/[0.08] hover:border-[#E50914]/40 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/70 overflow-hidden select-text"
      aria-label={`${title} - ${category}`}
    >
      {/* Top Number Badge Pill */}
      <div className="absolute top-3 right-3 z-20 font-mono text-xs font-bold tracking-wider text-white/50 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 group-hover:text-white group-hover:border-[#E50914]/50 transition-colors duration-200 pointer-events-none">
        {number}
      </div>

      {/* Visual Showcase Banner */}
      {primaryUrl ? (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E50914]"
          aria-label={`Open ${title} (${liveUrl ? "Live Demo" : apkUrl ? "Download APK" : "GitHub"})`}
        >
          <ProjectVisual type={type} number={number} image={image} title={title} />
        </a>
      ) : (
        <ProjectVisual type={type} number={number} image={image} title={title} />
      )}

      {/* Card Content Body */}
      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Category Label */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#B3B3B3]">
              {category}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5">
            {primaryUrl ? (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E50914] transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-sm group/title"
              >
                <span>{title}</span>
                <ExternalLink className="w-4 h-4 opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-[#E50914]" />
              </a>
            ) : (
              title
            )}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Technology Tags & Action Buttons - pinned to bottom */}
        <div className="pt-5 border-t border-white/[0.06] mt-6 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {(liveUrl || apkUrl || githubUrl) && (
            <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04]">
              {/* Primary Action: Live Demo */}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#E50914] hover:bg-[#b80710] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E50914]/25 active:translate-y-0 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Open live demo for ${title} (opens in a new tab)`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}

              {/* Primary Action: Download APK */}
              {apkUrl && (
                <a
                  href={apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#E50914] hover:bg-[#b80710] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E50914]/25 active:translate-y-0 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Download APK for ${title} (opens in a new tab)`}
                >
                  <Download className="w-3.5 h-3.5 shrink-0" />
                  <span>Download APK</span>
                </a>
              )}

              {/* Secondary Action: GitHub */}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/[0.05] hover:bg-white/[0.12] hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-zinc-300 hover:text-white text-xs font-medium rounded-lg border border-white/[0.08] backdrop-blur-sm transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`View GitHub repository for ${title} (opens in a new tab)`}
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
