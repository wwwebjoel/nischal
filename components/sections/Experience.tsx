"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    role: "Paraplanner",
    company: "Contract Paraplanner",
    client: "Ready Advice Pty Ltd & Peak Pinnacle Financial Pty Ltd",
    period: "Nov 2022 – Present",
    location: "Remote · Nepal / Australia",
    type: "current",
    color: "#4A90E2",
    achievements: [
      "Prepare and review compliant SOAs, ROAs, annual reviews, and investment proposals adhering to ASIC and licensee standards",
      "Conduct thorough superannuation fund comparisons using Irate, Morningstar and Chant West research tools",
      "Perform detailed insurance needs analysis and product comparison across multiple providers",
      "Build comprehensive financial models including retirement projections, cashflow analysis and scenario planning",
      "Establish and maintain client data on CRM systems (DASH, Intelliflo, Xplan, PlatformPlus AMS)",
      "Conduct investment research, asset allocation analysis and portfolio construction support",
      "Prepare and lodge OFA/FDS/Fee consent applications ensuring full regulatory compliance",
      "Collaborate with advisers and support teams to streamline workflow and improve documentation efficiency",
    ],
    tags: ["SOA/ROA", "Financial Modelling", "Insurance Analysis", "SMSF", "Compliance", "Irate", "Morningstar"],
  },
  {
    role: "Operations Head",
    company: "Yellow Pomelo The Restro",
    client: "Jhamsikhel, Lalitpur",
    period: "Aug 2021 – Oct 2022",
    location: "Lalitpur, Nepal",
    type: "past",
    color: "#C9A84C",
    achievements: [
      "Reduced operational waste by 15% through systematic cost control measures and process optimisation",
      "Created and maintained detailed revenue and expense reports (weekly, monthly, annual), improving financial transparency",
      "Trained staff on service best practices, resulting in a 25% increase in customer satisfaction scores",
      "Managed inventory, supervised shifts, and ensured strict adherence to health and sanitation regulations",
      "Boosted social media engagement by 30% through targeted content creation and community management",
    ],
    tags: ["Financial Reporting", "Operations", "Cost Control", "Team Leadership", "Budget Management"],
  },
  {
    role: "Account & Administrative Officer",
    company: "Nine Pharma",
    client: "Subidhanagar, Kathmandu",
    period: "Nov 2019 – Jul 2021",
    location: "Kathmandu, Nepal",
    type: "past",
    color: "#A78BFA",
    achievements: [
      "Managed accounting records with meticulous accuracy, ensuring reliable transaction documentation and financial reporting",
      "Reduced outstanding payments by 20% through proactive debt follow-up and payment processing",
      "Handled petty cash management, payment processing, and day-to-day bookkeeping",
      "Analysed budgets and expenditures, prepared vouchers, and enhanced overall financial tracking",
      "Provided comprehensive administrative support including correspondence, reports, and office communication",
    ],
    tags: ["Bookkeeping", "Accounts Payable", "Financial Reporting", "Administration", "Tally"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="Experience"
          title="Career"
          highlight="Timeline"
          subtitle="A progressive track record in financial services, operations management, and accounting. Building depth in paraplanning since 2022."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E5FBF]/60 via-[#4A90E2]/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.role + exp.company} className="relative md:grid md:grid-cols-2 md:gap-12 md:mb-16">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#050E1D] z-10"
                    style={{ background: exp.color }}
                  />

                  {/* Card - alternating sides */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className={`${isLeft ? "md:col-start-1" : "md:col-start-2"} mb-8 md:mb-0`}
                  >
                    <div
                      className="gradient-border rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(74,144,226,0.08)] transition-shadow"
                      style={{ background: "#0A1628" }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: `${exp.color}18` }}
                            >
                              <Briefcase size={15} style={{ color: exp.color }} />
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-base leading-tight">{exp.role}</h3>
                              <p style={{ color: exp.color }} className="text-sm font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <p className="text-[#8B9EC7] text-xs mt-1">{exp.client}</p>
                        </div>
                        {exp.type === "current" && (
                          <span className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/25 text-[#4CAF50] text-[10px] font-semibold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-[#8B9EC7]">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>

                      <div className="h-px bg-white/[0.06] mb-4" />

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.06 + 0.2 }}
                            className="flex items-start gap-2.5 text-[#8B9EC7] text-xs leading-relaxed"
                          >
                            <ChevronRight
                              size={12}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: exp.color }}
                            />
                            {ach}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-medium"
                            style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}25` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty opposite column for layout */}
                  {isLeft && <div className="hidden md:block md:col-start-2" />}
                  {!isLeft && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
