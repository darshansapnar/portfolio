"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Education", id: "education" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Header({
  showNav = false,
  showSkipIntro = true,
  skipIntroHref = "/home",
}) {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // High-performance requestAnimationFrame-throttled scroll listener
  useEffect(() => {
    if (!showNav) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 20);

          const scrollPosition = scrollY + 160;
          let currentSection = "";
          for (const item of navItems) {
            const el = document.getElementById(item.id);
            if (el && scrollPosition >= el.offsetTop) {
              currentSection = item.id;
            }
          }
          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });

      if (typeof window !== "undefined" && window.history?.pushState) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  // Intro Page Mode (`/`): Preserve original minimalist header layout
  if (!showNav) {
    return (
      <header className="w-full px-6 py-6 sm:px-12 sm:py-8 md:px-16 flex items-center justify-between select-none z-20">
        {/* Brand Wordmark: Bold Red DS */}
        <Link
          href="/"
          className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B0D10] rounded-sm transition-transform duration-200 active:scale-95"
          aria-label="Darshan Portfolio Home"
        >
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#E50914] transition-opacity duration-200 group-hover:opacity-90">
            DS
          </span>
        </Link>

        {/* Skip Intro Link */}
        {showSkipIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <Link
              href={skipIntroHref}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#B3B3B3] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-2 py-1"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        )}
      </header>
    );
  }

  // Home Page Mode (`/home`): Cinematic Sticky/Fixed Navigation Bar
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/50 py-3.5 px-5 sm:px-12 md:px-16 lg:px-20"
          : "bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-5 px-5 sm:px-12 md:px-16 lg:px-20"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Wordmark: Bold Red DS */}
        <Link
          href="/"
          className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-sm transition-transform duration-200 active:scale-95 shrink-0"
          aria-label="Darshan Portfolio Home"
        >
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#E50914] transition-opacity duration-200 group-hover:opacity-90">
            DS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E50914] ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#B3B3B3] hover:text-white hover:bg-white/[0.04]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "activeNavIndicator"}
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#E50914] rounded-full shadow-[0_0_8px_rgba(229,9,20,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Skip Intro & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {showSkipIntro && (
            <Link
              href={skipIntroHref}
              onClick={(e) => {
                if (skipIntroHref.startsWith("#")) {
                  handleNavClick(e, skipIntroHref.replace("#", ""));
                }
              }}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-medium text-[#B3B3B3] hover:text-white transition-colors duration-200 px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {/* Compact Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] active:scale-95 text-zinc-300 hover:text-white border border-white/[0.08] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden mt-3 pt-3 pb-3 border border-white/[0.08] bg-[#0d0305]/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/80 px-4 flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#E50914]/15 text-white font-semibold border-l-2 border-[#E50914]"
                      : "text-[#B3B3B3] hover:text-white hover:bg-white/[0.06]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                  )}
                </a>
              );
            })}

            {showSkipIntro && (
              <div className="pt-2 mt-1 border-t border-white/[0.06]">
                <Link
                  href={skipIntroHref}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (skipIntroHref.startsWith("#")) {
                      handleNavClick(e, skipIntroHref.replace("#", ""));
                    }
                  }}
                  className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[#B3B3B3] hover:text-white transition-colors duration-200"
                >
                  <span>Skip Intro</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
