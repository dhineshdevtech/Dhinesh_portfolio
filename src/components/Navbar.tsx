"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      const sections = navItems.map((item) => item.href.substring(1));
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 w-[94%] max-w-5xl transition-all duration-300">
      <nav
        className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#050b14]/85 backdrop-blur-xl border-slate-200/90 dark:border-slate-800/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            : "bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-md border-slate-200/70 dark:border-slate-800/70 shadow-sm"
        }`}
        aria-label="Main Navigation"
      >
        {/* Left: Brand / Name (Click to scroll to top) */}
        <Link
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          className="group flex items-center gap-3 focus:outline-hidden"
          aria-label="Dhinesh - Back to top"
        >
          {/* Custom Branded Icon */}
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] p-0.5 shadow-sm group-hover:shadow-[0_0_16px_rgba(0,242,254,0.4)] transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center justify-center w-full h-full rounded-[10px] bg-white/10 backdrop-blur-xs">
              <span className="font-extrabold text-white text-base tracking-tight font-sans">
                D
              </span>
            </div>
          </div>

          {/* Name & Availability Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-[#0070f3] dark:group-hover:text-[#00f2fe] transition-colors">
              Dhinesh
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-[#0070f3] dark:text-[#00f2fe] shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right: CTA Button (Desktop) & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          {/* Contact / Hire CTA Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_2px_10px_rgba(0,112,243,0.3)] hover:shadow-[0_4px_16px_rgba(0,112,243,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-hidden"
            aria-label="Toggle navigation menu"
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
      </nav>

      {/* Mobile Glass Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0 pointer-events-none"
        }`}
      >
        <div className="p-3 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#050b14]/95 backdrop-blur-2xl shadow-xl space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#0070f3] dark:hover:text-[#00f2fe] hover:bg-slate-100/70 dark:hover:bg-slate-900/70 transition-all"
            >
              <span>{item.name}</span>
              <span className="text-slate-400 text-xs">→</span>
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] shadow-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
