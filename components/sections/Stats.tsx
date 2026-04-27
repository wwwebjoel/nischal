"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Clock, FileText, Building2, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: 10,
    suffix: "k+",
    label: "SOAs & ROAs",
    sub: "Prepared and delivered",
    color: "#4A90E2",
  },
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: "Years Active",
    sub: "Since November 2022",
    color: "#C9A84C",
  },
  {
    icon: Building2,
    value: 7,
    suffix: "",
    label: "Firms Served",
    sub: "Across Australia",
    color: "#4CAF50",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Compliance Rate",
    sub: "Zero ASIC failures",
    color: "#A78BFA",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 bg-[#0A1628] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container-wide space-y-4">
        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-[#050E1D]/70 border border-white/[0.06] hover:border-white/[0.14] transition-colors group"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${stat.color}18` }}
              >
                <stat.icon size={17} style={{ color: stat.color }} />
              </div>
              <p className="font-heading font-bold text-3xl text-white leading-none mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
              </p>
              <p className="text-white text-sm font-semibold">{stat.label}</p>
              <p className="text-[#8B9EC7] text-xs mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance bar — visual proof of 100% record */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 rounded-2xl bg-[#050E1D]/70 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-white text-sm font-semibold">ASIC Compliance Rate</span>
              <span className="font-heading font-bold text-sm text-[#4CAF50]">100%</span>
            </div>
            <div className="h-1.5 bg-[#0F1E38] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #4A90E2, #4CAF50)" }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
              />
            </div>
          </div>
          <p className="text-[#8B9EC7] text-xs leading-relaxed sm:max-w-[280px] flex-shrink-0">
            Zero ASIC non-compliances across all SOAs and ROAs prepared since November 2022.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
