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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#4A90E2]/10 text-[#4A90E2] border border-[#4A90E2]/20 mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2] animate-pulse" />
          {badge}
        </motion.span>
      )}

      <h2
        className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-[#8B9EC7]" : "text-white"
        }`}
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? "80px" : "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#C9A84C] mb-5 ${
          centered ? "mx-auto" : ""
        }`}
        style={{ width: 0 }}
      />

      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } text-[#8B9EC7]`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
