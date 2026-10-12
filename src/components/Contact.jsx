"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

/**
 * Custom inline SVG icons for LinkedIn and GitHub
 */
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "sapnardarshan18@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative w-full bg-[#080808] py-24 sm:py-32 px-5 sm:px-12 md:px-16 lg:px-20 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background ambient crimson/burgundy radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-b from-[#E50914]/10 via-[#200609]/20 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative bg-[#121215]/90 border border-white/[0.08] rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-black/60 backdrop-blur-md"
        >
          {/* Eyebrow Accent */}
          <div className="inline-flex items-center gap-2 mb-4 select-none">
            <span className="w-1.5 h-3.5 bg-[#E50914] rounded-xs" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#B3B3B3] uppercase">
              GET IN TOUCH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-4 sm:mb-5 leading-tight">
            Let&apos;s Connect
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
            Have an opportunity in mind? Good ideas start with a conversation. Let&apos;s connect and make something meaningful.
          </p>

          {/* Interactive Email Display with Copy Button */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] hover:border-white/20 transition-all duration-200 shadow-inner">
              <Mail className="w-4 h-4 text-[#E50914]" aria-hidden="true" />
              <span className="font-mono text-xs sm:text-sm text-zinc-200 select-all">
                {emailAddress}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.08] hover:bg-white/[0.15] text-[11px] font-medium text-zinc-200 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E50914]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Primary Email Button */}
            <a
              href="mailto:sapnardarshan18@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#E50914] hover:bg-[#b80710] active:scale-[0.98] text-white text-sm sm:text-base font-semibold rounded-md shadow-lg shadow-black/40 transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail className="w-4 h-4" />
              <span>Send Me an Email</span>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/darshansapnar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/50 hover:bg-white/10 active:scale-[0.98] text-white text-sm sm:text-base font-medium rounded-md border border-[#333333] hover:border-white/50 backdrop-blur-sm transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="GitHub Profile (opens in a new tab)"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/darshansapnar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/50 hover:bg-white/10 active:scale-[0.98] text-white text-sm sm:text-base font-medium rounded-md border border-[#333333] hover:border-white/50 backdrop-blur-sm transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="LinkedIn Profile (opens in a new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
