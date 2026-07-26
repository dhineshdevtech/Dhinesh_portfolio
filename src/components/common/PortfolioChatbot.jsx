import { useEffect, useMemo, useRef, useState } from "react";
import {
    FaArrowUpRightFromSquare,
    FaCheck,
    FaCopy,
    FaPaperPlane,
    FaRobot,
    FaTrash,
    FaXmark,
} from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";

const QUICK_PROMPTS = [
    { label: "Best Projects", prompt: "Show me your best projects" },
    { label: "Tech Stack", prompt: "What technologies do you use?" },
    { label: "Achievements", prompt: "What are your achievements?" },
    { label: "Contact Info", prompt: "How can I contact you?" },
];

const REFUSAL_TEXT =
    "I am AIRA, Dhinesh's AI portfolio assistant. I am specialized to talk only about Dhinesh, his projects, skills, achievements, background, and contact information.";

const createMessageId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getTimeLabel = () =>
    new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

const createBotMessage = (content, enhancement = null, question = "") => ({
    id: createMessageId(),
    role: "assistant",
    content,
    enhancement,
    question,
    time: getTimeLabel(),
});

const createUserMessage = (content) => ({
    id: createMessageId(),
    role: "user",
    content,
    time: getTimeLabel(),
});

const INITIAL_BOT_MESSAGE = {
    id: "welcome-message",
    role: "assistant",
    content: "Hi! I'm AIRA, Dhinesh's AI Assistant. Ask me anything about projects, skills, or experience.",
    enhancement: null,
    time: getTimeLabel(),
};

const normalize = (value = "") => value.toLowerCase();

const isProjectPrompt = (question = "") => {
    const text = normalize(question);
    return ["project", "projects", "product", "saas", "ai project", "best", "strongest"].some((term) => text.includes(term));
};

const isAchievementPrompt = (question = "") => {
    const text = normalize(question);
    return ["achievement", "award", "hackathon", "won", "winner", "recognition", "certificate"].some((term) => text.includes(term));
};

const isSkillsPrompt = (question = "") => {
    const text = normalize(question);
    return ["skill", "stack", "technology", "technologies"].some((term) => text.includes(term));
};

const pickEnhancement = (question) => {
    if (isProjectPrompt(question)) return "projects";
    if (isAchievementPrompt(question)) return "achievements";
    if (isSkillsPrompt(question)) return "skills";
    return null;
};

const getProjectMatches = (question, projects = []) => {
    const text = normalize(question);
    const featured = projects.filter((project) => project.featured);
    const exactMatches = projects.filter((project) => {
        const haystack = normalize([
            project.title,
            project.description,
            project.problem,
            ...(project.features || []),
            ...(project.tech || []),
        ].join(" "));

        return text
            .split(/[^a-z0-9]+/g)
            .filter((word) => word.length > 3)
            .some((word) => haystack.includes(word));
    });

    const source = exactMatches.length ? exactMatches : featured;
    return source.slice(0, 2);
};

const buildAchievementItems = (timelineItems = []) => {
    const records = [];
    let currentYear = "";

    timelineItems.forEach((item) => {
        if (item.type !== "checkpoint") return;

        if (!item.shouldDrawLine) {
            currentYear = item.title;
            return;
        }

        records.push({
            ...item,
            year: currentYear,
        });
    });

    return records.slice(0, 2);
};

const AiraAvatar = () => (
    <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
        <FaRobot className="text-xs" />
    </div>
);

const ProjectMiniCard = ({ project }) => {
    const primaryLink = project.demo || project.playStore || project.github;

    return (
        <article className="mt-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                {project.title}
            </h4>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                {project.description}
            </p>
            {primaryLink && (
                <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                    <span>View Project</span>
                    <FaArrowUpRightFromSquare size={9} />
                </a>
            )}
        </article>
    );
};

const AchievementMiniCard = ({ item }) => (
    <article className="mt-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5">
        <div className="flex items-center gap-2">
            <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">
                {item.year}
            </span>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {item.title}
            </h4>
        </div>
        <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
            {item.subtitle}
        </p>
    </article>
);

const MessageEnhancement = ({ type, question, content }) => {
    if (type === "projects") {
        const cards = getProjectMatches(question, content.projects.items);
        return (
            <div className="space-y-1.5">
                {cards.map((project) => (
                    <ProjectMiniCard key={project.title} project={project} />
                ))}
            </div>
        );
    }

    if (type === "achievements") {
        const achievements = buildAchievementItems(content.timeline?.items || []);
        return (
            <div className="space-y-1.5">
                {achievements.map((item) => (
                    <AchievementMiniCard key={`${item.year}-${item.title}`} item={item} />
                ))}
            </div>
        );
    }

    return null;
};

