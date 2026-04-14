"use client";

import { motion } from "framer-motion";
import { FileCheck, Clock, Globe, BookOpen, Layers, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  {
    icon: FileCheck,
    title: "ASIC-Ready, Every Time",
    points: [
      "Zero compliance failures across 50+ SOAs/ROAs",
      "Meets ASIC, FASEA and licensee standards",
      "Reviewed and ready before it reaches your desk",
    ],
    metric: "100% compliance record",
    color: "#4A90E2",
  },
  {
    icon: Clock,
    title: "24-48hr Turnaround",
    points: [
      "Standard SOA/ROA delivered within 24-48 hours",
      "Clear updates throughout the workflow",
      "Consistent on deadlines",
    ],
    metric: "Fast, reliable delivery",
    color: "#C9A84C",
  },
  {
    icon: Globe,
    title: "AEST-Compatible Remote",
    points: [
      "Operates on Australian business hours",
      "Responsive across email and messaging",
      "No disruption to existing workflows",
    ],
    metric: "Available Mon-Fri AEST",
    color: "#4CAF50",
  },
  {
    icon: BookOpen,
    title: "Full Platform Proficiency",
    points: [
      "Irate, Morningstar, Chant West",
      "Xplan, DASH, Intelliflo",
      "PlatformPlus AMS",
    ],
    metric: "7+ platforms",
    color: "#A78BFA",
  },
  {
    icon: Layers,
    title: "End-to-End Paraplanning",
    points: [
      "Retirement projections and cashflow modelling",
      "Insurance needs analysis and comparisons",
      "OFA/FDS lodgements and compliance docs",
    ],
    metric: "2+ years full-cycle",
    color: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality Guaranteed",
    points: [
      "Strict privacy obligations observed",
      "Secure client data handling at all times",
      "References available upon request",
    ],
    metric: "Privacy-first approach",
    color: "#EF4444",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="What I Bring"
          title="Why Advisers"
          highlight="Choose Me"
          subtitle="Six concrete reasons Australian advisory practices trust me with their most important client documents."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {strengths.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              className="why-card group p-6 rounded-2xl bg-[#0A1628] border border-white/[0.06] hover:border-white/[0.13]"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${s.color}18` }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-3 leading-snug">
                {s.title}
              </h3>

              {/* Data bullets */}
              <ul className="space-y-1.5 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[#8B9EC7] text-xs leading-snug">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: s.color }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Metric badge */}
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{ background: `${s.color}14`, color: s.color }}
              >
                {s.metric}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#1E5FBF]/12 via-[#0A1628] to-[#C9A84C]/10 border border-[#4A90E2]/15 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-semibold text-base mb-1">
              Ready Advice &amp; Peak Pinnacle Financial trusted me with their paraplanning.
            </p>
            <p className="text-[#8B9EC7] text-sm">
              References available upon request from both firms.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-sm hover:shadow-[0_0_28px_rgba(74,144,226,0.45)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
