import { useState, useRef, useCallback, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSlide from "@/components/slides/HeroSlide";
import ProblemSlide from "@/components/slides/ProblemSlide";
import FeaturesSlide from "@/components/slides/FeaturesSlide";
import TechSlide from "@/components/slides/TechSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import VisionSlide from "@/components/slides/VisionSlide";
import CTASlide from "@/components/slides/CTASlide";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

const sectionIds = ["Home", "Problem", "Features", "Tech", "Demo", "Vision", "Contact"];

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  const [videoOpen, setVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setScrollProgress(progress);

    // Determine active section
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= el.scrollTop + 200) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const idx = sectionIds.indexOf(activeSection);
    if (idx < sectionIds.length - 1) scrollTo(sectionIds[idx + 1]);
  };

  return (
    <div ref={containerRef} className="snap-container">
      <ParticleBackground />
      <Navbar scrollProgress={scrollProgress} onNavClick={scrollTo} activeSection={activeSection} />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      <HeroSlide onWatchDemo={() => setVideoOpen(true)} onNext={scrollToNext} />
      <ProblemSlide />
      <FeaturesSlide />
      <TechSlide />
      <DemoSlide />
      <VisionSlide />
      <CTASlide />
      <Footer />
    </div>
  );
};

export default Index;
