import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Floating Responsive Navbar */}
      <Navbar />

      {/* Hero Section Container (Under construction / next step) */}
      <section
        id="home"
        className="relative flex flex-col items-center pt-28 sm:pt-32 pb-20 px-6 text-center overflow-hidden"
      >
        {/* Subtle background ambient cyber-blue glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#00f2fe]/15 via-[#0070f3]/10 to-transparent blur-3xl opacity-80" />
        </div>

        <div className="max-w-2xl space-y-6 animate-fadeIn">
          {/* Avatar preview from uploaded Instagram photo */}
          <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] shadow-[0_0_30px_rgba(0,112,243,0.35)] hover:scale-105 transition-transform duration-300">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[var(--surface-border)] bg-[var(--surface)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] animate-pulse" />
            <span className="text-[var(--foreground)]">Step 1 Complete: Responsive Navbar Live</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-[#00f2fe] bg-clip-text text-transparent">
              Dhinesh
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Navbar is now active with smooth scrolling, frosted glassmorphism, and responsive mobile navigation.
          </p>
        </div>
      </section>

      {/* Section 2: About Me (Pure White in Light, Deep Navy in Dark) */}
      <section
        id="about"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-24 text-center bg-white dark:bg-[#0c1424]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] dark:text-[#00f2fe] bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60">
            About Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">About Me</h2>
          <p className="text-sm text-[var(--muted)]">Background: Pure White (#FFFFFF) / Deep Navy (#0C1424)</p>
        </div>
      </section>

      {/* Section 3: Skills (Soft Slate Mist in Light, Deep Void in Dark) */}
      <section
        id="skills"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-24 text-center bg-[#f1f5f9] dark:bg-[#070e1b]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] dark:text-[#00f2fe] bg-slate-200/60 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700">
            Skills Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Skills &amp; Tech Stack</h2>
          <p className="text-sm text-[var(--muted)]">Background: Soft Slate Mist (#F1F5F9) / Deep Void (#070E1B)</p>
        </div>
      </section>

      {/* Section 4: Projects (Pure White in Light, Deep Navy in Dark) */}
      <section
        id="projects"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-24 text-center bg-white dark:bg-[#0c1424]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] dark:text-[#00f2fe] bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60">
            Projects Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="text-sm text-[var(--muted)]">Background: Pure White (#FFFFFF) / Deep Navy (#0C1424)</p>
        </div>
      </section>

      {/* Section 5: Certificates (Ice Blue Tint in Light, Royal Slate in Dark) */}
      <section
        id="certificates"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-24 text-center bg-[#eef6ff] dark:bg-[#0a1528]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] dark:text-[#00f2fe] bg-sky-100/70 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
            Certificates Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Certificates &amp; Achievements</h2>
          <p className="text-sm text-[var(--muted)]">Background: Ice Blue Wash (#EEF6FF) / Royal Slate (#0A1528)</p>
        </div>
      </section>

      {/* Section 6: Contact (Ice White in Light, Midnight Obsidian in Dark) */}
      <section
        id="contact"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-24 text-center bg-[#f8fafc] dark:bg-[#050b14]"
      >
        <div className="max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0070f3] dark:text-[#00f2fe] bg-slate-100 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700">
            Contact Section
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Get In Touch</h2>
          <p className="text-sm text-[var(--muted)]">Background: Ice White (#F8FAFC) / Midnight Obsidian (#050B14)</p>
        </div>
      </section>
    </div>
  );
}
