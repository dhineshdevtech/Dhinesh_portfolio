"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
  icon: (className?: string) => React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#home",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "#about",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "Skills",
    href: "#skills",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "#projects",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: "Certificates",
    href: "#certificates",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "#contact",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 140;
      const sections = navItems.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Desktop / Primary Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#e0ecfb] ${
          scrolled ? "shadow-sm" : "shadow-2xs"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          {/* Left Side: Branded Logo + Bold Name */}
          <Link
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-3 focus:outline-hidden"
            aria-label="Dhinesh - Back to home"
          >
            {/* Option 2: Ice Mist Blue Frosted D. Icon */}
            <div className="relative flex items-center justify-center px-2.5 h-9 rounded-xl bg-[#edf4fd] border border-[#cde0f8] shadow-2xs group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(0,242,254,0.35)] group-hover:border-[#0070f3]/40 transition-all duration-300">
              <span className="font-black text-slate-900 text-base tracking-tight font-sans">
                D
              </span>
              <span className="w-2 h-2 ml-1 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] animate-pulse" />
            </div>

            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#0070f3] transition-colors">
              Dhinesh
            </span>
          </Link>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 sm:gap-8 lg:gap-9" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative py-1 text-[15px] sm:text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#0070f3] font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1.5 w-full h-[2.5px] bg-gradient-to-r from-[#0070f3] to-[#00c2ff] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Far Right: Clean Resume CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:border-[#0070f3] hover:text-[#0070f3] shadow-2xs hover:shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Resume</span>
              <span className="text-xs text-slate-400 group-hover:text-[#0070f3]">↗</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 focus:outline-hidden"
            aria-label="Open navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-Height Mobile Slide-In Side Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dimmed Frosted Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Drawer Container (Slide from Left, Full Height 100dvh) */}
        <aside
          className={`absolute top-0 left-0 w-[84%] max-w-[340px] h-[100dvh] bg-white border-r border-[#e0ecfb] shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Mobile Navigation"
        >
          {/* Top of Drawer: Brand & Close Button */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#eef5fd]">
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center px-2 h-7 rounded-lg bg-[#edf4fd] border border-[#cde0f8] shadow-2xs">
                  <span className="font-black text-slate-900 text-xs tracking-tight font-sans">
                    D
                  </span>
                  <span className="w-1.5 h-1.5 ml-0.5 rounded-full bg-[#00f2fe] shadow-[0_0_6px_#00f2fe]" />
                </div>
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">Dhinesh</span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
                aria-label="Close navigation menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Items with Dedicated Icons & Card Active Pill (Inspiration Layout) */}
            <nav className="mt-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                      isActive
                        ? "bg-[#0070f3]/10 text-[#0070f3] border-l-4 border-l-[#0070f3] border border-[#0070f3]/20 shadow-2xs"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className={isActive ? "text-[#0070f3]" : "text-slate-400"}>
                      {item.icon("w-5 h-5")}
                    </span>
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom of Drawer: Resume Button & Contact Pill */}
          <div className="pt-6 border-t border-[#eef5fd] space-y-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] shadow-sm hover:opacity-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>

            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
