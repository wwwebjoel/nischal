"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Clock, FileText, Building2, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 2,
    suffix: "+",
    label: "Years Paraplanning",
    sublabel: "Since Nov 2022",
    color: "#4A90E2",
  },
  {
    icon: FileText,
    value: 50,
    suffix: "+",
    label: "SOAs & ROAs",
    sublabel: "Fully compliant",
    color: "#C9A84C",
  },
  {
    icon: Building2,
    value: 3,
    suffix: "",
    label: "Australian Firms",
    sublabel: "Ready Advice, Peak Pinnacle & more",
    color: "#4CAF50",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Compliance Record",
    sublabel: "ASIC & licensee standards",
    color: "#A78BFA",
  },
];

export default function Stats() {
  return (
    <section className="relative py-12 bg-[#0A1628] overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#050E1D]/50 border border-white/[0.05] hover:border-white/10 transition-colors group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${stat.color}18` }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div>
                <p
                  className="text-2xl font-bold leading-none mb-1"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </p>
                <p className="text-white text-xs font-semibold leading-tight">{stat.label}</p>
                <p className="text-[#8B9EC7] text-[10px] mt-0.5 hidden sm:block">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
