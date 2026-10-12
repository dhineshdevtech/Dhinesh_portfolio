import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* Section 2: About Me (Pure White) */}
      <section
        id="about"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#e0ecfb] px-6 py-24 text-center bg-white"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-blue-50 border border-blue-200/60">
            About Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">About Me</h2>
          <p className="text-sm text-slate-500">Pure White Surface (#FFFFFF)</p>
        </div>
      </section>

      {/* Section 3: Skills (Cool Slate Azure Mist) */}
      <section
        id="skills"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#dce8f7] px-6 py-24 text-center bg-[#e8f1fc]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-white border border-[#cbe0f8]">
            Skills Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Skills &amp; Tech Stack</h2>
          <p className="text-sm text-slate-500">Cool Mist Contrast (#E8F1FC)</p>
        </div>
      </section>

      {/* Section 4: Projects (Pure White) */}
      <section
        id="projects"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#e0ecfb] px-6 py-24 text-center bg-white"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-blue-50 border border-blue-200/60">
            Projects Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="text-sm text-slate-500">Pure White Surface (#FFFFFF)</p>
        </div>
      </section>

      {/* Section 5: Certificates (Rich Ice Azure Wash) */}
      <section
        id="certificates"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#d8e6f7] px-6 py-24 text-center bg-[#e3effc]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-white border border-[#c8def8]">
            Certificates Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Certificates &amp; Achievements</h2>
          <p className="text-sm text-slate-500">Rich Ice Azure Wash (#E3EFFC)</p>
        </div>
      </section>

      {/* Section 6: Contact (Ice Azure Base) */}
      <section
        id="contact"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#e0ecfb] px-6 py-24 text-center bg-[#f0f6fe]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-white border border-[#cbe0f8]">
            Contact Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Get In Touch</h2>
          <p className="text-sm text-slate-500">Ice Azure Base (#F0F6FE)</p>
        </div>
      </section>
    </div>
  );
}
