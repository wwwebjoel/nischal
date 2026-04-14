"use client";

import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";

// Recharts (~200KB) is lazy-loaded only when this section scrolls into view.
// The shimmer placeholder prevents layout shift during loading.
const CaseStudiesPanel = dynamic(() => import("./CaseStudiesPanel"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[520px] gradient-border rounded-2xl shimmer" />
  ),
});

export default function CaseStudies() {
  return (
    <section id="portfolio" className="section-pad bg-[#0A1628]">
      <div className="container-wide">
        <SectionHeading
          badge="Work Samples"
          title="Financial Analysis"
          highlight="Showcase"
          subtitle="Anonymised case studies demonstrating real-world financial modelling, portfolio construction, and compliance work — the kind of analysis I deliver daily."
          centered
        />
        <CaseStudiesPanel />
      </div>
    </section>
  );
}
