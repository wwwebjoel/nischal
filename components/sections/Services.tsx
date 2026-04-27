"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  DollarSign,
  Clock,
  CheckCircle2,
  FileText,
  PenTool,
  Settings,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const offering = [
  {
    number: "01",
    title: "Statement of Advice preparation",
    summary:
      "Clear, well-structured SoAs across a broad range of advice scenarios – your templates, your preferences.",
    detail:
      "I prepare clear, well-structured Statements of Advice across a broad range of advice scenarios, from simple cases to comprehensive strategies. I operate as an extension of your team, following your templates, preferences, and advice style.",
    benefits: [
      "Receive well-structured plans that are ready to present",
      "Spend less time reviewing and refining documents",
      "Maintain consistency across all client advice",
    ],
    color: "#4A90E2",
  },
  {
    number: "02",
    title: "Consistent and fast turnaround times",
    summary:
      "Plans delivered within clear timeframes so you can manage client expectations with confidence.",
    detail:
      "My established workflows and experience deliver plans within clear timeframes so you can manage client expectations and advice schedules with confidence.",
    benefits: [
      "Keep advice moving without unnecessary delays",
      "Plan meetings and reviews with greater certainty",
      "Reduce pressure caused by last-minute documentation",
    ],
    color: "#C9A84C",
  },
  {
    number: "03",
    title: "Accuracy you can rely on",
    summary:
      "Every plan reviewed with a strong focus on accuracy and consistency – fewer revisions, cleaner documents.",
    detail:
      "Every plan is reviewed by me with a strong focus on accuracy and consistency. I pay close attention to detail so you're not fixing avoidable errors or inconsistencies.",
    benefits: [
      "Fewer revisions after delivery",
      "Cleaner, more reliable advice documents",
      "Greater confidence when presenting to clients",
    ],
    color: "#4CAF50",
  },
  {
    number: "04",
    title: "Support aligned with current compliance standards",
    summary:
      "Documentation that supports compliance obligations without becoming overly complex.",
    detail:
      "I stay aligned with current professional and regulatory expectations, ensuring your documentation supports compliance obligations without becoming overly complex.",
    benefits: [
      "Reduce compliance-related concerns",
      "Be better prepared for audits and file reviews",
      "Maintain professional standards across your advice documents",
    ],
    color: "#A78BFA",
  },
  {
    number: "05",
    title: "Cost-efficient paraplanning with built-in flexibility",
    summary:
      "An efficient alternative to in-house hiring – engage on a part-time or full-time basis to match your workload.",
    detail:
      "My paraplanning service is an efficient alternative to in-house hiring, helping you reduce overheads without sacrificing quality. Engage me as your dedicated paraplanner on a part-time or full-time basis.",
    benefits: [
      "Reduce staffing and operational costs compared to in-house resourcing",
      "Access a dedicated paraplanner without long-term employment commitments",
      "Scale support easily as advice volumes increase or slow",
    ],
    color: "#F59E0B",
  },
  {
    number: "06",
    title: "Extended support across two time zones",
    summary:
      "Nepal-based with deep knowledge of Australian regulations, operating on AEST business hours.",
    detail:
      "Based in Nepal and operating on Australian business hours, I provide responsive support that aligns seamlessly with your practice. My deep understanding of Australian regulatory requirements means no learning curve on compliance expectations.",
    benefits: [
      "AEST-aligned availability Monday to Friday",
      "Fast response times throughout the Australian business day",
      "Deep knowledge of Australian financial planning compliance",
    ],
    color: "#EF4444",
  },
];

const pricingFeatures = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    badge: "No surprises",
    desc: "Get upfront pricing for single or complex paraplanning services. No hidden fees.",
    color: "#4A90E2",
  },
  {
    icon: Clock,
    title: "Flexible Turnaround",
    badge: "On-time delivery",
    desc: "Choose between regular to urgent service options to match your deadlines.",
    color: "#C9A84C",
  },
  {
    icon: CheckCircle2,
    title: "All-Inclusive Service",
    badge: "Quality assured",
    desc: "Every SOA & ROA includes QA review, compliance checks, and on-time delivery.",
    color: "#4CAF50",
  },
];

