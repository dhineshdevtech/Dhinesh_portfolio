import React from "react";
import { FaBrain, FaCode, FaTrophy, FaChalkboardUser } from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";

const aboutCards = [
    {
        icon: FaBrain,
        title: "AI & LLM Engineering",
        description: "Specialized in building RAG pipelines, multi-agent workflows, prompt engineering, and Groq/OpenAI integration.",
    },
    {
        icon: FaCode,
        title: "Full-Stack SaaS",
        description: "Developing production web apps with React, Next.js, Node.js, Python, PostgreSQL, MongoDB, and Supabase.",
    },
    {
        icon: FaTrophy,
        title: "Hackathon Execution",
        description: "Secured 1st Prize at AI Nexus Hackathon, 1st Runner-Up at Hackfest 2026, and top places nationwide.",
    },
    {
        icon: FaChalkboardUser,
        title: "Technical Mentorship",
        description: "Delivered hands-on software development workshops and technical internship training to engineering students.",
    },
];

const About = () => {
    const { content } = useContent();
    const { about } = content;

    if (about?.enabled === false) {
        return null;
    }

    return (
        <section
            id="about"
            className="relative border-b border-slate-200/60 dark:border-slate-800/60 py-24 sm:py-28"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* 2-Column Split Layout */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
                    {/* Left Column: Narrative Story (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                            <span>About Dhinesh</span>
                        </div>

                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl font-display leading-[1.15]">
                            {about?.title || "Building Real-World AI Systems & Full-Stack Products"}
                        </h2>

                        <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                            <p>
                                I am an AI and Full-Stack Software Engineer dedicated to building intelligent applications, automated workflows, and production web systems. My core engineering focus centres on combining modern JavaScript frameworks, Python backend services, and generative AI APIs to build clean, practical products.
                            </p>
                            <p>
                                From winning national hackathons like AI Nexus to delivering software engineering workshops for junior developers, I focus on building high-impact software that solves real user challenges with speed and accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: 4 Clean Feature Cards (5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {aboutCards.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs transition-all duration-300 hover:border-blue-500/40 hover:shadow-md flex items-start gap-4"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                        <Icon className="text-base" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
