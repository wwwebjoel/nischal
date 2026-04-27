"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    stars: 5,
    text: "Nischal delivered consistent, high-quality SOAs that met all our ASIC compliance standards. His turnaround was reliable and his communication clear throughout every engagement.",
    name: "Ready Advice Pty Ltd",
    role: "Financial Advisory Practice · Australia",
    initials: "RA",
    color: "#4A90E2",
  },
  {
    stars: 5,
    text: "Working with Nischal has streamlined our paraplanning workflow significantly. His attention to detail and deep understanding of Australian compliance requirements is excellent.",
    name: "Peak Pinnacle Financial Pty Ltd",
    role: "Financial Advisory Practice · Australia",
    initials: "PP",
    color: "#C9A84C",
  },
  {
    stars: 5,
    text: "An extremely capable paraplanner who understands the nuances of Australian financial planning. Nischal's work is thorough, compliant, and always delivered on time.",
    name: "Australian Advisory Practice",
    role: "Financial Planning Firm · Australia",
    initials: "AP",
    color: "#4CAF50",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="What Clients Say"
          title="Trusted by"
          highlight="Australian Advisers."
          subtitle="Feedback from the advisory practices I have served across Australia."
          centered
        />

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-6 rounded-2xl bg-[#0A1628] border border-white/[0.06] hover:border-white/[0.12] transition-colors overflow-hidden"
            >
              {/* Background quote mark */}
              <div className="absolute top-4 right-4 opacity-[0.04] pointer-events-none">
                <Quote size={72} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C9A84C] text-[#C9A84C]" />
                ))}
                <span className="text-[#C9A84C] text-xs font-bold ml-1.5">{t.stars}.0</span>
              </div>

              {/* Quote */}
              <p className="text-[#8B9EC7] text-sm leading-relaxed mb-5 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs text-white"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}90, ${t.color}40)`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{t.name}</p>
                  <p className="text-[#8B9EC7] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
