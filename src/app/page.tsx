import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Approach from "@/components/Approach";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* Featured Work / Projects Section (01) */}
      <FeaturedWork />

      {/* Services Section (02) */}
      <Services />

      {/* Tech Stack Section (03) */}
      <TechStack />

      {/* Approach Section (04) with AI Automation spotlight & GitHub banner */}
      <Approach />

      {/* Final Contact Call-to-Action Section */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
