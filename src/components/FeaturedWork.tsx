"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryKey, TOTAL_PROJECTS_COUNT } from "@/data/projectsData";

interface FeaturedProject {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  backdropBg: string;
  badgeBg: string;
  badgeLabel?: string;
  liveUrl?: string;
  githubUrl?: string;
  type: "mpnmjec" | "6ixquest" | "bubbleworks" | "canteen";
  categories: CategoryKey[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "mpnmjec-buses",
    slug: "mpnmjec-bus-tracker",
    category: "CAMPUS TRANSIT • MOBILE & WEB",
    title: "MPNMJEC Bus Tracking Platform",
    description:
      "A zero-hardware college transport ecosystem connecting a live Flutter student app, driver telemetry console, and React command center with WebSocket real-time fleet GPS tracking.",
    tags: ["Flutter", "Dart", "Node.js", "WebSockets", "Leaflet", "Supabase", "OSRM"],
    backdropBg: "from-sky-100/70 via-[#f0f6fe] to-blue-50/60 border-sky-200/70",
    badgeBg: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    badgeLabel: "🏆 Live on Google Play Store",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sixmindslabs.mpnmjecbustracker.student",
    githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    type: "mpnmjec",
    categories: ["mobile", "websites"],
  },
  {
    id: "quizforge-ai",
    slug: "quizforge-ai",
    category: "EDUTECH • AI PLATFORM",
    title: "QuizForge",
    description:
      "AI-powered assessment & anti-cheating examination platform generating syllabus-aligned tests in 5–15s via Groq LPU AI, featuring strict client-side proctoring, Firebase, and live CSV analytics.",
    tags: ["React 18", "TypeScript", "Groq LPU AI", "Cloud Firestore", "Firebase Auth"],
    backdropBg: "from-blue-100/60 via-[#f0f6fe] to-indigo-50/60 border-blue-200/70",
    badgeBg: "bg-blue-50 text-[#0066ff] border border-blue-200",
    badgeLabel: "⚡ Groq LPU AI + Firebase",
    liveUrl: "https://quizforge-live.vercel.app",
    githubUrl: "https://github.com/dhineshdevtech/quizforge",
    type: "6ixquest",
    categories: ["websites"],
  },
  {
    id: "bubbleworks-pos",
    slug: "bubbleworks-pos",
    category: "COMMERCIAL POS • CLOUD LAUNDRY",
    title: "Bubbleworks POS – Cloud Laundry Management",
    description:
      "Enterprise point-of-sale and operations management platform featuring multi-branch franchise architecture, 80mm & 58mm ESC/POS thermal printing, and Firebase Cloud Firestore sync.",
    tags: ["React 18", "Firebase Firestore", "Web Bluetooth", "Recharts", "Tailwind CSS"],
    backdropBg: "from-teal-100/60 via-[#f0fdfa] to-emerald-50/60 border-teal-200/70",
    badgeBg: "bg-teal-50 text-teal-800 border border-teal-200",
    badgeLabel: "🧺 80mm/58mm Bluetooth Thermal Print",
    liveUrl: "https://bubbleworkspos-live.vercel.app",
    githubUrl: "https://github.com/dhineshdevtech/bubbleworkspos-live",
    type: "bubbleworks",
    categories: ["business"],
  },
];

