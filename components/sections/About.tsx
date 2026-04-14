"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  "RG 146 Compliant — meets Australian regulatory requirements",
  "Proficient in Irate, Morningstar, Chant West & Xplan",
  "Experienced with DASH, Intelliflo & PlatformPlus AMS",
  "Strong track record in SOA/ROA preparation & review",
  "Expertise in SMSF, superannuation & retirement strategies",
  "Available for remote collaboration across time zones",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "nischal.khatry@outlook.com", href: "mailto:nischal.khatry@outlook.com" },
  { icon: Phone, label: "Phone", value: "(+977) 9806780159", href: "tel:+9779806780159" },
  { icon: MapPin, label: "Location", value: "Gwarko, Lalitpur, Nepal", href: null },
  { icon: Globe, label: "Availability", value: "Remote — Australia & NZ", href: null },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#050E1D]">
      <div className="container-wide">
        <SectionHeading
          badge="About Me"
          title="Precision. Compliance."
          highlight="Expertise."
          subtitle="A dedicated paraplanning professional helping Australian advisers deliver exceptional client outcomes — from anywhere in the world."
        />

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {[
              "With over 2 years of dedicated paraplanning experience, I specialise in crafting comprehensive financial strategies that help Australian advisers deliver exceptional client outcomes. Based in Nepal and fully equipped for seamless remote collaboration, I bring precision, compliance expertise, and deep technical knowledge to every engagement.",
              "My expertise spans the full paraplanning lifecycle — from detailed financial modelling and insurance needs analysis to SOA/ROA preparation and regulatory compliance. I've proudly supported advisers at Ready Advice Pty Ltd and Peak Pinnacle Financial Pty Ltd, producing high-quality documentation and rigorous analysis that streamlines adviser workflows and enhances client value.",
              "I stay current with Australian financial planning regulations, ASIC requirements, and CPD obligations — ensuring every document meets the highest compliance standards. My background in accounting further sharpens my analytical edge when building complex financial scenarios and retirement projections.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="text-[#8B9EC7] text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4"
            >
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
            </motion.div>
          </motion.div>

          {/* Right — Highlights */}
          <div className="space-y-6">
            {/* Avatar / visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="gradient-border rounded-2xl p-6 bg-[#0A1628]">
                <div className="flex items-center gap-4 mb-5">
                  {/* Initials avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E5FBF] to-[#C9A84C] flex items-center justify-center shadow-[0_0_30px_rgba(30,95,191,0.4)] flex-shrink-0">
                    <span className="text-white font-bold text-xl">NK</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Nischal Khatri</h3>
                    <p className="text-[#4A90E2] text-sm font-medium">Paraplanner & Financial Analyst</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                      <span className="text-[#8B9EC7] text-xs">Open to opportunities</span>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-[#8B9EC7] text-sm leading-relaxed">
                  Bachelor of Business Studies (BBS) graduate with specialised training in
                  accounting, taxation, and financial services — committed to delivering
                  compliant, client-focused financial planning support.
                </p>
              </div>
            </motion.div>

            {/* Highlights checklist */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="space-y-3"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
                  }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0A1628] border border-white/[0.05] hover:border-[#4A90E2]/20 transition-colors group"
                >
                  <CheckCircle
                    size={16}
                    className="text-[#4A90E2] flex-shrink-0 mt-0.5 group-hover:text-[#C9A84C] transition-colors"
                  />
                  <span className="text-[#8B9EC7] text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
