"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const technicalSkills = [
  { name: "SOA/ROA Preparation", pct: 95, color: "#4A90E2" },
  { name: "Financial Modelling", pct: 90, color: "#C9A84C" },
  { name: "Insurance Analysis", pct: 88, color: "#4A90E2" },
  { name: "Superannuation & SMSFs", pct: 85, color: "#C9A84C" },
  { name: "Investment Research", pct: 82, color: "#4A90E2" },
  { name: "Tax Minimisation", pct: 80, color: "#A78BFA" },
];

const tools = [
  { name: "Irate", category: "Financial Analysis" },
  { name: "Morningstar", category: "Fund Research" },
  { name: "Chant West", category: "Super Comparison" },
  { name: "DASH CRM", category: "Client Management" },
  { name: "Intelliflo", category: "Practice Management" },
  { name: "Xplan", category: "Financial Planning" },
  { name: "PlatformPlus AMS", category: "Asset Management" },
  { name: "Microsoft Excel", category: "Modelling" },
  { name: "Microsoft Word", category: "Documentation" },
  { name: "Microsoft Outlook", category: "Communication" },
];

const softSkills = [
  { label: "Analytical Thinking", icon: "🧠" },
  { label: "Attention to Detail", icon: "🔍" },
  { label: "Written Communication", icon: "✍️" },
  { label: "Team Collaboration", icon: "🤝" },
  { label: "Time Management", icon: "⏱️" },
  { label: "Problem Solving", icon: "💡" },
];

interface SkillRingProps {
  name: string;
  pct: number;
  color: string;
  index: number;
}

function SkillRing({ name, pct, color, index }: SkillRingProps) {
  const r = 38;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0A1628] border border-white/[0.06] hover:border-white/[0.12] transition-colors group"
    >
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {/* Track */}
          <circle cx="50" cy="50" r={r} fill="none" stroke="#0F1E38" strokeWidth="8" />
          {/* Progress */}
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg" style={{ color }}>
            {pct}%
          </span>
        </div>
      </div>
      <span className="text-[#8B9EC7] text-xs font-medium text-center leading-tight group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-[#0A1628]">
      <div className="container-wide">
        <SectionHeading
          badge="Skills & Expertise"
          title="Technical Depth."
          highlight="Broad Tools."
          subtitle="A comprehensive skill set built for the Australian financial planning landscape — from compliance documentation to complex modelling."
        />

        <div className="space-y-16">
          {/* Technical Skills — Rings */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-white font-semibold text-lg mb-6"
            >
              Core Competencies
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {technicalSkills.map((skill, i) => (
                <SkillRing key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tools & Software */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-white font-semibold text-lg mb-6"
              >
                Tools & Software
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                className="flex flex-wrap gap-3"
              >
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
                    }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="group flex flex-col px-4 py-2.5 rounded-xl bg-[#0F1E38] border border-white/[0.07] hover:border-[#4A90E2]/40 cursor-default transition-colors"
                  >
                    <span className="text-white text-sm font-medium group-hover:text-[#4A90E2] transition-colors">
                      {tool.name}
                    </span>
                    <span className="text-[#8B9EC7] text-[10px]">{tool.category}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Soft Skills */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-white font-semibold text-lg mb-6"
              >
                Professional Strengths
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="space-y-3"
              >
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
                    }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F1E38] border border-white/[0.05] hover:border-[#C9A84C]/20 transition-colors group"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-[#8B9EC7] text-sm group-hover:text-white transition-colors">
                      {skill.label}
                    </span>
                    {/* Progress bar */}
                    <div className="ml-auto flex-1 max-w-24 h-1 bg-[#0A1628] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#4A90E2] to-[#C9A84C]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
