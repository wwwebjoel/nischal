"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative bg-[#040B17] border-t border-white/[0.06]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(#0A1628, #0A1628) padding-box, linear-gradient(135deg, #4A90E2, #C9A84C) border-box",
                  border: "1.5px solid transparent",
                  boxShadow: "0 0 16px rgba(74,144,226,0.2)",
                }}
              >
                <span className="font-heading font-bold text-sm tracking-[-0.03em] text-white">NK</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-base text-white tracking-[-0.02em]">
                  Nischal Khatri
                </p>
                <p className="text-[#8B9EC7] text-xs">Paraplanner &amp; Financial Planning Expert</p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#8B9EC7] text-sm leading-relaxed mb-5"
            >
              Detail-oriented Paraplanner specialising in SOA/ROA preparation,
              financial modelling, and compliance documentation for Australian
              advisory firms. Available for remote collaboration.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              {[
                { icon: Mail, text: "nischal.khatry@outlook.com", href: "mailto:nischal.khatry@outlook.com" },
                { icon: Phone, text: "(+977) 9806780159", href: "tel:+9779806780159" },
                { icon: MapPin, text: "Gwarko, Lalitpur, Nepal", href: null },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-[#8B9EC7] text-xs">
                  <item.icon size={12} className="text-[#4A90E2] flex-shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#8B9EC7] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download CV + Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-white font-semibold text-sm mb-4">Quick Actions</p>
            <a
              href="/cv.pdf"
              download="Nischal_Khatri_CV.pdf"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(74,144,226,0.3)] transition-shadow"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-[#8B9EC7] text-sm hover:text-white hover:border-white/20 transition-colors"
            >
              <ArrowUp size={14} />
              Back to Top
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-center text-xs text-[#8B9EC7]">
          <p>© {new Date().getFullYear()} Nischal Khatri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
