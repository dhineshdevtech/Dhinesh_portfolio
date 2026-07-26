import { useState } from "react";
import {
    FaArrowUpRightFromSquare,
    FaGithub,
    FaGooglePlay,
    FaRobot,
    FaLaptopCode,
    FaMobileScreen,
    FaCheck,
} from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";
import Modal from "../common/Modal";

const DEFAULT_PROJECT_DESCRIPTION =
    "Explore production-ready AI systems, full-stack applications, and software builds engineered by Dhinesh.";

const CATEGORIES = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI & LLMs", icon: FaRobot },
    { id: "fullstack", name: "Full Stack Apps", icon: FaLaptopCode },
    { id: "mobile", name: "Mobile & Utilities", icon: FaMobileScreen },
];

const HRProjectCard = ({ project, labels, onSelect }) => {
    return (
        <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/50">
            <div>
                {/* Visual Image Preview */}
                <div
                    onClick={() => onSelect(project)}
                    className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                            Featured Build
                        </span>
                    )}
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                    {/* Project Title */}
                    <h3
                        onClick={() => onSelect(project)}
                        className="text-xl font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-display"
                    >
                        {project.title}
                    </h3>

                    {/* Clear HR Impact Summary */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans line-clamp-3">
                        {project.description}
                    </p>

                    {/* Key Technical Highlights / HR Bullet points */}
                    {project.problem && (
                        <div className="mt-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200/60 dark:border-slate-700/60">
                            <p className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                                Key Solution & Impact
                            </p>
                            <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 line-clamp-2">
                                {project.problem}
                            </p>
                        </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech?.map((techItem) => (
                            <span
                                key={techItem}
                                className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[0.68rem] font-mono font-bold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                            >
                                {techItem}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* HR Action Buttons Strip */}
            <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/60 mt-4 pt-4">
                <div className="flex items-center gap-2">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                            <span>Live Demo</span>
                            <FaArrowUpRightFromSquare size={10} />
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            <FaGithub size={13} />
                            <span>Code</span>
                        </a>
                    )}

                    {project.playStore && (
                        <a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
                        >
                            <FaGooglePlay size={11} />
                            <span>Play Store</span>
                        </a>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => onSelect(project)}
                    className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                    Details &rarr;
                </button>
            </div>
        </article>
    );
};

const Projects = () => {
    const { content } = useContent();
    const { projects } = content;
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredItems = projects.items.filter((item) => {
        if (selectedCategory === "all") return true;
        if (selectedCategory === "ai") return item.tech?.some((t) => ["OpenAI", "Groq", "Python", "LangChain", "AI", "LLM", "ML", "Assistant"].includes(t));
        if (selectedCategory === "fullstack") return item.tech?.some((t) => ["React", "Node.js", "Next.js", "MongoDB", "Express", "PostgreSQL", "Web"].includes(t));
        if (selectedCategory === "mobile") return item.tech?.some((t) => ["Android", "IoT", "Mobile", "Billing", "Local Storage"].includes(t));
        return true;
    });

    return (
        <section
            id="projects"
            className="relative py-24 border-b border-slate-200/60 dark:border-slate-800/60"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl font-display">
                        {projects.title || "Featured Projects & Builds"}
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                        {projects.description || DEFAULT_PROJECT_DESCRIPTION}
                    </p>

                    {/* HR Friendly Category Tabs */}
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                                        selectedCategory === cat.id
                                            ? "bg-slate-900 dark:bg-blue-600 text-white shadow-md"
                                            : "border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                                    }`}
                                >
                                    {Icon && <Icon size={12} />}
                                    <span>{cat.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* HR Friendly Scannable Project Grid */}
                <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((project) => (
                        <HRProjectCard
                            key={`${project.id}-${project.title}`}
                            project={project}
                            labels={projects.labels}
                            onSelect={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* HR Project Specification Lightbox Modal */}
            <Modal
                isOpen={Boolean(selectedProject)}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title || "Project Specification"}
                maxWidthClass="max-w-3xl"
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="h-full w-full object-contain p-4"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                                {selectedProject.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                                {selectedProject.description}
                            </p>
                        </div>

                        {selectedProject.problem && (
                            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                                <p className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                                    Problem Statement & Architecture Solution
                                </p>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-sans">
                                    {selectedProject.problem}
                                </p>
                            </div>
                        )}

                        {selectedProject.features?.length > 0 && (
                            <div>
                                <p className="mb-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                                    Key Features Delivered
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {selectedProject.features.map((feat) => (
                                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-600">
                                                <FaCheck size={8} />
                                            </span>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <p className="mb-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                                Technologies Used
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {selectedProject.tech?.map((t) => (
                                    <span key={t} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                            <div className="flex gap-3">
                                {selectedProject.demo && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 cursor-pointer"
                                    >
                                        <span>Visit Live Project</span>
                                        <FaArrowUpRightFromSquare size={11} />
                                    </a>
                                )}
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer"
                                    >
                                        <FaGithub size={13} />
                                        <span>View Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;
