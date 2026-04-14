"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#why-hire-me", label: "Why Me" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = ["home", "about", "why-hire-me", "process", "skills", "experience", "portfolio", "education", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Brand mark — gradient border, dark fill, heading font */}
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(#0A1628, #0A1628) padding-box, linear-gradient(135deg, #4A90E2, #C9A84C) border-box",
                  border: "1.5px solid transparent",
                  boxShadow: "0 0 18px rgba(74,144,226,0.25)",
                }}
              >
                <span className="font-heading font-bold text-sm tracking-[-0.03em] text-white">
                  NK
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-semibold text-sm leading-tight text-white tracking-[-0.02em]">
                  Nischal Khatri
                </p>
                <p className="text-[#8B9EC7] text-[11px] font-medium tracking-wide">Paraplanner</p>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`text-sm font-medium transition-colors relative group py-1 ${
                      isActive ? "text-white" : "text-[#8B9EC7] hover:text-white"
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#C9A84C] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/cv.pdf"
                download="Nischal_Khatri_CV.pdf"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-[#4A90E2]/30 text-[#4A90E2] text-sm font-medium hover:bg-[#4A90E2]/10 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download size={14} />
                CV
              </motion.a>
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white text-sm font-semibold hover:shadow-[0_0_24px_rgba(74,144,226,0.5)] transition-shadow"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Hire Me
              </motion.button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#8B9EC7] hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 z-50 glass border-l border-white/[0.06] flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
                <span className="text-white font-semibold">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8B9EC7] hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3.5 rounded-xl text-[#8B9EC7] hover:text-white hover:bg-white/[0.05] font-medium transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-5 space-y-3 border-t border-white/[0.06]">
                <a
                  href="/cv.pdf"
                  download="Nischal_Khatri_CV.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-[#4A90E2]/30 rounded-xl text-[#4A90E2] text-sm font-medium"
                >
                  <Download size={14} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white text-sm font-semibold"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
