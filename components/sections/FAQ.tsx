"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What is your onboarding process?",
    a: "I first run a pilot program with a commitment of about 10 SoAs. This lets us both see how we work together and iron out any practice-specific nuances.",
  },
  {
    q: "Do you prefer our login or yours?",
    a: "It depends on volume, but I prefer all data to remain with you.",
  },
  {
    q: "What information do you need to get started?",
    a: "CRM or other relevant logins, example SoAs, my paraplanning request form and a signed engagement letter for the pilot.",
  },
  {
    q: "How do you achieve such high quality benchmarks?",
    a: "I have developed 5+ years of systems and peer-review processes. Vetting is free during the pilot. I also have dedicated processes to avoid \"paraplanner dependency\".",
  },
  {
    q: "Do you offer any discounts on pricing?",
    a: "Yes – I offer volume discounts from 2.5% to 12.5% depending on commitment level.",
  },
  {
    q: "How do I know when I will receive my SoA?",
    a: "I give you an accurate due date the moment I receive the request. I often jump on a quick call to align everything from the start.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-[#0A1628]">
      <div className="container-wide max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions."
          subtitle="Everything you need to know before getting started."
          centered
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border overflow-hidden transition-colors"
                style={{
                  borderColor: isOpen ? "rgba(74,144,226,0.35)" : "rgba(255,255,255,0.06)",
                  background: isOpen ? "rgba(74,144,226,0.05)" : "#050E1D",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-white font-semibold text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/[0.12] flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={11} className="text-[#4A90E2]" />
                    ) : (
                      <Plus size={11} className="text-[#8B9EC7]" />
                    )}
                  </div>
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
                      <div className="px-5 pb-5">
                        <div className="h-px bg-white/[0.06] mb-4" />
                        <p className="text-[#8B9EC7] text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
