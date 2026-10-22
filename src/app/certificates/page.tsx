"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { TOTAL_PROJECTS_COUNT } from "@/data/projectsData";

interface CourseCertificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  date: string;
  credentialId: string;
  candidate: string;
  image: string;
  signatory: string;
  description: string;
  skills: string[];
  accreditations: string[];
}

const COURSE_CERTIFICATES: CourseCertificate[] = [
  {
    id: "corizo-web-dev",
    title: "Web Development Course",
    issuer: "Corizo",
    year: "2025",
    date: "05-Jun-25 to 05-Jul-25",
    credentialId: "CRZ103775",
    candidate: "DHINESH V",
    image: "/certificates/corizo-web-development.webp",
    signatory: "Hemant Ingle (Academic Head)",
    description:
      "Successfully completed rigorous training in Web Development. Demonstrated diligence, consistency, determination, active participation, and innovation throughout the training period, mastering modern web interfaces and client-side architecture.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "REST APIs", "Responsive UI"],
    accreditations: ["MSME", "ISO 9001:2015", "Skill India", "NSDC", "#startupindia"],
  },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<CourseCertificate | null>(null);

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main id="main-content" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden">
        

        

        <div className="max-w-6xl mx-auto">
          {/* ========================================================================= */}
          {/* HEADER SECTION: DIRECTLY INSPIRED BY REFERENCE SCREENSHOT                  */}
          {/* ========================================================================= */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-8 sm:mb-10">
            {/* Display Headline */}
            <FadeUp delay={0} duration={600}>
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Certifications &amp;{" "}
                <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
                  Professional Learning
                </span>
              </h1>
            </FadeUp>

            {/* Description Subtitle */}
            <FadeUp delay={80} duration={700}>
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-xl mx-auto">
                A record of technical training and verified course completions — demonstrating foundational and production-grade web engineering skills.
              </p>
            </FadeUp>
          </div>

          {/* ========================================================================= */}
          {/* 4-COLUMN RESPONSIVE CERTIFICATES GRID                                      */}
          {/* Properly sized compact cards: 4 per row on desktop (lg:grid-cols-4)       */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {COURSE_CERTIFICATES.map((cert, index) => (
              <FadeUp key={cert.id} delay={index * 60} duration={600} className="h-full">
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="h-full group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] hover:border-[#0070f3] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Image Preview Frame (Compact, 16:11 Aspect Ratio) */}
                  <div>
                    <div className="relative aspect-[16/11] w-full bg-[#edf5fe] border-b border-[#bfd8f6] overflow-hidden p-2 flex items-center justify-center">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xs group-hover:scale-[1.03] transition-transform duration-300">
                        <Image
                          src={cert.image}
                          alt={`${cert.title} - ${cert.issuer}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          priority
                        />

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 bg-[#0070f3]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-lg bg-white/95 text-[#0070f3] text-xs font-bold shadow-md flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                            <span>Preview</span>
                          </span>
                        </div>
                      </div>

                      {/* Small Corner Badge */}
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0070f3] text-white text-[10px] font-mono font-bold shadow-xs">
                        {cert.year}
                      </span>
                    </div>

                    {/* Compact Card Content */}
                    <div className="p-4 space-y-1.5 text-left">
                      <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors leading-snug tracking-tight line-clamp-2">
                        {cert.title}
                      </h3>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-0.5">
                        <span className="text-[#0070f3] font-bold">{cert.issuer}</span>
                        <span className="font-mono text-[11px] text-slate-400">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Click to View Action */}
                  <div className="px-4 py-2.5 bg-white/60 border-t border-[#edf4fd] flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span>Verified Credential</span>
                    <span className="text-[#0070f3] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>View</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM NAVIGATION: EXPLORE RESUME OR PROJECTS                             */}
          {/* ========================================================================= */}
          <FadeUp delay={100}>
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#d8e6f7] text-center space-y-4">
              <div className="space-y-1.5 max-w-xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interested in my complete background?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Explore my full resume or check out production applications.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0070f3] to-[#00c2ff] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>View Resume</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-[#bfd8f6] text-slate-800 font-semibold text-xs sm:text-sm hover:border-[#0070f3] hover:text-[#0070f3] transition-all shadow-xs"
                >
                  <span>Explore {TOTAL_PROJECTS_COUNT} Projects</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* INTERACTIVE FULL-SCREEN LIGHTBOX MODAL                                     */}
      {/* ========================================================================= */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Frosted Dim Backdrop */}
          <div
            onClick={() => setSelectedCert(null)}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border-2 border-[#bfd8f6] shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2ecf8] bg-[#f8fbfe] sticky top-0 z-20">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {selectedCert.title} — {selectedCert.issuer} (ID: {selectedCert.credentialId})
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close certificate modal"
              >
                ✕
              </button>
            </div>

            {/* Modal High-Res Certificate View */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="relative w-full aspect-[1024/723] rounded-2xl overflow-hidden border-2 border-[#bfd8f6] shadow-md bg-white">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1024px"
                  priority
                />
              </div>

              {/* Certificate Verification Meta Details */}
              <div className="rounded-2xl bg-[#f8fbfe] border border-[#bfd8f6] p-5 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Candidate
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {selectedCert.candidate}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Issuing Authority
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {selectedCert.issuer}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Training Period
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {selectedCert.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Credential ID
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#0070f3]">
                      {selectedCert.credentialId}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e2ecf8] text-left space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Description &amp; Skills Acquired
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedCert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg bg-white border border-[#bfd8f6] text-[11px] font-semibold text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accreditations Bar */}
                <div className="pt-3 border-t border-[#e2ecf8] text-left">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Government &amp; Quality Accreditations
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-600">
                    {selectedCert.accreditations.map((acc) => (
                      <span key={acc} className="px-2 py-0.5 rounded bg-[#edf4fd] text-[#0070f3]">
                        ✓ {acc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-500 font-mono">
                  Official Verification ID: {selectedCert.credentialId}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0070f3] text-white font-bold text-xs sm:text-sm hover:bg-[#005cdb] transition-all shadow-sm"
                  >
                    <span>Open High-Res WebP</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={selectedCert.image}
                    download="Dhinesh_Corizo_Web_Development_Certificate.webp"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#bfd8f6] text-slate-800 font-semibold text-xs sm:text-sm hover:text-[#0070f3] hover:border-[#0070f3] transition-colors"
                  >
                    <span>Download</span>
                    <span>⤓</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
