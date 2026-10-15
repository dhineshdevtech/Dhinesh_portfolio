"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white text-slate-900 selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Container - Centered Vertically */}
      <main className="relative flex-1 flex flex-col items-center justify-center pt-32 sm:pt-36 pb-20 sm:pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Apple-style gradient section boundary line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

        {/* Ambient cyber blue / azure background glow */}
        <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#00f2fe]/10 via-[#0070f3]/6 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-[#0070f3]/5 blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center my-auto">
          {/* Acrobat / PDF Document Icon Badge */}
          <FadeUp delay={0} duration={600}>
            <div className="relative group/pdf mb-6 sm:mb-8">
              {/* Subtle outer pulsing halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#0070f3]/20 via-[#00f2fe]/25 to-[#0070f3]/20 blur-md opacity-75 group-hover/pdf:opacity-100 transition-opacity duration-300" />

              {/* PDF Document Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#edf5fe] border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgba(0,112,243,0.12)] flex items-center justify-center p-4 transition-transform duration-300 group-hover/pdf:scale-105">
                <svg
                  className="w-14 h-14 sm:w-16 sm:h-16 text-[#0070f3]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Clean Document Body with Folded Corner */}
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    fill="#0070f3"
                    fillOpacity="0.08"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Folded Top-Right Corner */}
                  <path
                    d="M14 2V8H20"
                    fill="#0070f3"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Clean Horizontal Resume Content Lines */}
                  <line
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="15.5"
                    x2="16"
                    y2="15.5"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="19"
                    x2="12.5"
                    y2="19"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Corner PDF Pill */}
                <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-md bg-[#0070f3] text-white text-[10px] font-black tracking-wider uppercase shadow-xs">
                  PDF
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Display Heading: "My Resume" */}
          <FadeUp delay={80} duration={700}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-4 sm:mb-5">
              My{" "}
              <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
          </FadeUp>

          {/* Role Bio Statement */}
          <FadeUp delay={140} duration={700}>
            <p className="text-base sm:text-lg lg:text-[19px] font-medium text-slate-800 max-w-2xl leading-relaxed mb-3">
              Software Engineer and Web &amp; Mobile Application Developer, currently building production cross-platform apps and scalable web platforms.
            </p>
          </FadeUp>

          {/* Scope / Description Paragraph */}
          <FadeUp delay={200} duration={700}>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-8 sm:mb-9">
              My resume covers my professional experience, internships, technical skills, production projects, and education — click below to view or download the full PDF.
            </p>
          </FadeUp>

          {/* Main Action Buttons */}
          <FadeUp delay={260} duration={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary Button: View on Google Drive */}
              <a
                href="https://drive.google.com/file/d/1azy675F6qNYeU9Vqk2fnJEPtLRbSePCD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0070f3] to-[#00c2ff] text-white font-bold text-base shadow-[0_10px_30px_rgba(0,112,243,0.3)] hover:shadow-[0_14px_40px_rgba(0,112,243,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <svg
                  className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.4}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>View Resume (Google Drive)</span>
              </a>

              {/* Secondary Button: Download PDF Direct */}
              <a
                href="/Dhinesh_Resume.pdf"
                download="Dhinesh_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-slate-800 font-semibold text-base border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] hover:text-[#0070f3] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-slate-500 group-hover:text-[#0070f3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download PDF</span>
              </a>
            </div>
          </FadeUp>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
