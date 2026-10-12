"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const emptySubscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function Footer() {
  const currentYear = useSyncExternalStore(emptySubscribe, getClientYear, getServerYear);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      aria-label="Portfolio Footer"
      className="w-full bg-[#060608] border-t border-white/[0.06] py-10 sm:py-12 px-5 sm:px-12 md:px-16 lg:px-20 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        {/* Left: DS Brand mark & Tagline */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-[#E50914] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Darshan Portfolio Home"
          >
            DS
          </Link>
          <div className="hidden sm:block w-px h-6 bg-white/10 self-center" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-[#B3B3B3] font-normal">
            Built with curiosity and a passion for learning.
          </p>
        </div>

        {/* Center: Dynamic Copyright */}
        <div className="text-xs text-zinc-500 font-mono text-center">
          &copy; {currentYear} Darshan Sapnar. All rights reserved.
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-xs font-medium text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E50914] group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
