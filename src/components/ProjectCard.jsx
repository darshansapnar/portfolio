"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

/**
 * Visual Showcase Compositions for each project type
 */
function ProjectVisual({ type, number }) {
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

        {/* Interactive / Scaling composition */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
          {/* Dashed outer security ring */}
          <div
            className="absolute w-28 h-28 rounded-full border border-[#E50914]/20 border-dashed animate-[spin_30s_linear_infinite]"
            aria-hidden="true"
          />

          {/* Central Shield Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shadow-lg shadow-[#E50914]/15 mb-2 backdrop-blur-sm">
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

        {/* Live status badge top-left */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 border border-red-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
          <span className="text-[9px] font-bold tracking-wider text-red-300 uppercase">
            LIVEKIT WebRTC
          </span>
        </div>

        {/* Interactive / Scaling composition */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
          {/* Central Video Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#93112a]/20 border border-[#b81d38]/40 flex items-center justify-center shadow-lg shadow-[#b81d38]/15 mb-2 backdrop-blur-sm">
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

        {/* Interactive / Scaling composition */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
          {/* Central CPU Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shadow-lg shadow-[#E50914]/15 mb-2 backdrop-blur-sm">
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

      {/* Interactive / Scaling composition */}
      <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
        {/* Central Smartphone Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-[#a32214]/20 border border-[#c23321]/40 flex items-center justify-center shadow-lg shadow-[#c23321]/15 mb-2 backdrop-blur-sm">
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
 */
export default function ProjectCard({ project, index = 0 }) {
  const { number, title, category, description, tags, type } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col h-full bg-[#121215] rounded-2xl border border-white/[0.08] hover:border-[#E50914]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-[#E50914]/10 overflow-hidden cursor-default select-text"
      aria-label={`${title} - ${category}`}
    >
      {/* Top Number Badge Pill */}
      <div className="absolute top-3 right-3 z-20 font-mono text-xs font-bold tracking-wider text-white/50 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 group-hover:text-white group-hover:border-[#E50914]/50 transition-colors">
        {number}
      </div>

      {/* Visual Showcase Banner */}
      <ProjectVisual type={type} number={number} />

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
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 group-hover:text-white transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Technology Tags - pinned to bottom */}
        <div className="pt-5 border-t border-white/[0.06] mt-6">
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06] group-hover:border-white/[0.12] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
