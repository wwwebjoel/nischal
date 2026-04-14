"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Business Studies (BBS)",
    institution: "Patan Multiple Campus, Tribhuvan University",
    year: "2024",
    description:
      "Comprehensive business studies covering accounting, finance, economics, management and marketing. Strong foundation in financial analysis and business strategy.",
    color: "#4A90E2",
    badge: "University Degree",
  },
  {
    icon: BookOpen,
    degree: "+2 Higher Secondary Examination",
    institution: "Lok Smriti Higher Secondary School",
    year: "2019",
    description:
      "Higher Secondary Education with focus on commerce and business studies, building core analytical and quantitative skills.",
    color: "#C9A84C",
    badge: "Secondary Education",
  },
  {
    icon: BookOpen,
    degree: "Secondary Education Examination (SEE)",
    institution: "Lok Smriti Higher Secondary School",
    year: "2017",
    description:
      "Foundational secondary education establishing strong academic grounding in mathematics, science and business fundamentals.",
    color: "#A78BFA",
    badge: "Secondary Education",
  },
];

const certifications = [
  {
    icon: Award,
    title: "Accounting & Taxation Training",
    issuer: "Institute of Accounting Training Nepal (IATN)",
    year: "2019",
    focus: "Tally, VAT, TDS",
    color: "#4CAF50",
  },
  {
    icon: Award,
    title: "RG 146 Compliance",
    issuer: "Australian Financial Services",
    year: "Current",
    focus: "Tier 1 — Financial Planning",
    color: "#C9A84C",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="Education & Certifications"
          title="Academic"
          highlight="Foundation"
          subtitle="A strong academic background in business studies, complemented by professional certifications in accounting, taxation and Australian financial regulation."
        />

        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Education cards */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-semibold text-lg mb-6"
            >
              Academic Qualifications
            </motion.h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="gradient-border rounded-2xl p-5 hover:shadow-[0_0_30px_rgba(74,144,226,0.06)] transition-shadow"
                  style={{ background: "#0A1628" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${edu.color}15` }}
                    >
                      <edu.icon size={22} style={{ color: edu.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <h4 className="text-white font-bold text-base leading-tight">{edu.degree}</h4>
                          <p style={{ color: edu.color }} className="text-sm font-medium mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                            style={{ background: `${edu.color}15`, color: edu.color }}
                          >
                            <Calendar size={10} />
                            {edu.year}
                          </span>
                          <span className="text-[#8B9EC7] text-[10px] uppercase tracking-wider">
                            {edu.badge}
                          </span>
                        </div>
                      </div>
                      <p className="text-[#8B9EC7] text-sm mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-semibold text-lg mb-6"
            >
              Certifications & Training
            </motion.h3>
            <div className="space-y-4 mb-8">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="p-5 rounded-2xl border border-white/[0.08] hover:border-white/15 transition-colors"
                  style={{ background: "#0A1628" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}15` }}
                    >
                      <cert.icon size={18} style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm leading-tight">{cert.title}</h4>
                      <p style={{ color: cert.color }} className="text-xs font-medium mt-0.5">{cert.issuer}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-[#8B9EC7] text-xs">{cert.focus}</span>
                        <span className="text-[#8B9EC7] text-xs">·</span>
                        <span className="text-[#8B9EC7] text-xs">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CPD Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#1E5FBF]/15 to-[#C9A84C]/10 border border-[#4A90E2]/20"
            >
              <h4 className="text-white font-semibold text-sm mb-2">Continuous Professional Development</h4>
              <p className="text-[#8B9EC7] text-xs leading-relaxed">
                Committed to maintaining current knowledge of Australian financial planning legislation,
                regulatory changes, ASIC guidance, and industry best practices. Regularly completing
                CPD activities to stay current with Tier 1 requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
