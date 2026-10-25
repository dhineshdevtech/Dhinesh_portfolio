"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import CompactVideoShowcase from "@/components/CompactVideoShowcase";
import {
  CategoryKey,
  CATEGORIES_DATA,
  PROJECTS_DATA,
  CATEGORY_PROJECT_SLUGS,
  ProjectDetail,
} from "@/data/projectsData";

const CATEGORIES_LIST = Object.values(CATEGORIES_DATA);

// Category icons helper
function getCategoryIcon(key: CategoryKey, cls = "w-5 h-5") {
  switch (key) {
    case "mobile":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01" />
        </svg>
      );
    case "websites":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
        </svg>
      );
    case "business":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-5 4h18" />
        </svg>
      );
    case "ai-videos":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
  }
}

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category")?.toLowerCase() as CategoryKey | undefined;
  const projectParam = searchParams.get("project") || undefined;

  // Resolve active category
  const activeCategory: CategoryKey | null =
    categoryParam && ["mobile", "websites", "business", "ai-videos"].includes(categoryParam)
      ? categoryParam
      : null;

  const currentCategoryData = activeCategory ? CATEGORIES_DATA[activeCategory] : null;

  // Resolve active project
  const activeProject: ProjectDetail | null =
    projectParam && PROJECTS_DATA[projectParam]
      ? PROJECTS_DATA[projectParam]
      : null;

  // Navigation handlers
  const navigateToCategory = (catKey: CategoryKey) => {
    router.push(`/projects?category=${catKey}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProject = (projectSlug: string) => {
    const proj = PROJECTS_DATA[projectSlug];
    if (proj) {
      router.push(`/projects?category=${proj.categoryKey}&project=${projectSlug}`);
    } else if (activeCategory) {
      router.push(`/projects?category=${activeCategory}&project=${projectSlug}`);
    } else {
      router.push(`/projects?project=${projectSlug}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCollections = () => {
    router.push("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get project count for category
  const getProjectCount = (key: CategoryKey) => {
    return CATEGORY_PROJECT_SLUGS[key]?.length || 0;
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#0066ff]/20 selection:text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main id="main-content" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden flex-1">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">

          {/* ========================================================================= */}
          {/* VIEW 1: PROJECT DETAILS CASE STUDY                                        */}
          {/* ========================================================================= */}
          {activeProject && (
            <div className="space-y-8 sm:space-y-10">
              {/* Breadcrumb Navigation */}
              <FadeUp delay={0} duration={500}>
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                  <button
                    type="button"
                    onClick={navigateToCollections}
                    className="hover:text-[#0066ff] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs"
                  >
                    All Collections
                  </button>
                  <span aria-hidden="true">/</span>
                  <button
                    type="button"
                    onClick={() => navigateToCategory(activeProject.categoryKey)}
                    className="hover:text-[#0066ff] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs"
                  >
                    {CATEGORIES_DATA[activeProject.categoryKey].title}
                  </button>
                  <span aria-hidden="true">/</span>
                  <span className="text-slate-900 font-bold truncate max-w-[240px]">
                    {activeProject.title}
                  </span>
                </nav>
              </FadeUp>

              {/* Title & Tagline */}
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <FadeUp delay={60} duration={600}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border border-blue-200 bg-blue-50/50 shadow-2xs mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
                    <span className="text-[#0066ff] uppercase tracking-wider text-[11px]">
                      {CATEGORIES_DATA[activeProject.categoryKey].title} • {activeProject.details.type}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {activeProject.title}
                  </h1>
                </FadeUp>

                <FadeUp delay={120} duration={650}>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {activeProject.tagline}
                  </p>
                </FadeUp>
              </div>

              {/* Custom Compact Video Showcase for Video Projects (Clean Reel Player: No 3-Dots, No Fullscreen, No Volume Popup) */}
              {activeProject.videoUrl && (
                <FadeUp delay={150} duration={700}>
                  <CompactVideoShowcase
                    videoUrl={activeProject.videoUrl}
                    title="Commercial Video"
                    subtitle="9:16 Reel"
                  />
                </FadeUp>
              )}

              {/* SECTION: Project Details Specs Box */}
              <FadeUp delay={180} duration={700}>
                <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight text-center">
                    Project Specifications
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1">
                    <div>
                      <span className="block text-[11px] font-mono font-bold text-[#0066ff] uppercase tracking-wider">
                        Type
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.type}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono font-bold text-[#0066ff] uppercase tracking-wider">
                        Duration
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.duration}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono font-bold text-[#0066ff] uppercase tracking-wider">
                        Role
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.role}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono font-bold text-[#0066ff] uppercase tracking-wider">
                        Status
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.status}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono font-bold text-[#0066ff] uppercase tracking-wider">
                        Context / Client
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-1">
                        {activeProject.details.clientOrContext}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono font-bold text-[#0066ff] uppercase tracking-wider">
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
                <div className="space-y-4 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Project Overview
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        The Problem
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {activeProject.overview.challenge}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="text-xs font-mono font-bold text-[#0066ff] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
                        The Engineering Solution
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {activeProject.overview.solution}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
                <div className="space-y-4 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Core Features
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProject.coreFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 text-[#0066ff] font-bold text-xs flex items-center justify-center flex-shrink-0">
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

              {/* SECTION: Project Gallery (Shown only for projects with gallery images and not video-only showcases) */}
              {activeProject.gallery && activeProject.gallery.length > 0 && !activeProject.videoUrl && (
                <FadeUp delay={300} duration={700}>
                  <div className="space-y-4 pt-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Project Gallery
                    </h2>

                    <div
                      className={`grid gap-5 ${
                        activeProject.gallery.length === 1
                          ? "grid-cols-1 max-w-3xl mx-auto"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {activeProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-[#0066ff] transition-colors flex flex-col justify-between"
                        >
                          <div className="relative w-full aspect-video sm:aspect-[16/10] bg-slate-50 flex items-center justify-center overflow-hidden">
                            <Image
                              src={img.url}
                              alt={img.alt}
                              width={1400}
                              height={950}
                              className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                              priority={idx === 0}
                            />
                          </div>
                          <div className="p-3 bg-white border-t border-slate-100">
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* SECTION: Technologies & Skills Used */}
              <FadeUp delay={340} duration={700}>
                <div className="space-y-4 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Technologies &amp; Skills Used
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeProject.skillsUsed.map((group, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                      >
                        <h3 className="text-xs font-mono font-bold text-[#0066ff] uppercase tracking-wider">
                          {group.group}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
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

              {/* SECTION: Action Links Bar & Bottom Navigation */}
              <FadeUp delay={380} duration={700}>
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {activeProject.links.playStore && (
                      <a
                        href={activeProject.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer"
                      >
                        Live System Demo ↗
                      </a>
                    )}

                    {activeProject.links.githubUrl && (
                      <a
                        href={activeProject.links.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

                  {/* Back to Category Button */}
                  <button
                    type="button"
                    onClick={() => navigateToCategory(activeProject.categoryKey)}
                    className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0066ff] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs"
                  >
                    ← Back to {CATEGORIES_DATA[activeProject.categoryKey].title}
                  </button>
                </div>
              </FadeUp>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW 2: MAIN SECTION DIRECT PROPER CARDS (No Subsections!)                */}
          {/* ========================================================================= */}
          {!activeProject && activeCategory && currentCategoryData && (
            <div className="space-y-8 sm:space-y-10">
              {/* Top Navigation & Category Filter Tabs */}
              <FadeUp delay={0} duration={500}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
                  <button
                    type="button"
                    onClick={navigateToCollections}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#0066ff] transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span>
                    <span>All Collections</span>
                  </button>

                  {/* Quick Switcher Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={navigateToCollections}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      All
                    </button>
                    {CATEGORIES_LIST.map((cat) => {
                      const isSelected = cat.key === activeCategory;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => navigateToCategory(cat.key)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] ${
                            isSelected
                              ? "bg-[#0066ff] text-white shadow-xs"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <span>{cat.title}</span>
                          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? "bg-white/20 text-white" : "bg-white text-slate-600"}`}>
                            {getProjectCount(cat.key)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>

              {/* Main Section Header */}
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <FadeUp delay={60} duration={600}>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0066ff] flex items-center justify-center">
                      {getCategoryIcon(activeCategory, "w-5 h-5")}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {currentCategoryData.title}
                    </h1>
                  </div>
                </FadeUp>

                <FadeUp delay={120} duration={650}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {currentCategoryData.description}
                  </p>
                </FadeUp>

                {/* Pitch Callout */}
                <FadeUp delay={180} duration={700}>
                  <div className="inline-block p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-700 font-medium">
                    {currentCategoryData.pitch}{" "}
                    <Link
                      href="/contact"
                      className="text-[#0066ff] font-bold hover:underline ml-1 inline-flex items-center gap-1"
                    >
                      {currentCategoryData.pitchCta} →
                    </Link>
                  </div>
                </FadeUp>
              </div>

              {/* DIRECT PROPER PROJECT CARDS GRID (No subsections!) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {(CATEGORY_PROJECT_SLUGS[activeCategory] || []).map((slug, idx) => {
                  const proj = PROJECTS_DATA[slug];
                  if (!proj) return null;

                  return (
                    <FadeUp key={slug} delay={idx * 80} duration={600}>
                      <article className="group relative flex flex-col h-full rounded-2xl bg-white border border-slate-200 hover:border-[#0066ff] shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 overflow-hidden">
                        {/* Thumbnail Viewport (Direct link to project details) */}
                        <div
                          onClick={() => navigateToProject(slug)}
                          className="relative aspect-video sm:aspect-[16/10] w-full bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-200 cursor-pointer"
                        >
                          {proj.videoUrl ? (
                            <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                              <video
                                src={proj.videoUrl}
                                playsInline
                                muted
                                loop
                                autoPlay
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : (
                            <Image
                              src={proj.thumbnail}
                              alt={proj.title}
                              width={700}
                              height={450}
                              className="w-full h-full object-contain p-2 sm:p-3 group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          )}

                          {/* Top Tag Badges */}
                          <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white text-slate-800 border border-slate-200 shadow-xs">
                              {currentCategoryData.title}
                            </span>
                            {proj.badge && (
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold shadow-2xs ${proj.badgeColor || "bg-blue-50 text-[#0066ff] border border-blue-200"}`}>
                                {proj.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Info & Meta */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <button
                              type="button"
                              onClick={() => navigateToProject(slug)}
                              className="text-left w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs cursor-pointer"
                            >
                              <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0066ff] transition-colors tracking-tight">
                                {proj.title}
                              </h2>
                            </button>

                            <span className="block text-xs font-mono font-bold text-[#0066ff]">
                              {proj.details.type}
                            </span>

                            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2">
                              {proj.tagline}
                            </p>
                          </div>

                          {/* Architecture & Role Specs */}
                          <div className="pt-2 pb-1 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500 font-mono">
                            <div>
                              <span className="text-slate-400 block">ROLE:</span>
                              <span className="text-slate-700 font-semibold truncate block">{proj.details.role}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block">STATUS:</span>
                              <span className="text-slate-700 font-semibold truncate block">{proj.details.status}</span>
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5">
                            {(proj.skillsUsed?.[0]?.skills || ["React", "TypeScript", "Tailwind"]).slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Card Action Footer */}
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => navigateToProject(slug)}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066ff] hover:text-[#0052cc] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs"
                            >
                              <span>Explore Project Details</span>
                              <span aria-hidden="true">→</span>
                            </button>

                            {proj.links.playStore && (
                              <a
                                href={proj.links.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                              >
                                <span>Play Store ↗</span>
                              </a>
                            )}

                            {proj.links.liveUrl && !proj.links.playStore && (
                              <a
                                href={proj.links.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-50 text-[#0066ff] border border-blue-200 hover:bg-blue-100 transition-colors"
                              >
                                <span>Live Demo ↗</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW 3: ALL COLLECTIONS HUB (What I Build)                                */}
          {/* ========================================================================= */}
          {!activeCategory && !activeProject && (
            <div className="space-y-8 sm:space-y-10">
              {/* Main Heading */}
              <div className="text-center space-y-3 max-w-2xl mx-auto pt-2">
                <FadeUp delay={40} duration={600}>
                  <div className="font-mono text-xs font-bold tracking-wider uppercase text-[#0066ff]">
                    ENGINEERING DIRECTORY
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    What I Build
                  </h1>
                </FadeUp>

                <FadeUp delay={100} duration={650}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Select a core engineering discipline below to view production-ready mobile applications, web platforms, and commercial business systems.
                  </p>
                </FadeUp>
              </div>

              {/* Main Category Cards (2x2 Balanced Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-2">
                {CATEGORIES_LIST.map((cat, idx) => (
                  <FadeUp key={cat.key} delay={idx * 100} duration={650}>
                    <button
                      type="button"
                      onClick={() => navigateToCategory(cat.key)}
                      className="w-full text-left p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0066ff] shadow-xs hover:shadow-md transition-[border-color,box-shadow,transform] duration-200 flex flex-col justify-between group cursor-pointer h-full space-y-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
                    >
                      <div className="space-y-4">
                        {/* Icon & Count Pill */}
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#0066ff] flex items-center justify-center group-hover:bg-[#0066ff] group-hover:text-white transition-[background-color,color] duration-200">
                            {getCategoryIcon(cat.key, "w-5 h-5")}
                          </div>

                          <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                            {getProjectCount(cat.key)} {getProjectCount(cat.key) === 1 ? "Project" : "Projects"}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2">
                          <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0066ff] transition-colors tracking-tight">
                            {cat.title}
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      {/* Explore Button */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066ff]">
                        <span>Browse {cat.title}</span>
                        <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                      </div>
                    </button>
                  </FadeUp>
                ))}
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
        <div className="min-h-screen flex items-center justify-center bg-white text-slate-600">
          Loading projects...
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
