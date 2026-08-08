import HeroSection from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { ProjectSection } from "@/components/home/ProjectSection";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <TechStackSection />
      <Footer />
    </div>
  );
}