const servicePackages = [
  {
    number: "01",
    icon: FileText,
    title: "Preparation",
    description:
      "Perhaps your in-house team lacks the specialist knowledge, time, or capacity for in-depth research and modelling. I step in to prioritise compliance and fast-track the advice creation process.",
    includes: [
      "Case-by-case discussion with you to ensure recommendations meet licensee requirements and the client's best interest",
      "Product research (recommended product + discounted alternatives, cost & features comparison)",
      "Pre-SoA modelling (recommended strategy + alternative strategies)",
      "Best Interest Duty (BID) working paper writing",
    ],
    color: "#4A90E2",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Creation",
    description:
      "Need advice documentation? I cover everything from the simplest to the most complex multi-strategy SoA. I work with Xplan, Plutosoft, Midwinter, AdviserLogic and offer a rush service for tight deadlines.",
    includes: [
      "Document production (SoA, RoA, Strategy Paper, Modelling Paper)",
      "Customised or licensee-compliant templates",
      "Internal compliance key checks",
      "Direct communication with the adviser for accuracy and compliance",
      "SoA PowerPoint design (client-friendly slides)",
    ],
    color: "#C9A84C",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementation",
    description:
      "I handle the full back-office implementation when your admin team is overloaded. Note: This is an add-on service – it must be combined with Service #1 or #2.",
    includes: [
      "Preparing and lodging application forms",
      "Following up until implementation is complete",
    ],
    badge: "Add-on only",
    color: "#4CAF50",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="our-offering" className="section-pad bg-[#050E1D]">
      <div className="container-wide">

        {/* Our Offering */}
        <SectionHeading
          badge="Our Offering"
          title="Comprehensive paraplanning"
          highlight="tailored to you."
          subtitle="Paraplanning solutions designed around your practice – flexible, compliant, and built to scale."
        />

        {/* Accordion */}
        <div className="space-y-3 mb-16">
          {offering.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border overflow-hidden transition-colors"
                style={{
                  borderColor: isOpen ? `${item.color}40` : "rgba(255,255,255,0.06)",
                  background: isOpen ? `${item.color}06` : "#0A1628",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <span
                    className="font-heading font-bold text-sm flex-shrink-0 w-8"
                    style={{ color: item.color }}
                  >
                    {item.number}
                  </span>
                  <span className="flex-1 text-white font-semibold text-sm sm:text-base leading-snug">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className="text-[#8B9EC7]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[4.25rem] space-y-3">
                        <p className="text-[#8B9EC7] text-sm leading-relaxed">{item.detail}</p>
                        <div className="space-y-1.5">
                          <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
                            How this helps you
                          </p>
                          {item.benefits.map((b) => (
                            <div key={b} className="flex items-start gap-2.5 text-[#8B9EC7] text-sm">
                              <CheckCircle2
                                size={13}
                                className="flex-shrink-0 mt-0.5"
                                style={{ color: item.color }}
                              />
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing features */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="kicker text-center mb-3"
          >
            Pricing
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-white font-heading font-bold text-2xl text-center mb-8"
          >
            Transparent. Flexible. All-Inclusive.
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-[#0A1628] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${f.color}18` }}
                  >
                    <f.icon size={18} style={{ color: f.color }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.title}</p>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${f.color}18`, color: f.color }}
                    >
                      {f.badge}
                    </span>
                  </div>
                </div>
                <p className="text-[#8B9EC7] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#4A90E2]/30 rounded-xl text-[#4A90E2] text-sm font-medium hover:bg-[#4A90E2]/10 transition-colors"
            >
              Request Pricing Details
            </button>
          </motion.div>
        </div>

        {/* Service Packages */}
        <div>
          <SectionHeading
            badge="Service Packages"
            title="Three ways I"
            highlight="support you."
            subtitle="Flexible paraplanning services designed to match your practice's needs – from research through to implementation."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {servicePackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-6 rounded-2xl bg-[#0A1628] border border-white/[0.06] hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${pkg.color}18` }}
                  >
                    <pkg.icon size={20} style={{ color: pkg.color }} />
                  </div>
                  {pkg.badge && (
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${pkg.color}18`,
                        color: pkg.color,
                        border: `1px solid ${pkg.color}30`,
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <span className="kicker mb-1 block">Service {pkg.number}</span>
                <h3 className="text-white font-bold text-lg mb-3">{pkg.title}</h3>
                <p className="text-[#8B9EC7] text-sm leading-relaxed mb-4">{pkg.description}</p>
                <div className="h-px bg-white/[0.06] mb-4" />
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
                  This includes
                </p>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[#8B9EC7] text-xs leading-relaxed">
                      <CheckCircle2
                        size={13}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: pkg.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
