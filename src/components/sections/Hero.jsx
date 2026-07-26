import React from "react";
import { Link } from "react-scroll";
import { FaArrowUpRightFromSquare, FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";

const fallbackProofPoints = [
    { number: "8+", label: "AI & SaaS Builds" },
    { number: "3+", label: "Hackathon Wins" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2026", label: "Modern Tech Stack" },
];

const socialIconMap = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
};

const Hero = () => {
    const { content } = useContent();
    const { hero } = content;

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex flex-col justify-between pt-32 pb-12 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60"
        >
            {/* Background Grid Pattern & Ambient Glow Orbs */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/15 blur-[140px] rounded-full dark:from-blue-600/25 dark:via-cyan-400/15" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    {/* Left Column: Headline & Action CTA */}
                    <div className="text-center lg:text-left">
                        {/* Status Eyebrow Badge */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 backdrop-blur-md shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span>{hero.badgeText || "Available for AI & Full Stack Roles"}</span>
                        </div>

                        {/* Main Title Stack */}
                        <div className="mt-6 max-w-4xl">
                            <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-8xl font-display leading-[1.02]">
                                {hero.name}
                            </h1>
                            <p className="mt-3 text-2xl font-extrabold sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 font-display">
                                {hero.role}
                            </p>
                        </div>

                        {/* Concise Pitch */}
                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0 font-sans">
                            Engineers intelligent full-stack applications, LLM agent workflows, and high-performance digital products.
                        </p>

                        {/* CTA Buttons & Social Roundels */}
                        <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
                            {/* Primary Button-in-Button CTA */}
                            <Link
                                to={hero.primaryCtaTarget || "projects"}
                                smooth
                                duration={250}
                                offset={-80}
                                className="group btn-primary"
                            >
                                <span className="font-extrabold tracking-wide">{hero.primaryCtaText || "Explore Work"}</span>
                                <span className="btn-icon-circle">
                                    <FaArrowUpRightFromSquare className="text-xs" />
                                </span>
                            </Link>

                            {/* Resume CTA */}
                            <a
                                href={hero.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-6 py-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                <FaDownload className="text-xs text-blue-500" />
                                <span>{hero.resumeCtaText || "Download Resume"}</span>
                            </a>

                            {/* Social Icons */}
                            <div className="flex items-center justify-center gap-2 lg:ml-2">
                                {hero.socialLinks.map((item) => {
                                    const Icon = socialIconMap[item.icon];
                                    if (!Icon) return null;
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.label}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                            <Icon className="text-base" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Double-Bezel Hardware Showcase */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[22rem] sm:max-w-[25rem]">
                            {/* Outer Hardware Shell */}
                            <div className="double-bezel-outer group transition-all duration-500 hover:-translate-y-1">
                                <div className="double-bezel-inner p-3.5">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2.5rem-0.75rem)] bg-slate-100 dark:bg-slate-900">
                                        <img
                                            src={hero.profileImage}
                                            alt={hero.profileAlt}
                                            loading="eager"
                                            decoding="sync"
                                            fetchPriority="high"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Hardware Live Status Badge */}
                                    <div className="mt-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-900/90 px-4 py-3 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <p className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                                                Current Focus
                                            </p>
                                        </div>
                                        <p className="mt-1 text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                                            LLM Multi-Agent Workflows & Full Stack SaaS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Proof Metrics Strip */}
            <div className="relative z-10 w-full border-t border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 py-5 backdrop-blur-md mt-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {fallbackProofPoints.map((point) => (
                            <div key={point.label} className="flex flex-col items-center text-center">
                                <span className="text-xl sm:text-2xl font-black font-display text-blue-600 dark:text-blue-400">
                                    {point.number}
                                </span>
                                <span className="mt-0.5 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                    {point.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
