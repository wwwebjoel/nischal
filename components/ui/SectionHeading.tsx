"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <div className={`mb-5 ${centered ? "flex justify-center" : ""}`}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] bg-[#4A90E2]/10 text-[#4A90E2] border border-[#4A90E2]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2] animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      {/* Heading — Space Grotesk via global h2 rule */}
      <h2
        className={`text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-4 ${
          light ? "text-[#8B9EC7]" : "text-white"
        }`}
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {/* Signature accent line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? "56px" : "48px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className={`h-[3px] rounded-full mb-5 ${centered ? "mx-auto" : ""}`}
        style={{ background: "linear-gradient(90deg, #4A90E2, #C9A84C)", width: 0 }}
      />

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl text-[#8B9EC7] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
