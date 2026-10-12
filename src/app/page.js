"use client";

import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import EnterButton from "@/components/EnterButton";
import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Header with DS wordmark and Skip Intro link */}
      <Header showSkipIntro={true} />

      {/* Centered Profile Selection Section positioned in upper-middle of viewport */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16">
        <div className="w-full max-w-xl flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-[52px] font-medium tracking-tight text-white mb-2 sm:mb-3"
          >
            Who&apos;s watching?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-[#B3B3B3] font-normal mb-8 sm:mb-10 max-w-md"
          >
            Welcome to my corner of the internet.
          </motion.p>

          {/* Single Profile Card */}
          <ProfileCard
            name="Darshan"
            subtitle="Developer · AI Enthusiast · Builder"
            imageSrc="/images/darshan-avatar.jpg"
            href="/home"
          />

          {/* Enter Portfolio Action Button */}
          <EnterButton href="/home" text="Enter Portfolio" />
        </div>
      </main>

      {/* Minimal bottom spacer for layout balance */}
      <div className="py-4 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
