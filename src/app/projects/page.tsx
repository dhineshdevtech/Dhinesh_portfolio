"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import {
  CategoryKey,
  CATEGORIES_DATA,
  PROJECTS_DATA,
  ProjectDetail,
} from "@/data/projectsData";

const CATEGORIES_LIST = Object.values(CATEGORIES_DATA);

// Category icons helper
function getCategoryIcon(key: CategoryKey, cls = "w-5 h-5") {
  switch (key) {
    case "mobile":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01" />
        </svg>
      );
    case "websites":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
        </svg>
      );
    case "business":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-5 4h18" />
        </svg>
      );
  }
}

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category")?.toLowerCase() as CategoryKey | undefined;
  const subcategoryParam = searchParams.get("subcategory") || undefined;
  const projectParam = searchParams.get("project") || undefined;

  // Resolve current active node in hierarchy
  const activeCategory =
    categoryParam && ["mobile", "websites", "business"].includes(categoryParam)
      ? categoryParam
      : null;

  const currentCategoryData = activeCategory ? CATEGORIES_DATA[activeCategory] : null;

  const activeSubcategory =
    currentCategoryData && subcategoryParam
      ? currentCategoryData.subcategories.find((s) => s.key === subcategoryParam) || null
      : null;

  const activeProject: ProjectDetail | null =
    projectParam && PROJECTS_DATA[projectParam]
      ? PROJECTS_DATA[projectParam]
      : null;

  // Navigation handlers
  const navigateToCategory = (catKey: CategoryKey) => {
    router.push(`/projects?category=${catKey}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSubcategory = (catKey: CategoryKey, subKey: string) => {
    router.push(`/projects?category=${catKey}&subcategory=${subKey}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProject = (projectSlug: string) => {
    if (activeCategory && activeSubcategory) {
      router.push(
        `/projects?category=${activeCategory}&subcategory=${activeSubcategory.key}&project=${projectSlug}`
      );
    } else {
      const proj = PROJECTS_DATA[projectSlug];
      if (proj) {
        router.push(
          `/projects?category=${proj.categoryKey}&subcategory=${proj.subcategoryKey}&project=${projectSlug}`
        );
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCollections = () => {
    router.push("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden flex-1">
        {/* Apple-style gradient section boundary line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

        {/* Ambient background glows */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#00f2fe]/10 via-[#0070f3]/6 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-[#0070f3]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto">
          {/* ========================================================================= */}
          {/* LEVEL 4: PROJECT DETAILS CASE STUDY (If a project is selected)             */}
          {/* ========================================================================= */}
          {activeProject && (
            <div className="space-y-8 sm:space-y-10">
              {/* Breadcrumb Navigation */}
              <FadeUp delay={0} duration={500}>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                  <button
                    type="button"
                    onClick={navigateToCollections}
                    className="hover:text-[#0070f3] transition-colors cursor-pointer"
                  >
                    All Collections
                  </button>
                  <span>/</span>
                  <button
                    type="button"
                    onClick={() => navigateToCategory(activeProject.categoryKey)}
                    className="hover:text-[#0070f3] transition-colors cursor-pointer"
                  >
                    {CATEGORIES_DATA[activeProject.categoryKey].title}
                  </button>
                  <span>/</span>
                  <button
                    type="button"
                    onClick={() =>
                      navigateToSubcategory(
                        activeProject.categoryKey,
                        activeProject.subcategoryKey
                      )
                    }
                    className="hover:text-[#0070f3] transition-colors cursor-pointer"
                  >
                    {activeProject.subcategoryTitle}
                  </button>
                  <span>/</span>
                  <span className="text-slate-900 truncate max-w-[200px]">
                    {activeProject.title}
                  </span>
                </div>
              </FadeUp>

              {/* Title & Tagline */}
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <FadeUp delay={60} duration={600}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-2xs mb-1" style={{ borderColor: "#bfd8f6" }}>
                    <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                    <span className="text-[#0070f3] uppercase tracking-wider text-[11px]">
                      {activeProject.subcategoryTitle}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    {activeProject.title}
                  </h1>
                </FadeUp>

                <FadeUp delay={120} duration={650}>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {activeProject.tagline}
                  </p>
                </FadeUp>
              </div>

              {/* SECTION: Project Details Box (Matching Home Page Signature Styling) */}
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
                        {activeProject.details.type}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                        Duration
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.duration}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                        Role
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.role}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                        Status
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.status}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                        Context / Client
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.clientOrContext}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-extrabold text-[#0070f3] uppercase tracking-wider">
                        Architecture
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.architecture}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* SECTION: Project Overview */}
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
                        {activeProject.overview.challenge}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 shadow-xs hover:border-[#0070f3] transition-all duration-200 space-y-2">
                      <div className="text-xs font-black text-[#0070f3] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0070f3]" />
                        The Engineering Solution
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {activeProject.overview.solution}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 shadow-xs hover:border-[#0070f3] transition-all duration-200 space-y-2">
                      <div className="text-xs font-black text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Real-World Outcome
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {activeProject.overview.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* SECTION: Core Features */}
              <FadeUp delay={260} duration={700}>
                <div className="space-y-6 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Core Features
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {activeProject.coreFeatures.map((feat, idx) => (
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

              {/* SECTION: Project Gallery */}
              <FadeUp delay={300} duration={700}>
                <div className="space-y-6 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Project Gallery
                  </h2>

                  <div
                    className={`grid gap-6 ${
                      activeProject.gallery.length === 1
                        ? "grid-cols-1 max-w-4xl mx-auto"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {activeProject.gallery.map((img, idx) => (
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

              {/* SECTION: Technologies & Skills Used */}
              <FadeUp delay={340} duration={700}>
                <div className="space-y-6 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Technologies &amp; Skills Used
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeProject.skillsUsed.map((group, idx) => (
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

              {/* SECTION: Project Links */}
              <FadeUp delay={380} duration={700}>
                <div className="pt-6 border-t border-[#e2eaf4] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {activeProject.links.playStore && (
                      <a
                        href={activeProject.links.playStore}
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

                    {activeProject.links.liveUrl && (
                      <a
                        href={activeProject.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0070f3] hover:bg-[#005cd6] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,112,243,0.3)] transition-all cursor-pointer"
                      >
                        Live System Demo ↗
                      </a>
                    )}

                    {activeProject.links.githubUrl && (
                      <a
                        href={activeProject.links.githubUrl}
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

                  <button
                    type="button"
                    onClick={() =>
                      navigateToSubcategory(
                        activeProject.categoryKey,
                        activeProject.subcategoryKey
                      )
                    }
                    className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#0070f3] transition-colors cursor-pointer"
                  >
                    ← Back to {activeProject.subcategoryTitle}
                  </button>
                </div>
              </FadeUp>
            </div>
          )}

          {/* ========================================================================= */}
          {/* LEVEL 3: SUBCATEGORY PROJECTS GRID (Matching Screenshot 3)                */}
          {/* ========================================================================= */}
          {!activeProject && activeCategory && activeSubcategory && (
            <div className="space-y-8 sm:space-y-10">
              {/* Back to Category Button */}
              <FadeUp delay={0} duration={500}>
                <div>
                  <button
                    type="button"
                    onClick={() => navigateToCategory(activeCategory)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#0070f3] transition-colors group cursor-pointer"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    {currentCategoryData?.title}
                  </button>
                </div>
              </FadeUp>

              {/* Subcategory Header */}
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <FadeUp delay={60} duration={600}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                    {activeSubcategory.title}
                  </h1>
                </FadeUp>

                <FadeUp delay={120} duration={650}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeSubcategory.description}
                  </p>
                </FadeUp>
              </div>

              {/* Grid of Projects (Matching Screenshot 3: Victory Arena / YUMMEZ style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {activeSubcategory.projectSlugs.map((slug, idx) => {
                  const proj = PROJECTS_DATA[slug];
                  if (!proj) return null;

                  return (
                    <FadeUp key={slug} delay={idx * 100} duration={700}>
                      <button
                        type="button"
                        onClick={() => navigateToProject(slug)}
                        className="w-full text-left rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] shadow-[0_2px_8px_rgba(15,23,42,0.05),0_14px_36px_rgba(0,112,243,0.09)] hover:shadow-[0_4px_14px_rgba(15,23,42,0.08),0_24px_50px_rgba(0,112,243,0.18)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group cursor-pointer flex flex-col"
                      >
                        {/* Thumbnail Viewport */}
                        <div className="relative aspect-video sm:aspect-[16/10] w-full bg-[#f4f8fe] flex items-center justify-center overflow-hidden border-b-2 border-[#d2e4f8]">
                          <Image
                            src={proj.thumbnail}
                            alt={proj.title}
                            width={700}
                            height={450}
                            className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                          />

                          <div className="absolute top-3 left-3 z-10">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-slate-700 border border-slate-200 backdrop-blur-sm">
                              {activeSubcategory.title}
                            </span>
                          </div>
                        </div>

                        {/* Card Info */}
                        <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors tracking-tight">
                              {proj.title}
                            </h3>
                            <span className="block text-xs font-semibold text-[#0070f3] mt-1">
                              {proj.details.type}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-2 line-clamp-2 leading-relaxed">
                              {proj.tagline}
                            </p>
                          </div>

                          <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#0070f3]">
                            <span>Explore Case Study</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </button>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* LEVEL 2: SUBCATEGORY LIST (Matching Screenshot 1 & 2)                      */}
          {/* ========================================================================= */}
          {!activeProject && activeCategory && !activeSubcategory && currentCategoryData && (
            <div className="space-y-8 sm:space-y-10">
              {/* Back to All Collections Button (Matching Screenshot 1) */}
              <FadeUp delay={0} duration={500}>
                <div>
                  <button
                    type="button"
                    onClick={navigateToCollections}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#0070f3] transition-colors group cursor-pointer"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    All Collections
                  </button>
                </div>
              </FadeUp>

              {/* Category Header & Pitch Banner (Matching Screenshot 1) */}
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <FadeUp delay={60} duration={600}>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4fd] border border-[#d8e6f8] text-[#0070f3] flex items-center justify-center">
                      {getCategoryIcon(activeCategory, "w-5 h-5")}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                      {currentCategoryData.title}
                    </h1>
                  </div>
                </FadeUp>

                <FadeUp delay={120} duration={650}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {currentCategoryData.description}
                  </p>
                </FadeUp>

                {/* Pitch Banner from Inspiration */}
                <FadeUp delay={180} duration={700}>
                  <div className="inline-block p-3 sm:p-3.5 rounded-xl bg-[#f0f6fe] border border-[#bfd8f6] text-xs sm:text-[13px] text-slate-700 font-medium">
                    {currentCategoryData.pitch}{" "}
                    <Link
                      href="/contact"
                      className="text-[#0070f3] font-bold hover:underline ml-1 inline-flex items-center gap-1"
                    >
                      {currentCategoryData.pitchCta} →
                    </Link>
                  </div>
                </FadeUp>
              </div>

              {/* List of Sub-Category Rows (Matching Screenshot 1 & 2) */}
              <div className="space-y-3 pt-4">
                {currentCategoryData.subcategories.map((sub, idx) => (
                  <FadeUp key={sub.key} delay={idx * 70} duration={650}>
                    <button
                      type="button"
                      onClick={() => navigateToSubcategory(activeCategory, sub.key)}
                      className="w-full text-left p-5 sm:p-6 rounded-2xl bg-white hover:bg-[#fafcff] border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] shadow-[0_2px_8px_rgba(15,23,42,0.05),0_14px_36px_rgba(0,112,243,0.09)] hover:shadow-[0_4px_14px_rgba(15,23,42,0.08),0_24px_50px_rgba(0,112,243,0.18)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors tracking-tight">
                          {sub.title}
                        </h2>
                        <span className="block text-xs text-slate-500 font-normal">
                          {sub.projectCount} {sub.projectCount === 1 ? "project" : "projects"}
                        </span>
                      </div>

                      <div className="text-slate-400 group-hover:text-[#0070f3] group-hover:translate-x-1 transition-all">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  </FadeUp>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* LEVEL 1: ALL COLLECTIONS HUB ("What I Build") - Nothing shown below!       */}
          {/* ========================================================================= */}
          {!activeCategory && !activeProject && (
            <div className="space-y-8 sm:space-y-10">
              {/* Heading matching user inspiration */}
              <div className="text-center space-y-4 max-w-2xl mx-auto pt-4 sm:pt-6">
                <FadeUp delay={0} duration={600}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                    What I{" "}
                    <span className="bg-gradient-to-r from-[#0070f3] via-[#00a6ff] to-[#00c2ff] bg-clip-text text-transparent">
                      Build
                    </span>
                  </h1>
                </FadeUp>

                <FadeUp delay={80} duration={700}>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    Explore the kinds of digital products and software systems I build for real-world needs.
                  </p>
                </FadeUp>
              </div>

              {/* The 4 Category Cards in 2x2 Grid */}
              <FadeUp delay={160} duration={750}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {CATEGORIES_LIST.map((cat) => {
                    const totalProjects = cat.subcategories.reduce(
                      (acc, s) => acc + s.projectCount,
                      0
                    );

                    return (
                      <button
                        key={cat.key}
                        type="button"
                        onClick={() => navigateToCategory(cat.key)}
                        className="group relative text-left p-6 sm:p-7 rounded-2xl bg-white hover:bg-[#fafcff] border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] shadow-[0_2px_8px_rgba(15,23,42,0.05),0_14px_36px_rgba(0,112,243,0.09)] hover:shadow-[0_4px_14px_rgba(15,23,42,0.08),0_24px_50px_rgba(0,112,243,0.18)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                      >
                        <div className="flex items-start gap-4">
                          {/* Monochromatic SVG Icon */}
                          <div className="w-12 h-12 rounded-xl bg-[#edf4fd] border border-[#d8e6f8] text-[#0070f3] group-hover:bg-[#0070f3] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-2xs">
                            {getCategoryIcon(cat.key, "w-5 h-5")}
                          </div>

                          {/* Text Content */}
                          <div className="flex-1 min-w-0 pr-6">
                            <div className="flex items-center gap-2.5">
                              <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors tracking-tight">
                                {cat.title}
                              </h3>
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                                {totalProjects} {totalProjects === 1 ? "project" : "projects"}
                              </span>
                            </div>
                            <p className="text-[13.5px] sm:text-sm text-slate-600 font-normal mt-1.5 leading-relaxed">
                              {cat.description}
                            </p>
                          </div>

                          {/* Right Chevron Arrow */}
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#0070f3] group-hover:translate-x-1 transition-all">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </FadeUp>

              {/* Clean bottom spacer - Nothing below */}
              <div className="pt-8 text-center">
                <p className="text-xs text-slate-400 font-medium">
                  Click any category above to view dedicated sub-collections &amp; production case studies.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#0070f3] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
