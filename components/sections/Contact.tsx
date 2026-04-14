"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Download,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

type FormValues = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "nischal.khatry@outlook.com",
    href: "mailto:nischal.khatry@outlook.com",
    color: "#4A90E2",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "(+977) 9806780159",
    href: "tel:+9779806780159",
    color: "#4CAF50",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gwarko, Lalitpur, Nepal",
    href: null,
    color: "#C9A84C",
  },
  {
    icon: Globe,
    label: "Remote Availability",
    value: "AEST / AEDT compatible",
    href: null,
    color: "#A78BFA",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-[#0F1E38] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#8B9EC7]/60 focus:outline-none focus:ring-1 transition-colors ${
      hasError
        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/30"
        : "border-white/[0.08] focus:border-[#4A90E2]/60 focus:ring-[#4A90E2]/20"
    }`;

  return (
    <section id="contact" className="section-pad bg-[#0A1628]">
      <div className="container-wide">
        <SectionHeading
          badge="Get in Touch"
          title="Let&apos;s Work"
          highlight="Together"
          subtitle="Looking for a detail-oriented paraplanner for your Australian advisory practice? I'd love to hear about your requirements."
          centered
        />

        <div className="grid lg:grid-cols-[1fr_420px] gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="gradient-border rounded-2xl p-6 md:p-8" style={{ background: "#050E1D" }}>
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[#8B9EC7] text-xs uppercase tracking-wider font-medium">
                      Full Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[#8B9EC7] text-xs uppercase tracking-wider font-medium">
                      Email Address *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#8B9EC7] text-xs uppercase tracking-wider font-medium">
                    Company / Practice
                  </label>
                  <input
                    {...register("company")}
                    placeholder="Your firm or practice name (optional)"
                    className={inputClass(false)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#8B9EC7] text-xs uppercase tracking-wider font-medium">
                    Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 20, message: "Please write at least 20 characters" },
                    })}
                    rows={5}
                    placeholder="Tell me about your paraplanning requirements, volume of work, software used, and preferred collaboration style..."
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button & status */}
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#4CAF50]/10 border border-[#4CAF50]/25 text-[#4CAF50]"
                    >
                      <CheckCircle size={18} />
                      <span className="text-sm font-medium">
                        Message sent! I&apos;ll be in touch within 24 hours.
                      </span>
                    </motion.div>
                  ) : status === "error" ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400"
                    >
                      <AlertCircle size={18} />
                      <span className="text-sm font-medium">
                        Something went wrong. Please email me directly at nischal.khatry@outlook.com
                      </span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="btn"
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-gradient-to-r from-[#1E5FBF] to-[#4A90E2] rounded-xl text-white font-semibold text-sm disabled:opacity-70 hover:shadow-[0_0_30px_rgba(74,144,226,0.4)] transition-shadow"
                      whileHover={status !== "loading" ? { scale: 1.02, y: -1 } : {}}
                      whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact info & availability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#050E1D] border border-white/[0.07] hover:border-white/15 transition-colors group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}15` }}
                >
                  <card.icon size={18} style={{ color: card.color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[#8B9EC7] text-xs uppercase tracking-wider mb-0.5">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-white text-sm font-medium hover:text-[#4A90E2] transition-colors truncate block"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{card.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#1E5FBF]/12 to-[#C9A84C]/8 border border-[#4A90E2]/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                <h4 className="text-white font-semibold text-sm">Open to New Opportunities</h4>
              </div>
              <p className="text-[#8B9EC7] text-xs leading-relaxed mb-4">
                Currently available for remote paraplanning engagements — both contract and ongoing. I work
                comfortably within Australian business hours and am familiar with ASIC, FASEA and licensee
                compliance requirements.
              </p>
              <a
                href="/cv.pdf"
                download="Nischal_Khatri_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs font-medium hover:bg-white/[0.08] transition-colors"
              >
                <Download size={13} />
                Download Full CV (PDF)
              </a>
            </motion.div>

            {/* References note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 rounded-2xl bg-[#050E1D] border border-white/[0.06]"
            >
              <p className="text-[#8B9EC7] text-xs leading-relaxed">
                <span className="text-white font-medium">References available upon request</span> — including
                professional referees from Ready Advice Pty Ltd, Peak Pinnacle Financial Pty Ltd, and IATN Nepal.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
