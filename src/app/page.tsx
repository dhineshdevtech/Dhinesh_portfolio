export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 text-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* Subtle ambient cyan-azure mesh glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#00f2fe]/15 via-[#0070f3]/10 to-transparent blur-3xl opacity-80" />
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Status Pill with Cyan-Azure gradient glow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[var(--surface-border)] bg-[var(--surface)] shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#0070f3] shadow-[0_0_8px_rgba(0,242,254,0.6)] animate-pulse" />
          <span className="text-[var(--foreground)]">Theme: Ice White &amp; Cyber Azure</span>
        </div>

        {/* Headline with gradient accent */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">
          Dhinesh&apos;s{" "}
          <span className="bg-gradient-to-r from-[#0070f3] to-[#00f2fe] bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
          Crafted with Next.js, TypeScript, and a high-contrast Ice White canvas with vibrant Cyber Azure accents.
        </p>

        {/* Gradient Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_4px_14px_rgba(0,112,243,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Projects
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-sm font-semibold border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-slate-100 dark:hover:bg-slate-800/60 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </main>
  );
}