function ProjectVisualPreview({ type }: { type: FeaturedProject["type"] }) {
  if (type === "mpnmjec") {
    return (
      <div className="relative w-full h-full select-none">
        <Image
          src="/projects/mpnmjec/mpnmjec_showcase_light.webp"
          alt="MPNMJEC Bus Tracking Ecosystem - Combined Multi-App Showcase"
          fill
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    );
  }

  if (type === "6ixquest") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 select-none">
        {/* Main Desktop Screen */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[180px] sm:h-[205px] rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white">
          {/* Browser Header Bar */}
          <div className="h-5 bg-slate-100 px-2.5 flex items-center justify-between border-b border-slate-200">
            <div className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[8px] font-mono font-medium text-slate-500">quizforge-live.vercel.app</span>
            <span className="w-2" />
          </div>
          <div className="relative w-full h-[calc(100%-20px)]">
            <Image
              src="/projects/quizforge/dashboard.webp"
              alt="QuizForge AI Assessment Platform"
              fill
              className="object-cover object-top"
              sizes="400px"
            />
          </div>
        </div>

        {/* Floating Mobile Login Preview */}
        <div className="absolute -bottom-1 right-6 sm:right-10 w-[75px] sm:w-[90px] h-[135px] sm:h-[150px] rounded-xl overflow-hidden border border-slate-300 shadow-lg bg-white z-10 hidden xs:block">
          <Image
            src="/projects/quizforge/login.webp"
            alt="QuizForge Teacher Authentication Screen"
            fill
            className="object-cover object-top"
            sizes="90px"
          />
        </div>
      </div>
    );
  }

  // Bubbleworks Laundry POS (Tablet Mockup)
  return (
    <div className="relative w-full h-full flex items-center justify-center p-3 select-none">
      <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[16/10] rounded-xl overflow-hidden shadow-md group-hover:scale-[1.02] transition-transform duration-300">
        <Image
          src="/projects/bubbleworks/bubbleworks_pos_counter_tab.webp"
          alt="Bubbleworks POS Counter Billing System on Tablet"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 450px"
        />
      </div>

      {/* Floating Thermal Receipt Print Center Snippet */}
      <div className="absolute -bottom-1 right-4 sm:right-8 w-[130px] sm:w-[155px] aspect-[16/10] rounded-xl overflow-hidden border border-slate-300 shadow-lg bg-white z-10 hidden xs:block">
        <Image
          src="/projects/bubbleworks/bubbleworks_print_center_tab.webp"
          alt="Bubbleworks Thermal Receipt Print Center on Tablet"
          fill
          className="object-cover object-center"
          sizes="160px"
        />
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div
          className={`space-y-3 max-w-3xl text-left transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0066ff] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
            <span>SELECTED PRODUCTION WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Real Products, Shipped to Production
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <span className="text-slate-900 font-bold">{TOTAL_PROJECTS_COUNT}+</span> full-stack and mobile applications engineered for production environments — from a live Google Play Store bus tracking system to AI assessment engines and offline-first POS counters.
          </p>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`h-full flex flex-col transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <article className="group relative flex flex-col h-full rounded-2xl bg-white border border-slate-200 hover:border-[#0066ff] shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 overflow-hidden">
                {/* Visual Preview Header (Clickable Link to Case Study) */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200 flex items-center justify-center overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
                  aria-label={`View case study for ${project.title}`}
                >
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
                      {project.category}
                    </span>

                    {project.badgeLabel && (
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-2xs ${project.badgeBg}`}>
                        {project.badgeLabel}
                      </span>
                    )}
                  </div>

                  <ProjectVisualPreview type={project.type} />
                </Link>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 text-left bg-white">
                  <div className="space-y-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/title block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-md"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover/title:text-[#0066ff] transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0066ff] hover:bg-slate-50 transition-[color,background-color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
                    >
                      <span>Read Case Study</span>
                      <span aria-hidden="true">↗</span>
                    </Link>

                    <a
                      href={project.liveUrl || project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#0066ff] hover:bg-[#0052cc] shadow-xs transition-[background-color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
                    >
                      <span>{project.liveUrl ? "Live Demo" : "View Code"}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom CTA to All Projects */}
        <div
          className={`pt-4 flex justify-center transition-all duration-500 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:border-[#0066ff] hover:text-[#0066ff] shadow-xs hover:shadow-sm transition-[border-color,color,box-shadow,transform] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
          >
            <span>Browse Complete Project Directory ({TOTAL_PROJECTS_COUNT})</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
