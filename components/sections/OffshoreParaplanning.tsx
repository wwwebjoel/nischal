"use client";

import { motion } from "framer-motion";
import { FileText, Search, TrendingUp, ArrowRight, CheckCircle, Shield } from "lucide-react";

const included = [
  {
    icon: FileText,
    title: "SoA & RoA Preparation",
    description:
      "Strategy documentation, product research, and client-ready advice documents – your templates, your style.",
    tags: ["SoA", "RoA", "1-day turnaround"],
    color: "#4A90E2",
  },
  {
    icon: Search,
    title: "Research & Analysis",
    description:
      "Super, insurance, and investment product research structured for adviser review – not rewriting.",
    tags: ["Lonsec", "Morningstar", "Insurance"],
    color: "#C9A84C",
  },
  {
    icon: TrendingUp,
    title: "Cashflow & Financial Modelling",
    description:
      "Retirement projections, cashflow modelling, and scenario analysis – built to your advice methodology and client presentation standards.",
    tags: ["Cashflow", "Projections", "Scenario Analysis"],
    color: "#4CAF50",
  },
];

const objections = [
  {
    q: "Will the quality actually be good enough?",
    a: "Every engagement starts with a consulting phase – I design the workflow before a single task is delegated. Domain-specific financial services training, not generic offshore staff. 100% compliance record across all documents delivered.",
    highlight: "100% compliance record across all SOAs and ROAs delivered.",
    color: "#4A90E2",
  },
  {
    q: "Is my client data actually safe?",
    a: "MFA-protected access and SharePoint security – the same standard used by global financial institutions. Independently audited. Full security documentation provided to your compliance team on request.",
    highlight: "MFA + SharePoint security. Independently audited.",
    color: "#C9A84C",
  },
  {
    q: "Will I lose control of my operations?",
    a: "The opposite. I document and systemise workflows that were previously informal – you gain more visibility, not less. Your team works inside your systems, your processes, your SLA framework.",
    highlight: "You own your strategy and client relationships – I own delivery.",
    color: "#4CAF50",
  },
];

const platforms = [
  "Xplan", "AdviserLogic", "Midwinter", "Plutosoft", "DASH", "Astute Wheel", "Lonsec", "Morningstar",
];

export default function OffshoreParaplanning() {
  return (
    <section id="services" className="section-pad bg-[#0A1628] overflow-hidden">
      <div className="container-wide">

        {/* Hero pitch */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-14 xl:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="block h-px w-8 bg-gradient-to-r from-[#C9A84C] to-transparent" />
              <span className="kicker">Offshore Paraplanning</span>
            </div>
            <h2 className="font-heading text-[clamp(1.9rem,4vw,3.25rem)] font-bold text-white leading-[1.05] tracking-[-0.02em]">
              Your advisers should be{" "}
              <span className="gold-text">advising</span>
              {" "}—{" "}
              <em className="text-white/55 not-italic">not writing Statements of Advice.</em>
            </h2>
            <p className="text-[#8B9EC7] text-lg leading-relaxed max-w-xl">
              Outsourced paraplanning for Australian financial planning firms. 1–2 day Statement of Advice turnaround.
              Paraplanning that works in your existing workflow – not around it.
            </p>
            <ul className="space-y-3">
              {[
                "SoA and RoA preparation – your templates, your style",
                "Product research using Lonsec, Morningstar, and your preferred platforms",
                "Cashflow modelling, retirement projections, and scenario analysis",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[#8B9EC7] text-sm">
                  <CheckCircle size={15} className="text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-sm shadow-[0_0_32px_rgba(74,144,226,0.3)] hover:shadow-[0_0_44px_rgba(74,144,226,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Discovery Call
              <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="gradient-border rounded-2xl p-6"
            style={{ background: "rgba(5,14,29,0.94)" }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#4A90E2]/15 flex items-center justify-center">
                  <Shield size={16} className="text-[#4A90E2]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">ASIC-Experienced Paraplanner</p>
                  <p className="text-[#8B9EC7] text-xs">Nepal-based · AEST Hours</p>
                </div>
              </div>
              <div className="h-px bg-white/[0.06]" />
              {[
                { label: "Turnaround", value: "1–2 Days", color: "#4CAF50" },
                { label: "Compliance Record", value: "100%", color: "#4A90E2" },
                { label: "Firms Served", value: "7+", color: "#C9A84C" },
                { label: "Documents Delivered", value: "10,000+", color: "#A78BFA" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-[#8B9EC7] text-sm">{item.label}</span>
                  <span className="font-heading font-bold text-sm" style={{ color: item.color }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What's Included */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="kicker text-center mb-3"
          >
            What&apos;s Included
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-white font-heading font-bold text-2xl text-center mb-10"
          >
            Comprehensive. Compliant. Customised.
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-5">
            {included.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#050E1D] border border-white/[0.06] hover:border-white/[0.13] transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}18` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                <p className="text-[#8B9EC7] text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                      style={{
                        background: `${item.color}14`,
                        color: item.color,
                        border: `1px solid ${item.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-5 p-4 rounded-xl bg-[#050E1D] border border-white/[0.06]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#8B9EC7] text-xs uppercase tracking-wider font-medium flex-shrink-0">
                Platforms:
              </span>
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-lg bg-[#0A1628] border border-white/[0.06] text-[#8B9EC7] text-xs font-medium hover:text-white hover:border-white/[0.14] transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3 Objection handlers */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="kicker text-center mb-3"
          >
            Still Not Sure?
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-white font-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-center mb-2"
          >
            The three questions every firm asks.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8B9EC7] text-sm text-center mb-10"
          >
            Direct answers. No spin.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {objections.map((obj, i) => (
              <motion.div
                key={obj.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#050E1D] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <p className="kicker mb-3">Objection {String(i + 1).padStart(2, "0")}</p>
                <h4 className="text-white font-semibold text-sm mb-4 leading-snug">
                  &ldquo;{obj.q}&rdquo;
                </h4>
                <p className="text-[#8B9EC7] text-sm leading-relaxed mb-4">{obj.a}</p>
                <p
                  className="text-xs font-semibold leading-snug px-3 py-2 rounded-lg"
                  style={{ background: `${obj.color}14`, color: obj.color }}
                >
                  {obj.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-white font-semibold text-lg mb-1">
            Free your advisers from SoA preparation.{" "}
            <span className="gold-text italic">Let them actually advise.</span>
          </p>
          <p className="text-[#8B9EC7] text-sm mb-6">
            30-minute discovery call. I&apos;ll assess your workflow and show you exactly how it works.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-sm hover:shadow-[0_0_28px_rgba(74,144,226,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Discovery Call
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
