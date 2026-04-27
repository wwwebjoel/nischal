"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Shield,
  Lock,
  Zap,
  ShieldCheck,
  Users,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  {
    icon: FileCheck,
    title: "Every Document Quality-Reviewed",
    points: [
      "Strict procedures ensure the highest industry standards",
      "All documents reviewed before leaving my desk",
      "Zero audit failures across all work delivered",
    ],
    metric: "100% audit pass rate",
    color: "#4A90E2",
  },
  {
    icon: Shield,
    title: "Requests Managed via Secure Portal",
    points: [
      "Submit requests and monitor progress with ease",
      "Always available on the phone or message",
      "Communication stays clear and centralised",
    ],
    metric: "Transparent workflow",
    color: "#C9A84C",
  },
  {
    icon: Lock,
    title: "Data Protection Prioritised",
    points: [
      "MFA-protected access at all times",
      "SharePoint security for all client data",
      "Additional security measures as standard",
    ],
    metric: "MFA + SharePoint security",
    color: "#4CAF50",
  },
  {
    icon: Zap,
    title: "No Minimum Request Requirements",
    points: [
      "Pay only for the paraplanning services you need",
      "No lock-in contracts or volume minimums",
      "Flexible engagement entirely on your terms",
    ],
    metric: "Pay as you go",
    color: "#A78BFA",
  },
  {
    icon: ShieldCheck,
    title: "Proven Compliance Expertise",
    points: [
      "Zero documents failed at audit",
      "Consistently attain top compliance rankings",
      "Deep, current knowledge of ASIC requirements",
    ],
    metric: "Zero audit failures",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Dedicated Paraplanner Assigned to You",
    points: [
      "Assigned specifically based on your needs, niche, and location",
      "Backup support ensures your work is never delayed",
      "Deep understanding of your practice style over time",
    ],
    metric: "Your dedicated resource",
    color: "#EF4444",
  },
  {
    icon: Globe,
    title: "Nepal-Based, AEST-Aligned",
    points: [
      "Deep knowledge of Australian rules and regulations",
      "Operates on Australian business hours, Monday to Friday",
      "React fast, communicate easily, deliver on time",
    ],
    metric: "AEST business hours",
    color: "#06B6D4",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="What I Bring"
          title="Why Advisers"
          highlight="Choose Me"
          subtitle="Seven concrete reasons Australian advisory practices trust me with their most important client documents."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
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
              <h3 className="text-white font-bold text-base mb-3 leading-snug">{s.title}</h3>

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
        </div>

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
