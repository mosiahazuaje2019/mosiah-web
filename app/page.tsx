import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SEOSection } from "@/components/sections/SEOSection";
import { SEOAuditSection } from "@/components/sections/SEOAuditSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SEOSection />
        <SEOAuditSection />
        <TechStackSection />
        <WorkflowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
}
