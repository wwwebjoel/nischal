"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const proofStats = [
  { value: "10k+", label: "SOAs/ROAs Prepared", color: "#4A90E2" },
  { value: "3+", label: "Years Paraplanning", color: "#C9A84C" },
  { value: "100%", label: "Compliance Record", color: "#4CAF50" },
  { value: "7", label: "Firms Served", color: "#A78BFA" },
];

const capabilities = [
  "SOA/ROA Preparation",
  "Financial Modelling",
  "Insurance Analysis",
  "Superannuation / SMSF",
  "Retirement Projections",
  "Fund Comparisons",
  "OFA / FDS Lodgements",
  "Portfolio Construction",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "nischal.khatry@outlook.com", href: "mailto:nischal.khatry@outlook.com" },
  { icon: Phone, label: "Phone", value: "(+977) 9806780159", href: "tel:+9779806780159" },
  { icon: MapPin, label: "Location", value: "Gwarko, Lalitpur, Nepal", href: null },
  { icon: Globe, label: "Availability", value: "Remote · Australia & NZ", href: null },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="About Me"
          title="Precision. Compliance."
          highlight="Expertise."
          subtitle="A dedicated paraplanning professional helping Australian advisers deliver exceptional client outcomes."
        />

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

          {/* Left — Profile card + Core Services (appears first on mobile too) */}
          <div className="space-y-6">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="gradient-border rounded-2xl p-6 bg-[#0A1628]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E5FBF] to-[#C9A84C] flex items-center justify-center shadow-[0_0_30px_rgba(30,95,191,0.35)] flex-shrink-0">
                  <span className="font-heading text-white font-bold text-xl">NK</span>
                </div>
                <div>
                  <h3 className="font-heading text-white font-bold text-lg tracking-tight">Nischal Khatri</h3>
                  <p className="text-[#4A90E2] text-sm font-medium">Paraplanner & Financial Analyst</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                    <span className="text-[#8B9EC7] text-xs">Open to opportunities</span>
                  </div>
                </div>
              </div>
              <div className="h-px bg-white/[0.06] mb-5" />
              <p className="text-[#8B9EC7] text-sm leading-relaxed">
                BBS graduate with specialised training in accounting, taxation and financial
                services. Pursuing RG 146/Diploma in Financial Planning. Committed to compliant,
                client-focused paraplanning support.
              </p>
            </motion.div>

            {/* Core Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="kicker mb-4">Core Services</p>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1628] border border-white/[0.07] text-[#8B9EC7] text-xs font-medium hover:border-[#4A90E2]/30 hover:text-white transition-colors"
                  >
                    <CheckCircle size={11} className="text-[#4A90E2] flex-shrink-0" />
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Bio, stats, contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Short bio */}
            <p className="text-[#8B9EC7] text-lg leading-relaxed">
              Paraplanner with 3+ years serving Australian advisory firms. Pursuing RG 146/Diploma in
              Financial Planning, ASIC-experienced, and operating on AEST business hours from Nepal.
            </p>

            {/* Proof stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {proofStats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl bg-[#0A1628] border border-white/[0.06] text-center"
                >
                  <p className="font-heading font-bold text-2xl leading-none mb-1" style={{ color: s.color }}>
                    {s.value}
                  </p>
                  <p className="text-[#8B9EC7] text-[11px] leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0A1628] border border-white/[0.06]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-[#4A90E2]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#8B9EC7] text-[10px] uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-xs font-medium hover:text-[#4A90E2] transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-xs font-medium truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
