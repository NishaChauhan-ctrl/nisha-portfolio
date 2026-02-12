import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WorkSection } from "@/components/work-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingShapes } from "@/components/floating-shapes";
import { DoodleDivider } from "@/components/doodle-divider";

export default function Home() {
  return (
    <div className="relative">
      <FloatingShapes />
      <HeroSection />
      <DoodleDivider />
      <AboutSection />
      <DoodleDivider />
      <WorkSection />
      <DoodleDivider />
      <ProcessSection />
      <DoodleDivider />
      <ContactSection />
      <DoodleDivider />
      <Footer />
    </div>
  );
}
