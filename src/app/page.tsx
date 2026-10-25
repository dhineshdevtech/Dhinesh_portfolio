import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AIVideoSpotlight from "@/components/AIVideoSpotlight";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Approach from "@/components/Approach";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#0066ff]/20 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Hero Section Component */}
        <Hero />

        {/* Featured Work / Projects Section */}
        <FeaturedWork />

        {/* AI Video Commercials Spotlight Section */}
        <AIVideoSpotlight />

        {/* Services & Core Capabilities Section */}
        <Services />

        {/* Tech Stack & Arsenal Section */}
        <TechStack />

        {/* Engineering Approach & Practices */}
        <Approach />

        {/* Final Contact Call-to-Action Section */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