const ChatMessage = ({ message, content, onCopy, copiedId, onPromptClick, isFirst }) => {
    const isUser = message.role === "user";

    if (isUser) {
        return (
            <div className="flex justify-end">
                <div className="max-w-[85%]">
                    <div className="rounded-2xl rounded-tr-xs bg-blue-600 dark:bg-blue-500 px-4 py-2.5 text-xs sm:text-sm leading-relaxed text-white shadow-sm">
                        <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-start gap-2.5">
            <AiraAvatar />
            <div className="min-w-0 flex-1">
                <div className="rounded-2xl rounded-tl-xs border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                        <p className="whitespace-pre-line">{message.content}</p>
                        {!isFirst && (
                            <button
                                type="button"
                                onClick={() => onCopy(message)}
                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"
                                aria-label="Copy message"
                            >
                                {copiedId === message.id ? <FaCheck size={10} className="text-emerald-500" /> : <FaCopy size={10} />}
                            </button>
                        )}
                    </div>
                    <MessageEnhancement type={message.enhancement} question={message.question} content={content} />
                </div>

                {isFirst && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {QUICK_PROMPTS.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => onPromptClick(item.prompt)}
                                className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const PortfolioChatbot = () => {
    const { content } = useContent();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_BOT_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copiedId, setCopiedId] = useState("");
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    const visibleHistory = useMemo(
        () => messages.map(({ role, content: messageContent }) => ({ role, content: messageContent })),
        [messages]
    );

    const scrollToBottom = (behavior = "smooth") => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior,
        });
    };

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener("openPortfolioChat", handleOpenChat);
        return () => window.removeEventListener("openPortfolioChat", handleOpenChat);
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.setTimeout(() => scrollToBottom("smooth"), 40);
            window.setTimeout(() => inputRef.current?.focus(), 150);
        }
    }, [messages, isOpen]);

    const resetChat = () => {
        setMessages([INITIAL_BOT_MESSAGE]);
        setInput("");
    };

    const copyMessage = async (message) => {
        await navigator.clipboard.writeText(message.content);
        setCopiedId(message.id);
        window.setTimeout(() => setCopiedId(""), 1300);
    };

    const sendMessage = async (question = input) => {
        const cleanQuestion = question.trim();

        if (!cleanQuestion || isLoading) return;

        const userMessage = createUserMessage(cleanQuestion);
        setMessages((current) => [...current, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: cleanQuestion,
                    history: visibleHistory.slice(-6),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.answer || "Service unavailable.");
            }

            const enhancement = data.answer === REFUSAL_TEXT ? null : pickEnhancement(cleanQuestion);

            setMessages((current) => [
                ...current,
                createBotMessage(data.answer, enhancement, cleanQuestion),
            ]);
        } catch (requestError) {
            const fallback = requestError.message || "Could not connect to AIRA right now.";

            setMessages((current) => [
                ...current,
                createBotMessage(fallback, null, cleanQuestion),
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
            {/* Enlarged Comfortable Chat Modal Window */}
            {isOpen && (
                <div className="flex h-[min(480px,calc(100svh-6rem))] w-[calc(100vw-2.5rem)] max-w-[23.5rem] flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-2xl animate-[fadeIn_150ms_ease-out] sm:w-[23.5rem]">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3">
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>
                            <div>
                                <h2 className="text-sm font-bold text-slate-900 dark:text-white font-display leading-none">
                                    Ask AIRA
                                </h2>
                                <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                                    Dhinesh AI Assistant
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            {messages.length > 1 && (
                                <button
                                    type="button"
                                    onClick={resetChat}
                                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                                    title="Reset chat"
                                >
                                    <FaTrash size={11} />
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                                aria-label="Close"
                            >
                                <FaXmark size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto scroll-smooth px-4 py-4 space-y-4"
                    >
                        {messages.map((message, index) => (
                            <ChatMessage
                                key={message.id}
                                message={message}
                                content={content}
                                copiedId={copiedId}
                                onCopy={copyMessage}
                                onPromptClick={sendMessage}
                                isFirst={index === 0}
                            />
                        ))}

                        {isLoading && (
                            <div className="flex items-center gap-2 text-xs text-slate-400 px-1">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                                <span>AIRA is thinking...</span>
                            </div>
                        )}
                    </div>

                    {/* Input Bar */}
                    <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                        <form onSubmit={handleSubmit} className="flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                placeholder="Ask AIRA a question..."
                                className="flex-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500"
                            />

                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-sm hover:bg-blue-700 disabled:opacity-40"
                                aria-label="Send"
                            >
                                <FaPaperPlane size={12} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Redesigned Larger Floating Circular FAB Launcher */}
            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/40 dark:border-slate-700/60 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Open Ask AIRA Chat"
                    title="Ask AIRA"
                >
                    <FaRobot className="text-xl sm:text-2xl transition-transform group-hover:scale-110" />
                    <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-white dark:ring-slate-950" />
                    </span>
                </button>
            )}
        </div>
    );
};

export default PortfolioChatbot;
