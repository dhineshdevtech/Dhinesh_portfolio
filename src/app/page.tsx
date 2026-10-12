import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Realigned Navigation Bar */}
      <Navbar />

      {/* Hero Section Container */}
      <section
        id="home"
        className="relative flex flex-col items-center pt-28 sm:pt-32 pb-20 px-6 text-center bg-[#f0f6fe] overflow-hidden"
      >
        {/* Subtle background ambient cyber-blue glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-[#00f2fe]/25 via-[#0070f3]/15 to-transparent blur-3xl opacity-80" />
        </div>

        <div className="max-w-2xl space-y-6 animate-fadeIn">
          {/* Avatar from uploaded Instagram photo */}
          <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] shadow-[0_6px_28px_rgba(0,112,243,0.32)] hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
              <Image
                src="/profile.jpg"
                alt="Dhinesh Profile"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#d8e6f8] bg-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] animate-pulse" />
            <span className="text-slate-800">Theme: Ice Azure Mist &amp; Cyber Blue</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
              Dhinesh
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Full-Stack Developer crafting modern, high-performance web applications with Next.js and TypeScript.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_4px_14px_rgba(0,112,243,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold border border-[#cde0f8] bg-white text-slate-800 hover:bg-slate-50 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: About Me (Pure White Elevated Contrast) */}
      <section
        id="about"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#e0ecfb] px-6 py-24 text-center bg-white"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-blue-50 border border-blue-200/60">
            About Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">About Me</h2>
          <p className="text-sm text-slate-500">Pure White Card Surface (#FFFFFF) popping over Ice Azure</p>
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

      {/* Section 4: Projects (Pure White Elevated Contrast) */}
      <section
        id="projects"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[#e0ecfb] px-6 py-24 text-center bg-white"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] bg-blue-50 border border-blue-200/60">
            Projects Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="text-sm text-slate-500">Pure White Surface (#FFFFFF) with crisp shadow depth</p>
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
