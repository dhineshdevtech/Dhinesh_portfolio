import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { PROJECTS_DATA, CATEGORIES_DATA } from "@/data/projectsData";

export function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  const category = CATEGORIES_DATA[project.categoryKey];

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden flex-1">
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#00f2fe]/10 via-[#0070f3]/6 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          {/* Breadcrumb Navigation */}
          <FadeUp delay={0} duration={500}>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
              <Link href="/projects" className="hover:text-[#0070f3] transition-colors">
                All Collections
              </Link>
              <span>/</span>
              <Link
                href={`/projects?category=${project.categoryKey}`}
                className="hover:text-[#0070f3] transition-colors"
              >
                {category.title}
              </Link>
              <span>/</span>
              <Link
                href={`/projects?category=${project.categoryKey}&subcategory=${project.subcategoryKey}`}
                className="hover:text-[#0070f3] transition-colors"
              >
                {project.subcategoryTitle}
              </Link>
              <span>/</span>
              <span className="text-slate-900 truncate max-w-[200px]">
                {project.title}
              </span>
            </div>
          </FadeUp>

          {/* Title & Tagline */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <FadeUp delay={60} duration={600}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-2xs mb-1 border-[#bfd8f6]">
                <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                <span className="text-[#0070f3] uppercase tracking-wider text-[11px]">
                  {project.subcategoryTitle}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>
            </FadeUp>

            <FadeUp delay={120} duration={650}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {project.tagline}
              </p>
            </FadeUp>
          </div>

          {/* Project Details Box */}
          <FadeUp delay={180} duration={700}>
            <div className="rounded-2xl bg-[#fafcff] border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 p-6 sm:p-8 shadow-[0_2px_8px_rgba(15,23,42,0.05),0_14px_36px_rgba(0,112,243,0.09)] space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight text-center">
                Project Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                <div>
                  <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                    Type
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {project.details.type}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                    Duration
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {project.details.duration}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                    Role
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {project.details.role}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                    Status
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {project.details.status}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                    Context / Client
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {project.details.clientOrContext}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                    Architecture
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    {project.details.architecture}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Project Overview */}
          <FadeUp delay={220} duration={700}>
            <div className="space-y-6 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Project Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 shadow-xs hover:border-[#0070f3] transition-all duration-200 space-y-2">
                  <div className="text-xs font-black text-rose-600 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {project.overview.challenge}
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 shadow-xs hover:border-[#0070f3] transition-all duration-200 space-y-2">
                  <div className="text-xs font-black text-[#0070f3] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0070f3]" />
                    The Engineering Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {project.overview.solution}
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 shadow-xs hover:border-[#0070f3] transition-all duration-200 space-y-2">
                  <div className="text-xs font-black text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Real-World Outcome
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {project.overview.impact}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Core Features */}
          <FadeUp delay={260} duration={700}>
            <div className="space-y-6 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Core Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {project.coreFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#fafcff] border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] transition-all duration-200 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#edf4fd] text-[#0070f3] font-black text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Project Gallery */}
          <FadeUp delay={300} duration={700}>
            <div className="space-y-6 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Project Gallery
              </h2>

              <div
                className={`grid gap-6 ${
                  project.gallery.length === 1
                    ? "grid-cols-1 max-w-4xl mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-[#f8fafc] border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.05)] hover:shadow-lg hover:border-[#0070f3] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative w-full aspect-video sm:aspect-[16/10] bg-[#f4f8fe] flex items-center justify-center overflow-hidden">
                      <Image
                        src={img.url}
                        alt={img.alt}
                        width={1400}
                        height={950}
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        priority={idx === 0}
                      />
                    </div>
                    <div className="p-3.5 bg-white border-t-2 border-[#d2e4f8]">
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Technologies & Skills Used */}
          <FadeUp delay={340} duration={700}>
            <div className="space-y-6 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Technologies &amp; Skills Used
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {project.skillsUsed.map((group, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] transition-all duration-200 space-y-3"
                  >
                    <h3 className="text-xs font-bold text-[#0070f3] uppercase tracking-wider">
                      {group.group}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Project Links */}
          <FadeUp delay={380} duration={700}>
            <div className="pt-6 border-t border-[#e2eaf4] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0070f3] hover:bg-[#005cd6] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,112,243,0.3)] transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.096 2.096 0 01-.61-1.488V3.302c0-.58.232-1.118.609-1.488zm11.328 11.331l2.585-2.585-2.585-2.585 3.327 1.921c.882.51.882 1.817 0 2.328l-3.327 1.921zM4.698.814l10.147 10.147-1.147 1.147L3.486 1.896c.321-.571.792-.93 1.212-1.082zm0 22.372c-.42-.152-.891-.511-1.212-1.082L13.698 11.89l1.147 1.147L4.698 23.186z" />
                    </svg>
                    Google Play Store ↗
                  </a>
                )}

                {project.links.liveUrl && (
                  <a
                    href={project.links.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0070f3] hover:bg-[#005cd6] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,112,243,0.3)] transition-all cursor-pointer"
                  >
                    Live System Demo ↗
                  </a>
                )}

                {project.links.githubUrl && (
                  <a
                    href={project.links.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    GitHub Repository ↗
                  </a>
                )}
              </div>

              <Link
                href={`/projects?category=${project.categoryKey}&subcategory=${project.subcategoryKey}`}
                className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#0070f3] transition-colors"
              >
                ← Back to {project.subcategoryTitle}
              </Link>
            </div>
          </FadeUp>
        </div>
      </main>

      <Footer />
    </div>
  );
}
