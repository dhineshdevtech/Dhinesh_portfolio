export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 text-center bg-[var(--background)] text-[var(--foreground)]">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Status Pill with Dev Cobalt accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[var(--surface-border)] bg-[var(--surface)] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          <span className="text-[var(--foreground)]">Theme Active: Midnight Engineer</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">
          Dhinesh&apos;s Portfolio
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
          Crafted with Next.js, TypeScript, and a refined Midnight Blue &amp; Ice Slate color scheme.
        </p>

        {/* Action Button Preview */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] transition-colors shadow-xs"
          >
            Explore Projects
          </button>
          <button
            type="button"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}
