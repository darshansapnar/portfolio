"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EnterButton({
  href = "/home",
  text = "Enter Portfolio",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
      className="mt-8 sm:mt-10"
    >
      <Link
        href={href}
        className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#E50914] hover:bg-[#b80710] active:scale-[0.98] text-white text-sm sm:text-base font-medium tracking-wide rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#200609] select-none shadow-lg"
      >
        <span>{text}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
