"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * ProfileCard component
 * 
 * To replace the avatar image:
 * Simply replace the file at `/public/images/netflix-avatar.png`
 * or pass a custom `imageSrc` prop here.
 */
export default function ProfileCard({
  name = "Darshan",
  subtitle = "Developer · AI Enthusiast · Builder",
  imageSrc = "/images/netflix-avatar.png",
  href = "/home",
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <Link
        href={href}
        className="group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#200609] rounded-lg p-2 transition-transform duration-200"
        aria-label={`Enter portfolio as ${name} (${subtitle})`}
      >
        {/* Profile Avatar Box: 140px on mobile, 156px on desktop, rounded corners, thin outline on hover */}
        <div className="relative w-[140px] h-[140px] sm:w-[156px] sm:h-[156px] rounded-md overflow-hidden bg-[#200609] border-2 border-transparent group-hover:border-white transition-all duration-300 ease-out group-hover:scale-105 shadow-xl">
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={`${name} portrait avatar`}
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#E50914] to-[#3B0D10] text-white text-3xl font-bold select-none">
              {name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Profile Name: Muted gray by default, transitions to white on hover */}
        <span className="mt-3.5 sm:mt-4 text-base sm:text-lg font-medium text-[#B3B3B3] transition-colors duration-200 group-hover:text-white tracking-wide">
          {name}
        </span>

        {/* Profile Subtitle */}
        <span className="mt-1 text-xs sm:text-sm text-[#808080] transition-colors duration-200 group-hover:text-[#B3B3B3] font-normal tracking-tight">
          {subtitle}
        </span>
      </Link>
    </motion.div>
  );
}
