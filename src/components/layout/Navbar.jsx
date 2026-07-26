import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";

const Navbar = () => {
    const { content } = useContent();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const navRef = useRef(null);

    // All links except 'contact' (featured as right CTA button)
    const enabledNavLinks = useMemo(() => {
        return content.navigation.links.filter((link) => {
            if (link.enabled === false) return false;
            if (link.to === "contact") return false;

            const targetSection = content[link.to];
            if (targetSection && targetSection.enabled === false) return false;

            return true;
        });
    }, [content]);

    const brandTarget = enabledNavLinks[0]?.to || "hero";

    const handleBrandTap = () => {
        window.dispatchEvent(new Event("closeModals"));
    };

    useEffect(() => {
        let ticking = false;

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 100;
            const current = content.navigation.links.reduce((active, link) => {
                const section = document.getElementById(link.to);
                if (!section) return active;
                return section.offsetTop <= scrollPosition ? link.to : active;
            }, brandTarget);

            setActiveSection(current);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSection);
                ticking = true;
            }
        };

        updateActiveSection();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [brandTarget, content.navigation.links]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {/* Fast Responsive Floating Glass Navbar */}
            <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none flex justify-center">
                <nav
                    ref={navRef}
                    className="pointer-events-auto max-w-6xl w-full rounded-full border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl px-5 py-3 sm:px-8 sm:py-3.5 flex items-center justify-between shadow-[0_16px_44px_rgba(15,23,42,0.1)] transition-all duration-200"
                >
                    {/* Brand Logo */}
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link
                            to={brandTarget}
                            smooth
                            duration={250}
                            onClick={handleBrandTap}
                            className="flex items-center gap-3 group"
                        >
                            <img src="/favicon.svg" alt="Logo" className="w-8 h-8 transition-transform duration-200 group-hover:scale-105" />
                            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                                {content.site.brandName}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {enabledNavLinks.map((link) => {
                            const isActive = activeSection === link.to;
                            return (
                                <Link
                                    key={`${link.to}-${link.name}`}
                                    to={link.to}
                                    smooth
                                    duration={250}
                                    offset={-80}
                                    onClick={() => window.dispatchEvent(new Event("closeModals"))}
                                    className={`relative cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-bold tracking-wide transition-colors duration-150 ${
                                        isActive
                                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-extrabold"
                                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Action CTA Button & Mobile Trigger */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="contact"
                            smooth
                            duration={250}
                            offset={-80}
                            onClick={() => window.dispatchEvent(new Event("closeModals"))}
                            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-150 cursor-pointer active:scale-95"
                        >
                            <span>Get in Touch</span>
                            <FaArrowUpRightFromSquare size={10} />
                        </Link>

                        <div className="flex xl:hidden">
                            <button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 p-2.5 text-slate-700 dark:text-slate-200 transition-all focus:outline-none hover:bg-slate-200"
                                aria-label="Open navigation menu"
                            >
                                <FaBars size={17} />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 z-50 w-full h-screen bg-slate-950/90 backdrop-blur-3xl transition-all duration-200 xl:hidden flex flex-col ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
                }`}
            >
                <div className="flex justify-between items-center p-6 w-full border-b border-slate-800">
                    <div className="text-xl font-extrabold text-white">
                        <Link 
                            to={brandTarget} 
                            smooth 
                            duration={250} 
                            onClick={handleBrandTap}
                            className="flex items-center gap-2.5"
                        >
                            <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
                            <span className="font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                                {content.site.brandName}
                            </span>
                        </Link>
                    </div>
                    
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="rounded-full border border-slate-800 bg-slate-900 p-2.5 text-slate-200"
                        aria-label="Close menu"
                    >
                        <FaXmark size={20} />
                    </button>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-xl font-bold">
                    {content.navigation.links.map((link) => (
                        <Link
                            key={`${link.to}-${link.name}-mobile`}
                            to={link.to}
                            smooth
                            duration={250}
                            offset={-80}
                            onClick={() => {
                                setIsOpen(false);
                                window.dispatchEvent(new Event("closeModals"));
                            }}
                            className={`block cursor-pointer hover:text-blue-400 transition-all ${
                                activeSection === link.to ? "text-blue-400 font-black scale-105" : "text-slate-300"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="contact"
                        smooth
                        duration={250}
                        offset={-80}
                        onClick={() => {
                            setIsOpen(false);
                            window.dispatchEvent(new Event("closeModals"));
                        }}
                        className="mt-4 flex items-center gap-2.5 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25"
                    >
                        <span>Get in Touch</span>
                        <FaArrowUpRightFromSquare size={13} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
