"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Brief",
    description: "Share the client situation, strategy goals, and any existing documentation.",
    time: "~30 min",
    color: "#4A90E2",
  },
  {
    number: "02",
    title: "Draft",
    description: "Full SOA/ROA prepared with financial modelling, insurance analysis, and compliance checks.",
    time: "24-48 hrs",
    color: "#C9A84C",
  },
  {
    number: "03",
    title: "Review",
    description: "Feedback addressed promptly. Revisions completed within the same business day.",
    time: "Same day",
    color: "#4CAF50",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Compliance-ready document, fully formatted and ready to present to your client.",
    time: "Complete",
    color: "#A78BFA",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-[#0A1628]">
      <div className="container-wide">
        <SectionHeading
          badge="How I Work"
          title="From Brief to"
          highlight="Delivery"
          subtitle="A simple, reliable process that fits into your existing practice workflow without disruption."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-[#050E1D] border border-white/[0.07] hover:border-white/[0.16] transition-colors group"
            >
              {/* Connector dot on desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[2.4rem] -right-[11px] w-[22px] h-px z-10"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}80, ${steps[i + 1].color}80)`,
                  }}
                />
              )}

              {/* Large muted step number */}
              <p
                className="font-heading font-bold text-[3.5rem] leading-none mb-4 select-none group-hover:opacity-40 transition-opacity"
                style={{ color: step.color, opacity: 0.18 }}
              >
                {step.number}
              </p>

              <h3 className="text-white font-bold text-lg mb-2 leading-tight">{step.title}</h3>
              <p className="text-[#8B9EC7] text-sm leading-relaxed mb-5">{step.description}</p>

              <span
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{ background: `${step.color}15`, color: step.color }}
              >
                {step.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Outcome card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-[#050E1D] border border-[#4CAF50]/15"
        >
          <div className="w-10 h-10 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={20} className="text-[#4CAF50]" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              Every document is compliance-ready on first delivery.
            </p>
            <p className="text-[#8B9EC7] text-xs mt-0.5">
              No back-and-forth. No delays. Just clean, adviser-ready work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
