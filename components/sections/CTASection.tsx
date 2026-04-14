"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-[#050E1D] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="cta-glow" />

      <div className="relative z-10 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#4A90E2]/10 text-[#4A90E2] border border-[#4A90E2]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
            Open to New Engagements
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 tracking-tight">
            Need a paraplanner who gets it{" "}
            <span className="gradient-text">right the first time?</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-[#8B9EC7] text-lg leading-relaxed mb-10">
            Whether you need ongoing paraplanning support or help clearing a backlog,
            I&apos;m available for contract and project-based engagements — fully remote,
            AEST-compatible, and compliance-ready.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:nischal.khatry@outlook.com"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-base shadow-[0_0_36px_rgba(74,144,226,0.4)] hover:shadow-[0_0_50px_rgba(74,144,226,0.6)] hover:-translate-y-1 transition-all duration-200"
            >
              <Mail size={18} />
              Start a Conversation
              <ArrowRight size={16} />
            </a>
            <a
              href="/cv.pdf"
              download="Nischal_Khatri_CV.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-white/15 text-white font-semibold text-base hover:bg-white/[0.06] hover:border-white/25 hover:-translate-y-1 transition-all duration-200"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[#8B9EC7] text-sm">
            <a
              href="mailto:nischal.khatry@outlook.com"
              className="hover:text-white transition-colors"
            >
              nischal.khatry@outlook.com
            </a>
            <span className="hidden sm:block text-white/20">·</span>
            <a href="tel:+9779806780159" className="hover:text-white transition-colors">
              (+977) 9806780159
            </a>
            <span className="hidden sm:block text-white/20">·</span>
            <span>Gwarko, Lalitpur, Nepal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
