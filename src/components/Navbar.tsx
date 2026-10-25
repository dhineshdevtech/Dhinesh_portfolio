"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: (className?: string) => React.ReactNode;
  hasDropdown?: boolean;
}

export interface ProjectCategory {
  id: "mobile" | "websites" | "business" | "ai-videos";
  name: string;
  icon: (className?: string) => React.ReactNode;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "mobile",
    name: "Mobile Apps",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "websites",
    name: "Web Platforms",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
      </svg>
    ),
  },
  {
    id: "business",
    name: "Business Software",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-5 4h18" />
      </svg>
    ),
  },

  {
    id: "ai-videos",
    name: "AI Video Ads",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "/about",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    hasDropdown: true,
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: "Certificates",
    href: "/certificates",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    name: "Resume",
    href: "/resume",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsExpanded, setMobileProjectsExpanded] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

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

  // Smart Auto-Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled slightly
      setScrolled(currentScrollY > 15);

      // Always show navbar near top of the page (within first 80px)
      if (currentScrollY < 80) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Filter out micro-scroll jitter (< 8px)
      const delta = currentScrollY - lastScrollY.current;
      if (Math.abs(delta) < 8) {
        return;
      }

      if (delta > 0 && currentScrollY > 120) {
        // Scrolling down -> hide navbar & close dropdown
        setVisible(false);
        setProjectsDropdownOpen(false);
      } else if (delta < 0) {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setProjectsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 180);
  };

  const isItemActive = (item: NavItem) => {
    if (item.href === "/about") {
      return pathname === "/about";
    }
    if (item.href === "/projects") {
      return pathname === "/projects";
    }
    if (item.href === "/certificates") {
      return pathname === "/certificates";
    }
    if (item.href === "/resume") {
      return pathname === "/resume";
    }
    if (item.href === "/contact") {
      return pathname === "/contact";
    }
    if (item.href === "/") {
      return pathname === "/";
    }
    return false;
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    setProjectsDropdownOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      if (pathname !== "/") {
        // Navigate to home page with hash
        return;
      }

      // Already on home page - perform smooth scroll
      e.preventDefault();

      if (targetId === "certificates") {
        router.push("/certificates");
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCategorySelect = (category: string) => {
    setIsOpen(false);
    setProjectsDropdownOpen(false);
    router.push(`/projects?category=${category}`);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop / Primary Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-transform duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-[#e0ecfb] ${
          visible ? "translate-y-0" : "-translate-y-full shadow-none"
        } ${scrolled ? "shadow-sm" : "shadow-2xs"}`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          {/* Left Side: Branded Logo + Bold Name */}
          <Link
            href="/"
            onClick={(e) => scrollToSection(e, "/")}
            className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-lg"
            aria-label="Dhinesh - Back to home"
          >
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
          <nav className="hidden md:flex items-center gap-8 sm:gap-9 lg:gap-10" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = isItemActive(item);

              // Special Handling for Projects (Dropdown Menu)
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`relative py-2 flex items-center gap-1.5 text-[15px] sm:text-base font-medium transition-colors duration-200 group ${
                        isActive || projectsDropdownOpen
                          ? "text-[#0070f3] font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          projectsDropdownOpen ? "rotate-180 text-[#0070f3]" : "text-slate-400 group-hover:text-slate-700"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-gradient-to-r from-[#0070f3] to-[#00c2ff] rounded-full" />
                      )}
                    </Link>

                    {/* Clean Minimalist Single-Line Dropdown Menu */}
                    {projectsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="w-56 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.04)] p-1.5 space-y-0.5 animate-in fade-in zoom-in-95 duration-150">
                          {projectCategories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => handleCategorySelect(cat.id)}
                              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] group/item transition-colors duration-150 cursor-pointer"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-7 h-7 rounded-lg bg-slate-100/90 border border-slate-200/70 text-slate-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0070f3]/10 group-hover/item:text-[#0070f3] group-hover/item:border-[#bfd8f6] transition-all">
                                  {cat.icon("w-3.5 h-3.5")}
                                </div>
                                <span className="text-[13.5px] font-semibold text-slate-800 group-hover/item:text-[#0070f3] transition-colors tracking-tight truncate">
                                  {cat.name}
                                </span>
                              </div>
                              <span className="text-xs text-[#0070f3] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">
                                →
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
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
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
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
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
                aria-label="Close navigation menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Items with Dedicated Icons */}
            <nav className="mt-6 space-y-2">
              {navItems.map((item) => {
                const isActive = isItemActive(item);

                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between w-full rounded-xl">
                        <Link
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className={`flex-1 flex items-center gap-3.5 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                            isActive
                              ? "bg-[#0070f3]/10 text-[#0070f3] border-l-4 border-l-[#0070f3] border border-[#0070f3]/20 shadow-2xs"
                              : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          <span className={isActive ? "text-[#0070f3]" : "text-slate-400"}>
                            {item.icon("w-5 h-5")}
                          </span>
                          <span>{item.name}</span>
                        </Link>

                        <button
                          type="button"
                          onClick={() => setMobileProjectsExpanded(!mobileProjectsExpanded)}
                          className="px-3 py-3 text-slate-400 hover:text-slate-700"
                          aria-label="Toggle projects sub-menu"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              mobileProjectsExpanded ? "rotate-180 text-[#0070f3]" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Mobile Expandable Sub-Categories */}
                      {mobileProjectsExpanded && (
                        <div className="pl-4 pr-1 py-1.5 space-y-1 border-l-2 border-[#bfd8f6] ml-6">
                          {projectCategories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => handleCategorySelect(cat.id)}
                              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0070f3] hover:bg-[#f0f6fe] transition-colors text-left"
                            >
                              <div className="w-5 h-5 rounded-md bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                                {cat.icon("w-3 h-3")}
                              </div>
                              <span className="truncate">{cat.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
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
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom of Drawer: Resume Button & Contact Pill */}
          <div className="pt-6 border-t border-[#eef5fd] space-y-3">
            <a
              href="https://drive.google.com/file/d/1azy675F6qNYeU9Vqk2fnJEPtLRbSePCD/view?usp=sharing"
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
