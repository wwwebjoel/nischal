import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import CaseStudies from "@/components/sections/CaseStudies";
import Education from "@/components/sections/Education";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WhyHireMe />
      <Process />
      <Skills />
      <Experience />
      <CaseStudies />
      <Education />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
