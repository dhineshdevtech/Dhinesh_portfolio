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
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from document or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDark(false);
    } else if (savedTheme === "dark" || prefersDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

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
      const navOffset = 64;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Branded Logo + Bold Name */}
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="group flex items-center gap-2.5 focus:outline-hidden"
          aria-label="Dhinesh - Back to home"
        >
          {/* Branded D Squircle */}
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] p-0.5 shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(0,242,254,0.5)] transition-all duration-200">
            <span className="font-extrabold text-white text-xs tracking-tight font-sans">
              D
            </span>
          </div>

          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-[#0070f3] dark:group-hover:text-[#00f2fe] transition-colors">
            Dhinesh
          </span>
        </Link>

        {/* Center/Right: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#0070f3] dark:text-[#00f2fe]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                <span>{item.name}</span>
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#0070f3] to-[#00f2fe] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Far Right: Resume CTA Button + Theme Toggle Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:border-[#0070f3] dark:hover:border-[#00f2fe] hover:text-[#0070f3] dark:hover:text-[#00f2fe] shadow-2xs transition-all hover:scale-[1.02]"
          >
            <span>Resume</span>
            <span className="text-[10px]">↗</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all focus:outline-hidden"
            aria-label="Toggle light and dark mode"
          >
            {isDark ? (
              /* Sun Icon */
              <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon Icon */
              <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Actions: Theme Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 focus:outline-hidden"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-4 h-3.5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-x-px -translate-y-px" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 translate-x-px translate-y-px" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#050b14]/95 backdrop-blur-xl" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#0070f3] dark:text-[#00f2fe] font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] dark:bg-[#00f2fe]" />
                )}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
              View Resume ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
