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
        className="relative flex min-h-[90vh] flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden"
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

      {/* Section Placeholders for Navbar Smooth Scrolling Demonstration */}
      <section
        id="about"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[var(--surface-border)] px-6 py-20 text-center"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070f3] mb-2">Section</span>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-sm text-[var(--muted)] mt-2">Ready to be built in the next step.</p>
      </section>

      <section
        id="skills"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[var(--surface-border)] px-6 py-20 text-center bg-slate-100/40 dark:bg-slate-900/40"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070f3] mb-2">Section</span>
        <h2 className="text-3xl font-bold">Skills &amp; Tech Stack</h2>
        <p className="text-sm text-[var(--muted)] mt-2">Ready to be built in the next step.</p>
      </section>

      <section
        id="projects"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[var(--surface-border)] px-6 py-20 text-center"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070f3] mb-2">Section</span>
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-sm text-[var(--muted)] mt-2">Ready to be built in the next step.</p>
      </section>

      <section
        id="certificates"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[var(--surface-border)] px-6 py-20 text-center bg-slate-100/40 dark:bg-slate-900/40"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070f3] mb-2">Section</span>
        <h2 className="text-3xl font-bold">Certificates &amp; Achievements</h2>
        <p className="text-sm text-[var(--muted)] mt-2">Ready to be built in the next step.</p>
      </section>

      <section
        id="contact"
        className="min-h-[50vh] flex flex-col items-center justify-center border-t border-[var(--surface-border)] px-6 py-20 text-center"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070f3] mb-2">Section</span>
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-sm text-[var(--muted)] mt-2">Ready to be built in the next step.</p>
      </section>
    </div>
  );
}
