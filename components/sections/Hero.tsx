"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Mail, ChevronDown, TrendingUp, Shield, CheckCircle, BarChart2 } from "lucide-react";
import { useRef } from "react";

const floatingBadges = [
  { icon: CheckCircle, label: "RG 146 Compliant", color: "#4CAF50", delay: 0.2 },
  { icon: Shield, label: "ASIC Compliance", color: "#4A90E2", delay: 0.5 },
  { icon: BarChart2, label: "50+ SOAs Prepared", color: "#C9A84C", delay: 0.8 },
];

const chartPath = "M0,90 C30,82 50,68 80,62 C110,56 125,72 155,56 C185,40 205,36 232,21 C259,6 278,12 300,7";
const areaPath = "M0,90 C30,82 50,68 80,62 C110,56 125,72 155,56 C185,40 205,36 232,21 C259,6 278,12 300,7 L300,100 L0,100 Z";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050E1D]"
    >
      {/* ── Background layers ────────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-70" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30,95,191,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,226,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Content ──────────────────────────────────── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16"
      >
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A90E2]/10 border border-[#4A90E2]/25 text-[#4A90E2] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                Available for Remote Collaboration · Australia &amp; NZ
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Nischal
                <br />
                <span className="text-white">Khatri</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl font-semibold leading-snug">
                <span className="gradient-text">Paraplanner</span>
                <span className="text-[#8B9EC7]"> & Financial</span>
                <br />
                <span className="text-[#8B9EC7]">Planning Expert</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#8B9EC7] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Detail-oriented Paraplanner with 2+ years delivering compliant SOAs,
              financial modelling, insurance analysis, and SMSF strategies for
              Australian advisory firms — remotely, reliably, and with precision.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="/cv.pdf"
                download="Nischal_Khatri_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-sm shadow-[0_0_30px_rgba(74,144,226,0.35)] hover:shadow-[0_0_40px_rgba(74,144,226,0.5)] transition-shadow"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV (PDF)
              </motion.a>
              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.05] hover:border-white/25 transition-all"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Trusted by */}
            <motion.div variants={itemVariants} className="pt-4">
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

          {/* Right: Floating Dashboard */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative gradient-border rounded-2xl p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                style={{ background: "rgba(10,22,40,0.92)" }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Card header */}
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

                  {/* SVG Chart */}
                  <div className="rounded-xl overflow-hidden bg-[#040C18] p-3 mb-4">
                    <svg viewBox="0 0 300 100" className="w-full h-28" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4A90E2" />
                          <stop offset="100%" stopColor="#C9A84C" />
                        </linearGradient>
                      </defs>
                      {/* Horizontal grid lines */}
                      {[25, 50, 75].map((y) => (
                        <line
                          key={y}
                          x1="0" y1={y} x2="300" y2={y}
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="0.8"
                        />
                      ))}
                      {/* Area fill */}
                      <motion.path
                        d={areaPath}
                        fill="url(#areaFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2 }}
                      />
                      {/* Line */}
                      <motion.path
                        d={chartPath}
                        stroke="url(#lineStroke)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                      />
                      {/* End dot */}
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

                  {/* Stats row */}
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
                </motion.div>
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
                  style={{
                    animation: `float ${4 + i}s ease-in-out ${i * 0.8}s infinite`,
                  }}
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
      </motion.div>

      {/* ── Scroll indicator ───────────────────────────── */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8B9EC7] hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050E1D] to-transparent pointer-events-none" />
    </section>
  );
}
