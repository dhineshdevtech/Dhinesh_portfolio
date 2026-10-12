"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Track active section and scroll state
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
      {/* Desktop & Collapsed Mobile Header */}
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
            {/* Branded D Squircle */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] p-0.5 shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(0,242,254,0.45)] transition-all duration-200">
              <span className="font-extrabold text-white text-sm tracking-tight font-sans">
                D
              </span>
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
              <span className="text-xs text-slate-400">↗</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 focus:outline-hidden"
            aria-label="Open navigation menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-current rounded-full" />
              <span className="w-full h-0.5 bg-current rounded-full" />
              <span className="w-full h-0.5 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Height Immersive Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 h-[100dvh] w-full md:hidden bg-white/98 backdrop-blur-2xl flex flex-col justify-between px-6 py-6 transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Top Header Row inside Fullscreen Menu */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <Link
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 focus:outline-hidden"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] p-0.5 shadow-sm">
              <span className="font-extrabold text-white text-sm font-sans">D</span>
            </div>
            <span className="text-xl font-extrabold text-slate-900">Dhinesh</span>
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 focus:outline-hidden"
            aria-label="Close navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Center: Fullscreen Navigation Links */}
        <nav className="flex flex-col justify-center space-y-4 py-8" aria-label="Mobile Navigation">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`group flex items-center justify-between py-2 px-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#f0f6fe] text-[#0070f3] font-bold"
                    : "text-slate-700 hover:text-[#0070f3] hover:bg-slate-50 font-semibold"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  <span className="text-2xl tracking-tight">{item.name}</span>
                </div>
                <span className={`text-lg transition-transform duration-200 ${isActive ? "text-[#0070f3] translate-x-1" : "text-slate-300 group-hover:text-[#0070f3] group-hover:translate-x-1"}`}>
                  →
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Area: Resume CTA + Live Status */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] shadow-[0_4px_14px_rgba(0,112,243,0.3)] active:scale-[0.98] transition-all"
          >
            <span>View Resume</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Availability Status */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </>
  );
}
