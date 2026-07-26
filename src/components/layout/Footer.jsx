import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";

const Footer = () => {
    const { content } = useContent();
    const { contact, hero } = content;

    return (
        <footer className="relative z-10 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950 py-12">
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
                {/* Brand Logo & Title */}
                <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                        {hero.name || "DHINESH"}
                    </span>
                    <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                        AI & Full-Stack Software Engineer
                    </p>
                    <p className="mx-auto mt-2 max-w-md text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                        Building intelligent AI products, RAG pipelines, and high-performance web applications.
                    </p>
                </div>

                {/* Centered Contact & Social Pills */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-sans">
                    <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 font-bold text-slate-800 dark:text-slate-200 shadow-xs hover:border-blue-500/50 hover:text-blue-600 transition-all"
                    >
                        <FaEnvelope className="text-blue-600 dark:text-blue-400" size={13} />
                        <span>{contact.email}</span>
                    </a>

                    <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 font-bold text-slate-800 dark:text-slate-200 shadow-xs hover:border-blue-500/50 hover:text-blue-600 transition-all"
                    >
                        <FaPhone className="text-blue-600 dark:text-blue-400" size={13} />
                        <span>{contact.phone}</span>
                    </a>

                    <div className="inline-flex items-center gap-2">
                        <a
                            href="https://www.linkedin.com/in/dhineshbuilder/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-600 transition-all shadow-xs"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={13} />
                        </a>
                        <a
                            href="https://github.com/dhineshbuilder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-600 transition-all shadow-xs"
                            aria-label="GitHub"
                        >
                            <FaGithub size={13} />
                        </a>
                    </div>
                </div>

                {/* Sub-Footer Copyright */}
                <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] font-mono text-slate-400">
                    <p>&copy; {new Date().getFullYear()} {hero.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
