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
        {/* Left Side: Bold Clean Name */}
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="group flex items-center gap-2 focus:outline-hidden"
          aria-label="Dhinesh - Back to home"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-[#0070f3] dark:group-hover:text-[#00f2fe] transition-colors">
            Dhinesh
          </span>
        </Link>

        {/* Right Side: Desktop Nav Links with Active Underline Bar */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-1 text-sm lg:text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#0070f3] dark:text-[#00f2fe]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                <span>{item.name}</span>
                {/* Clean Underline Indicator Bar */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#0070f3] to-[#00f2fe] rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#050b14]/95 backdrop-blur-xl" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`flex items-center justify-between py-2 text-base font-medium transition-colors ${
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
        </div>
      </div>
    </header>
  );
}
