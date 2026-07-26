import { memo } from "react";
import {
    FaBrain,
    FaCloudArrowUp,
    FaCode,
    FaDatabase,
    FaDiagramProject,
    FaKey,
    FaMicrochip,
    FaNetworkWired,
    FaRobot,
    FaRocket,
    FaVectorSquare,
    FaWandMagicSparkles,
    FaArrowsRotate,
} from "react-icons/fa6";
import {
    SiCss3,
    SiExpress,
    SiFirebase,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiHtml5,
    SiJavascript,
    SiLangchain,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiOpenai,
    SiOpenapiinitiative,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { useContent } from "../../context/ContentContext";

const techIconMap = {
    "AI Agents": { Icon: FaRobot, color: "#2563EB" },
    "API Integration": { Icon: FaNetworkWired, color: "#2563EB" },
    Authentication: { Icon: FaKey, color: "#3B82F6" },
    "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },
    CSS3: { Icon: SiCss3, color: "#1572B6" },
    Deployment: { Icon: FaCloudArrowUp, color: "#06B6D4" },
    "Express.js": { Icon: SiExpress, color: "#000000" },
    Firebase: { Icon: SiFirebase, color: "#FFCA28" },
    Git: { Icon: SiGit, color: "#F05032" },
    GitHub: { Icon: SiGithub, color: "#181717" },
    Groq: { initials: "G", color: "#F55036" },
    HTML5: { Icon: SiHtml5, color: "#E34F26" },
    JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
    LangChain: { Icon: SiLangchain, color: "#1C3C3C" },
    "LLM APIs": { Icon: FaMicrochip, color: "#2563EB" },
    MongoDB: { Icon: SiMongodb, color: "#47A248" },
    "Next.js": { Icon: SiNextdotjs, color: "#000000" },
    "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
    OpenAI: { Icon: SiOpenai, color: "#10A37F" },
    PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
    Postman: { Icon: SiPostman, color: "#FF6C37" },
    Python: { Icon: SiPython, color: "#3776AB" },
    "Prompt Engineering": { Icon: FaWandMagicSparkles, color: "#2563EB" },
    RAG: { Icon: FaDiagramProject, color: "#06B6D4" },
    React: { Icon: SiReact, color: "#087EA4" },
    "REST APIs": { Icon: SiOpenapiinitiative, color: "#6BA539" },
    Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
    TypeScript: { Icon: SiTypescript, color: "#3178C6" },
    "Vector Databases": { Icon: FaVectorSquare, color: "#2563EB" },
    Vercel: { Icon: SiVercel, color: "#000000" },
    "Workflow Automation": { Icon: FaArrowsRotate, color: "#2563EB" },
};

const categoryIconMap = {
    "AI Development": FaBrain,
    "Frontend Development": FaCode,
    "Backend & Databases": FaDatabase,
    "Tools & Deployment": FaRocket,
};

const fallbackSkills = {
    title: "Skills & Core Stack",
    description: "Production technologies, frameworks, and engineering tools.",
    categories: [
        {
            category: "AI & Intelligence",
            skills: [
                "OpenAI",
                "Groq",
                "LangChain",
                "AI Agents",
                "RAG",
                "Prompt Engineering",
                "Vector Databases",
                "LLM APIs",
            ],
        },
        {
            category: "Frontend Engineering",
            skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
            category: "Backend & Databases",
            skills: [
                "Node.js",
                "Python",
                "Express.js",
                "PostgreSQL",
                "MongoDB",
                "Supabase",
                "Firebase",
                "REST APIs",
            ],
        },
        {
            category: "Tools & DevOps",
            skills: [
                "Git",
                "GitHub",
                "Vercel",
                "Postman",
                "API Integration",
                "CI/CD",
                "Deployment",
            ],
        },
    ],
};

const CleanSkillTag = memo(({ name }) => {
    const tech = techIconMap[name] || {};
    const Icon = tech.Icon;

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs transition-all hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800">
            {Icon ? (
                <Icon className="text-sm shrink-0" style={{ color: tech.color }} />
            ) : (
                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 shrink-0">
                    {tech.initials || name.charAt(0)}
                </span>
            )}
            <span>{name}</span>
        </span>
    );
});

CleanSkillTag.displayName = "CleanSkillTag";

const Skills = () => {
    const { content } = useContent();
    const configuredSkills = content.skills || {};
    const skills = {
        ...fallbackSkills,
        ...configuredSkills,
        categories: configuredSkills.categories?.length
            ? configuredSkills.categories
            : fallbackSkills.categories,
    };

    if (skills.enabled === false) {
        return null;
    }

    return (
        <section
            id="skills"
            className="relative border-b border-slate-200/60 dark:border-slate-800/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Clean Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl font-display">
                        {skills.title || "Skills & Core Stack"}
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {skills.description || fallbackSkills.description}
                    </p>
                </div>

                {/* Ultra-Clean 2-Column Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {skills.categories.map((category) => {
                        const CategoryIcon = categoryIconMap[category.category] || FaCode;
                        return (
                            <div
                                key={category.category}
                                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-md"
                            >
                                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                        <CategoryIcon size={18} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => (
                                        <CleanSkillTag key={skill} name={skill} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
