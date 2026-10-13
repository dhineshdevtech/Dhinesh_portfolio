"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden">
        {/* Apple-style gradient section boundary line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

        {/* Background ambient cyber glow */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#00f2fe]/10 via-[#0070f3]/6 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-[#0070f3]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto">
          {/* ========================================================================= */}
          {/* SECTION 1: ABOUT ME (Centered headline, balanced 2-column layout)         */}
          {/* ========================================================================= */}
          <div className="space-y-10 sm:space-y-12">
            {/* Display Headline (Proper Top Center) */}
            <FadeUp delay={0} duration={700}>
              <div className="text-center w-full">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.06]">
                  About{" "}
                  <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>
              </div>
            </FadeUp>

            {/* 2-Column Split Showcase: Proper Left (Image) & Proper Right (Content) */}
            <FadeUp delay={120} duration={800}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start pt-2">
                {/* Proper Left Section: Portrait Squircle Card */}
                <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
                  <div className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-3xl bg-[#f8fbfe] border-2 border-[#bfd8f6] shadow-[0_8px_30px_rgba(0,112,243,0.08)] flex items-center justify-center p-5 flex-shrink-0">
                    {/* Circular Avatar with Glowing Azure Gradient Ring */}
                    <div className="relative group/avatar cursor-pointer transition-all duration-300 hover:scale-105">
                      <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-[#0070f3] via-[#00c2ff] to-[#00f2fe] shadow-[0_0_24px_rgba(0,112,243,0.25)]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src="/profile.webp"
                            alt="Dhinesh - Software Engineer & Web & Mobile Application Developer"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proper Right Section: Narrative Content */}
                <div className="md:col-span-7 lg:col-span-8 space-y-5 text-left pt-1">
                  <p className="text-base sm:text-lg lg:text-[19px] text-slate-700 leading-relaxed sm:leading-[1.75] font-normal">
                    I&apos;m <strong className="font-extrabold text-slate-900">Dhinesh</strong>, a Software Engineer and Flutter Mobile App Developer with <strong className="font-extrabold text-[#0070f3]">proven experience</strong> building cross-platform apps. My path into software wasn&apos;t limited to one technology or one role — it grew through digital work, mobile development, internships, production projects, and eventually professional software engineering.
                  </p>

                  <p className="text-base sm:text-lg lg:text-[19px] text-slate-700 leading-relaxed sm:leading-[1.75] font-normal">
                    Today, I focus on building real-world software that is useful, maintainable, and built to last.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 2: HOW I GOT HERE (Milestones & Journey Timeline)                 */}
          {/* ========================================================================= */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-[#d8e6f7] text-left space-y-8">
            {/* Section Header */}
            <FadeUp delay={0}>
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight">
                  How I Got Here
                </h2>

                <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
                  A quick look at how the last few years have built on one another.
                </p>
              </div>
            </FadeUp>

            {/* Timeline Rows (Large Year on Left, Details on Right) */}
            <div className="divide-y divide-[#e2ecf8] border-t border-b border-[#e2ecf8]">
              {/* 2026 */}
              <FadeUp delay={60}>
                <div className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-8 items-start group">
                  <div className="md:col-span-3">
                    <span className="text-3xl sm:text-4xl lg:text-[38px] font-black text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors font-sans">
                      2026
                    </span>
                  </div>
                  <div className="md:col-span-9 space-y-1.5 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Software Engineer &amp; Production Scaling
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Now building production software with a stronger focus on architecture, scalability, live telemetry (WebSockets), performance, and real-world product requirements.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* 2025 */}
              <FadeUp delay={120}>
                <div className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-8 items-start group">
                  <div className="md:col-span-3">
                    <span className="text-3xl sm:text-4xl lg:text-[38px] font-black text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors font-sans">
                      2025
                    </span>
                  </div>
                  <div className="md:col-span-9 space-y-1.5 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Professional Flutter &amp; Full-Stack Development
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Moved deeper into production software development — working on real applications, APIs, Firebase integrations, state management (Provider), architecture, testing, notifications, and CI/CD.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* 2024 */}
              <FadeUp delay={180}>
                <div className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-8 items-start group">
                  <div className="md:col-span-3">
                    <span className="text-3xl sm:text-4xl lg:text-[38px] font-black text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors font-sans">
                      2024
                    </span>
                  </div>
                  <div className="md:col-span-9 space-y-1.5 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Started Building with Flutter &amp; Modern Web
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Started my focused journey in mobile application development with Flutter, learning how to turn ideas and designs into real, performant cross-platform applications.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 3: WHERE I BUILT MY FOUNDATION (Compact, Clean 3-Card Grid)       */}
          {/* ========================================================================= */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-[#d8e6f7] text-left space-y-7">
            {/* Section Header */}
            <FadeUp delay={0}>
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight">
                  Where I Built My Foundation
                </h2>

                <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
                  Three internships that overlapped and stacked, each adding a different piece.
                </p>
              </div>
            </FadeUp>

            {/* 3-Card Responsive Grid (Compact, proportionate cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {/* Card 1: Zapple Digital */}
              <FadeUp delay={60} className="h-full">
                <div className="h-full group rounded-2xl bg-[#f8fbfe] border-2 border-[#bfd8f6] p-5 sm:p-6 hover:border-[#0070f3] shadow-[0_2px_10px_rgba(0,112,243,0.04)] hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="space-y-1 mb-4">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors">
                        Full Stack Developer Intern
                      </h3>
                      <div className="text-sm font-semibold text-[#0070f3]">
                        Zapple Digital
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Chennai · Jun 2026 – Jul 2026
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-snug">
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Developed and maintained live client websites and web applications</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Collaborated with engineering team on full-stack feature delivery</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Optimized performance, testing workflows, and client-side debugging</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Followed production Git standards, code reviews, and sprint deadlines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeUp>

              {/* Card 2: Corizo */}
              <FadeUp delay={140} className="h-full">
                <div className="h-full group rounded-2xl bg-[#f8fbfe] border-2 border-[#bfd8f6] p-5 sm:p-6 hover:border-[#0070f3] shadow-[0_2px_10px_rgba(0,112,243,0.04)] hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="space-y-1 mb-4">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors">
                        Web Development Intern
                      </h3>
                      <div className="text-sm font-semibold text-[#0070f3]">
                        Corizo
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Remote · Jul 2025 – Aug 2025
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-snug">
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Built modern, responsive user interfaces with modular web components</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Implemented client-side validations and interactive UI state flows</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Optimized load times, rendering metrics, and cross-browser consistency</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Completed intensive technical evaluation (Credential: CRZ111525)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeUp>

              {/* Card 3: SAN Technovation */}
              <FadeUp delay={220} className="h-full">
                <div className="h-full group rounded-2xl bg-[#f8fbfe] border-2 border-[#bfd8f6] p-5 sm:p-6 hover:border-[#0070f3] shadow-[0_2px_10px_rgba(0,112,243,0.04)] hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="space-y-1 mb-4">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors">
                        Fullstack Development Intern
                      </h3>
                      <div className="text-sm font-semibold text-[#0070f3]">
                        SAN Technovation
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Perundurai, Erode · Jan 2025 – Feb 2025
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-snug">
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Built full-stack features connecting dynamic UI with backend APIs</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Engineered reusable components to reduce redundant boilerplate</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Assisted in database operations, REST endpoints, and schema design</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0070f3]/15 text-[#0070f3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Collaborated under Technical Leads adhering to production practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 4: HOW I THINK ABOUT SOFTWARE (5 Core Principles)                 */}
          {/* ========================================================================= */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-[#d8e6f7] text-left space-y-8">
            {/* Section Header */}
            <FadeUp delay={0}>
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight">
                  How I Think About Software
                </h2>

                <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
                  Home shows what I build. This is how I think about building it.
                </p>
              </div>
            </FadeUp>

            {/* 5 Principles List */}
            <div className="space-y-7 sm:space-y-8 max-w-4xl pt-1">
              {/* 01 */}
              <FadeUp delay={50}>
                <div className="flex items-start gap-5 sm:gap-7 group">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 group-hover:text-[#0070f3] transition-colors select-none font-mono pt-0.5 w-8 flex-shrink-0">
                    01
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Solve the actual problem
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      Good software starts with understanding why something needs to be built — not just writing code because a feature exists in a requirements document.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* 02 */}
              <FadeUp delay={100}>
                <div className="flex items-start gap-5 sm:gap-7 group">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 group-hover:text-[#0070f3] transition-colors select-none font-mono pt-0.5 w-8 flex-shrink-0">
                    02
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Build for real users
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      Edge cases matter, but the everyday experience matters more. I design around how people actually use an app, not just how it&apos;s meant to work on paper.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* 03 */}
              <FadeUp delay={150}>
                <div className="flex items-start gap-5 sm:gap-7 group">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 group-hover:text-[#0070f3] transition-colors select-none font-mono pt-0.5 w-8 flex-shrink-0">
                    03
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Keep code maintainable
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      Code gets read far more than it gets written. I&apos;d rather spend extra time now than leave a mess for the next person — often future me.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* 04 */}
              <FadeUp delay={200}>
                <div className="flex items-start gap-5 sm:gap-7 group">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 group-hover:text-[#0070f3] transition-colors select-none font-mono pt-0.5 w-8 flex-shrink-0">
                    04
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Think beyond the feature
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      A feature that works in isolation isn&apos;t enough. I think about how it fits into the architecture, the data flow, and the product as a whole.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* 05 */}
              <FadeUp delay={250}>
                <div className="flex items-start gap-5 sm:gap-7 group">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 group-hover:text-[#0070f3] transition-colors select-none font-mono pt-0.5 w-8 flex-shrink-0">
                    05
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Ship, measure, improve
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      Perfect is a moving target. I&apos;d rather get something real in front of users, learn from it, and keep refining.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 5: EDUCATION                                                      */}
          {/* ========================================================================= */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-[#d8e6f7] text-left space-y-7">
            {/* Section Header */}
            <FadeUp delay={0}>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight">
                  Education
                </h2>
              </div>
            </FadeUp>

            {/* Education Stack Cards */}
            <div className="space-y-3.5 max-w-3xl">
              {/* Card 1: B.E - ECE */}
              <FadeUp delay={60}>
                <div className="group rounded-2xl bg-[#f8fbfe] border-2 border-[#bfd8f6] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 hover:border-[#0070f3] hover:shadow-[0_4px_16px_rgba(0,112,243,0.08)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                    </svg>
                  </div>
                  <div className="space-y-0.5 text-left">
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      B.E – Electronics and Communication Engineering (ECE)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      M.P. Nachimuthu M. Jaganathan Engineering College, Erode
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Card 2: HSC */}
              <FadeUp delay={120}>
                <div className="group rounded-2xl bg-[#f8fbfe] border-2 border-[#bfd8f6] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 hover:border-[#0070f3] hover:shadow-[0_4px_16px_rgba(0,112,243,0.08)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                    </svg>
                  </div>
                  <div className="space-y-0.5 text-left">
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Railway Colony Municipal Higher Secondary School, Erode
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Card 3: SSLC */}
              <FadeUp delay={180}>
                <div className="group rounded-2xl bg-[#f8fbfe] border-2 border-[#bfd8f6] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 hover:border-[#0070f3] hover:shadow-[0_4px_16px_rgba(0,112,243,0.08)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                    </svg>
                  </div>
                  <div className="space-y-0.5 text-left">
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors">
                      Secondary School Leaving Certificate (SSLC)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Sengunthar Vidhyalaya Matriculation School, Erode
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 6: WHERE I'M GOING                                                */}
          {/* ========================================================================= */}
          <FadeUp delay={0}>
            <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-[#d8e6f7] text-left space-y-3.5">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight">
                Where I&apos;m Going
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Software engineering continues to be the center of my work, with growing interest in AI-powered software, automation, scalable backend systems, and products that solve real business problems.
              </p>
            </div>
          </FadeUp>

          {/* ========================================================================= */}
          {/* CALL TO ACTION BANNER: HAVE A PROJECT IN MIND?                             */}
          {/* ========================================================================= */}
          <FadeUp delay={60}>
            <div className="mt-16 sm:mt-20 pt-14 sm:pt-16 border-t border-[#d8e6f7] text-center space-y-6">
              <div className="space-y-3 max-w-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  Have a project in mind?
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Let&apos;s build something useful, scalable, and production-ready.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0070f3] to-[#00c2ff] text-white font-bold text-base shadow-[0_10px_30px_rgba(0,112,243,0.3)] hover:shadow-[0_14px_40px_rgba(0,112,243,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <svg className="w-4 h-4 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Let&apos;s Work Together</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
