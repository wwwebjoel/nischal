"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, TrendingUp, Shield, CheckCircle, BarChart2 } from "lucide-react";

const floatingBadges = [
  { icon: CheckCircle, label: "RG 146 Compliant", color: "#4CAF50" },
  { icon: Shield, label: "ASIC Compliance", color: "#4A90E2" },
  { icon: BarChart2, label: "50+ SOAs Prepared", color: "#C9A84C" },
];

const chartPath = "M0,90 C30,82 50,68 80,62 C110,56 125,72 155,56 C185,40 205,36 232,21 C259,6 278,12 300,7";
const areaPath =
  "M0,90 C30,82 50,68 80,62 C110,56 125,72 155,56 C185,40 205,36 232,21 C259,6 278,12 300,7 L300,100 L0,100 Z";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#050E1D]">
      {/* Background — CSS-only, no JS scroll listeners */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="hero-orb-blue" />
      <div className="hero-orb-gold" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Availability badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A90E2]/10 border border-[#4A90E2]/25 text-[#4A90E2] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                Available for Remote Collaboration · Australia &amp; NZ
              </span>
            </motion.div>

            {/* Name + Role */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight sm:whitespace-nowrap">
                Nischal Khatri
              </h1>
              <p className="text-xl sm:text-2xl font-semibold leading-snug">
                <span className="gradient-text">Expert Paraplanner</span>
                <span className="text-[#8B9EC7]"> for Australian</span>
                <br />
                <span className="text-[#8B9EC7]">Advisory Firms</span>
              </p>
            </motion.div>

            {/* Value proposition — specific, not generic */}
            <motion.p
              variants={item}
              className="text-[#8B9EC7] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I deliver compliant, adviser-ready SOAs, financial models, and insurance
              analyses — remotely, reliably, and ready for ASIC review. Trusted by
              Australian practices since 2022 with a 100% compliance record.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="/cv.pdf"
                download="Nischal_Khatri_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-sm shadow-[0_0_30px_rgba(74,144,226,0.35)] hover:shadow-[0_0_42px_rgba(74,144,226,0.55)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={16} />
                Get in Touch
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item} className="pt-4">
              <p className="text-[#8B9EC7] text-xs uppercase tracking-widest font-medium mb-3">
                Trusted by Australian advisory firms
              </p>
              <div className="flex flex-wrap gap-3">
                {["Ready Advice Pty Ltd", "Peak Pinnacle Financial Pty Ltd"].map((firm) => (
                  <span
                    key={firm}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#8B9EC7] text-xs font-medium"
                  >
                    {firm}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Floating Dashboard Card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative gradient-border rounded-2xl p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                style={{ background: "rgba(10,22,40,0.92)" }}
              >
                {/* CSS float animation — no Framer Motion loop */}
                <div className="card-float">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white font-semibold text-sm">Portfolio Growth Model</p>
                      <p className="text-[#8B9EC7] text-xs mt-0.5">12-month projection analysis</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20">
                      <TrendingUp size={11} className="text-[#4CAF50]" />
                      <span className="text-[#4CAF50] text-xs font-bold">+18.4%</span>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden bg-[#040C18] p-3 mb-4">
                    <svg viewBox="0 0 300 100" className="w-full h-28" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroAreaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="heroLineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4A90E2" />
                          <stop offset="100%" stopColor="#C9A84C" />
                        </linearGradient>
                      </defs>
                      {[25, 50, 75].map((yVal) => (
                        <line
                          key={yVal}
                          x1="0" y1={yVal} x2="300" y2={yVal}
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="0.8"
                        />
                      ))}
                      <motion.path
                        d={areaPath}
                        fill="url(#heroAreaFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2 }}
                      />
                      <motion.path
                        d={chartPath}
                        stroke="url(#heroLineStroke)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                      />
                      <motion.circle
                        cx="300" cy="7" r="4"
                        fill="#C9A84C"
                        stroke="#050E1D"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 3.2, type: "spring", stiffness: 300 }}
                      />
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "YTD Return", value: "+18.4%", color: "#4CAF50" },
                      { label: "Risk Level", value: "Moderate", color: "#C9A84C" },
                      { label: "AUM", value: "$850K+", color: "#4A90E2" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#040C18] rounded-lg p-2.5 text-center">
                        <p style={{ color: stat.color }} className="text-xs font-bold mb-0.5">
                          {stat.value}
                        </p>
                        <p className="text-[#8B9EC7] text-[10px]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.2, type: "spring", stiffness: 200 }}
                  className={`absolute glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl border border-white/[0.08] ${
                    i === 0
                      ? "-top-5 -right-6"
                      : i === 1
                      ? "-bottom-5 -left-6"
                      : "top-1/2 -right-8 -translate-y-1/2"
                  }`}
                >
                  <badge.icon size={13} style={{ color: badge.color }} />
                  <span className="text-white text-xs font-medium whitespace-nowrap">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — CSS bounce, no Framer Motion */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8B9EC7] hover:text-white transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050E1D] to-transparent pointer-events-none" />
    </section>
  );
}
