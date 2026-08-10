import HeroSection from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { ProjectSection } from "@/components/home/ProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <TechStackSection />
    </main>
  );
}

