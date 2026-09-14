import fs from "node:fs";
import path from "node:path";

const GROQ_CHAT_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODELS_URL = "https://api.groq.com/openai/v1/models";
const DEFAULT_MODEL = "groq/compound-mini";

const DECOMMISSIONED_MODELS = new Set([
    "llama-3.1-8b-instant",
    "llama-3.3-70b-versatile",
    "llama3-8b-8192",
    "llama3-70b-8192",
    "gemma2-9b-it",
    "deepseek-r1-distill-llama-70b",
]);

const PRIORITY_MODELS = [
    "groq/compound-mini",
    "groq/compound",
    "openai/gpt-oss-120b",
    "openai/gpt-oss-20b",
    "qwen/qwen3.6-27b",
    "mixtral-8x7b-32768",
];

let discoveredWorkingModel = null;
let cachedAvailableModels = null;
let lastModelsFetchTime = 0;
let cachedKnowledgeBase = null;

const ROOT_DIR = process.cwd();
const MAX_FILE_BYTES = 700_000;
const MAX_CHUNKS = 4;
const REFUSAL_TEXT =
    "I am AIRA, Dhinesh's AI portfolio assistant. I am specialized to talk only about Dhinesh, his projects, skills, achievements, background, and contact information.";

const TEXT_EXTENSIONS = new Set([
    ".css",
    ".html",
    ".js",
    ".jsx",
    ".json",
    ".md",
    ".svg",
    ".txt",
]);

const IMAGE_EXTENSIONS = new Set([".jpeg", ".jpg", ".png", ".webp"]);

const SEARCH_ROOTS = [
    "README.md",
    "index.html",
    "package.json",
    "src",
    "public",
];

const SKIP_DIRS = new Set([
    ".git",
    ".vercel",
    "dist",
    "dist-ssr",
    "node_modules",
]);

const RAW_PUBLIC_FOLDERS_TO_SKIP = [
    `${path.sep}public${path.sep}certificates${path.sep}`,
    `${path.sep}public${path.sep}timeline_images${path.sep}`,
];

const ALLOWED_BADGES = [
    "Project",
    "Skills",
    "Achievement",
    "Resume",
    "About",
    "Contact",
    "Certification",
    "Timeline",
    "Education",
    "Website",
];

const PORTFOLIO_TERMS = [
    "about",
    "achievement",
    "achievements",
    "ai",
    "aira",
    "attendance",
    "award",
    "awards",
    "background",
    "bio",
    "builder",
    "bus",
    "canteen",
    "certificate",
    "certificates",
    "certification",
    "code",
    "college",
    "contact",
    "demo",
    "developer",
    "dhinesh",
    "education",
    "email",
    "engineer",
    "experience",
    "frontend",
    "fullstack",
    "github",
    "hackathon",
    "hackathons",
    "hello",
    "hey",
    "hi",
    "hire",
    "info",
    "interview",
    "introduce",
    "invoice",
    "job",
    "known",
    "linkedin",
    "location",
    "mpnmjec",
    "name",
    "phone",
    "portfolio",
    "profile",
    "project",
    "projects",
    "qualifications",
    "quiz",
    "resume",
    "role",
    "saas",
    "school",
    "services",
    "sixquest",
    "skill",
    "skills",
    "stack",
    "tech",
    "technologies",
    "technology",
    "tell",
    "timeline",
    "trainer",
    "training",
    "vanakkam",
    "who",
    "work",
    "you",
    "yourself",
];

const OFF_TOPIC_TERMS = [
    "weather",
    "recipe",
    "cook",
    "president",
    "football",
    "cricket score",
    "movie",
    "capital of",
    "quantum physics",
    "write a script for",
    "solve calculus",
];

const normalizeSlashes = (value) => value.replaceAll("\\", "/");

const cleanText = (text) =>
    text
        .replace(/\r/g, "\n")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

const tokenize = (text) => {
    const stopWords = new Set([
        "a",
        "an",
        "and",
        "are",
        "can",
        "do",
        "does",
        "for",
        "from",
        "how",
        "i",
        "in",
        "is",
        "me",
        "my",
        "of",
        "on",
        "or",
        "show",
        "tell",
        "the",
        "to",
        "use",
        "what",
        "with",
        "you",
        "your",
    ]);

    return cleanText(text)
        .toLowerCase()
        .split(/[^a-z0-9+#.]+/g)
        .filter((word) => word.length > 1 && !stopWords.has(word));
};

const humanizeFileName = (filePath) => {
    const parsed = path.parse(filePath);
    return parsed.name
        .replace(/[_-]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const inferBadge = (relativePath, text = "") => {
    const haystack = `${relativePath} ${text}`.toLowerCase();

    if (haystack.includes("certificate")) return "Certification";
    if (haystack.includes("timeline") || haystack.includes("achievement") || haystack.includes("hackathon")) return "Achievement";
    if (haystack.includes("education")) return "Education";
    if (haystack.includes("contact") || haystack.includes("email") || haystack.includes("phone")) return "Contact";
    if (haystack.includes("skill") || haystack.includes("stack") || haystack.includes("technology")) return "Skills";
    if (haystack.includes("resume")) return "Resume";
    if (haystack.includes("about") || haystack.includes("profile")) return "About";
    if (haystack.includes("project") || haystack.includes("quiz") || haystack.includes("bus") || haystack.includes("invoice") || haystack.includes("attendance") || haystack.includes("canteen")) return "Project";

    return "Website";
};

const shouldSkipPath = (absolutePath) => {
    const normalized = absolutePath.toLowerCase();

    return RAW_PUBLIC_FOLDERS_TO_SKIP.some((folder) => normalized.includes(folder.toLowerCase()));
};

const readPortfolioFiles = (targetPath, files = []) => {
    const absolutePath = path.resolve(ROOT_DIR, targetPath);

    if (!fs.existsSync(absolutePath) || shouldSkipPath(absolutePath)) {
        return files;
    }

    const stat = fs.statSync(absolutePath);

    if (stat.isDirectory()) {
        if (SKIP_DIRS.has(path.basename(absolutePath))) {
            return files;
        }

        fs.readdirSync(absolutePath)
            .sort()
            .forEach((entry) => readPortfolioFiles(path.join(targetPath, entry), files));

        return files;
    }

    const extension = path.extname(absolutePath).toLowerCase();

    if (TEXT_EXTENSIONS.has(extension) && stat.size <= MAX_FILE_BYTES) {
        files.push({
            path: normalizeSlashes(path.relative(ROOT_DIR, absolutePath)),
            kind: "text",
            content: fs.readFileSync(absolutePath, "utf8"),
        });
    } else if (IMAGE_EXTENSIONS.has(extension)) {
        files.push({
            path: normalizeSlashes(path.relative(ROOT_DIR, absolutePath)),
            kind: "image",
            content: `Image asset: ${humanizeFileName(absolutePath)}. Path: ${normalizeSlashes(path.relative(ROOT_DIR, absolutePath))}.`,
        });
    }

    return files;
};

const chunkText = (file) => {
    const cleaned = cleanText(file.content);
    const badge = inferBadge(file.path, cleaned);

    if (!cleaned) {
        return [];
    }

    const paragraphs = cleaned.split(/\n{2,}/g);
    const chunks = [];
    let buffer = "";

    paragraphs.forEach((paragraph) => {
        const next = buffer ? `${buffer}\n\n${paragraph}` : paragraph;

        if (next.length > 1_450 && buffer) {
            chunks.push(buffer);
            buffer = paragraph;
        } else {
            buffer = next;
        }
    });

    if (buffer) {
        chunks.push(buffer);
    }

    return chunks.map((content, index) => ({
        badge,
        content,
        id: `${file.path}#${index + 1}`,
        path: file.path,
        tokens: tokenize(`${file.path} ${content}`),
    }));
};

const getKnowledgeBase = () => {
    if (!cachedKnowledgeBase) {
        cachedKnowledgeBase = SEARCH_ROOTS.flatMap((root) => readPortfolioFiles(root)).flatMap(chunkText);
    }
    return cachedKnowledgeBase;
};

const scoreChunk = (chunk, queryTokens, queryText) => {
    if (!queryTokens.length) {
        return chunk.path.includes("content.js") ? 2 : 0;
    }

    const tokenSet = new Set(chunk.tokens);
    let score = 0;

    queryTokens.forEach((token) => {
        if (tokenSet.has(token)) score += 3;
        if (chunk.path.toLowerCase().includes(token)) score += 2;
        if (chunk.content.toLowerCase().includes(token)) score += 1;
    });

    const badge = chunk.badge.toLowerCase();
    if (queryText.includes("project") && badge === "project") score += 6;
    if ((queryText.includes("skill") || queryText.includes("technology") || queryText.includes("stack")) && badge === "skills") score += 6;
    if ((queryText.includes("achievement") || queryText.includes("hackathon") || queryText.includes("award")) && badge === "achievement") score += 6;
    if ((queryText.includes("certificate") || queryText.includes("certification")) && badge === "certification") score += 6;
    if ((queryText.includes("contact") || queryText.includes("email") || queryText.includes("phone")) && badge === "contact") score += 6;
    if ((queryText.includes("about") || queryText.includes("who") || queryText.includes("dhinesh")) && badge === "about") score += 5;

    if (chunk.path.includes("src/data/content.js")) score += 4;
    if (chunk.path.includes("src/utils/timelineContent")) score += 2;

    return score;
};

const retrieveContext = (message) => {
    const knowledgeBase = getKnowledgeBase();
    const queryText = message.toLowerCase();
    const queryTokens = tokenize(message);

    const ranked = knowledgeBase
        .map((chunk) => ({
            ...chunk,
            score: scoreChunk(chunk, queryTokens, queryText),
        }))
        .filter((chunk) => chunk.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_CHUNKS);

    const fallback = knowledgeBase
        .filter((chunk) => chunk.path.includes("src/data/content.js"))
        .slice(0, 4);

    return ranked.length ? ranked : fallback;
};

const isPortfolioLikely = (message) => {
    const normalized = message.toLowerCase();

    // Check if explicitly off-topic
    if (OFF_TOPIC_TERMS.some((term) => normalized.includes(term))) {
        return false;
    }

    // Default greetings & general portfolio inquiries
    if (/^(hi|hello|hey|vanakkam|start|help|who are you|tell me|who is dhinesh)[!.\s]*$/i.test(message.trim())) {
        return true;
    }

    return PORTFOLIO_TERMS.some((term) => normalized.includes(term));
};

const safeParseGroqResponse = (content, sourceBadges) => {
    // Resolve any templated contact placeholders that the LLM may output literal string for
    let cleanContent = (content || "")
        .replace(/\[contact\.email\]|\{contact\.email\}/gi, "dhineshbuilder@gmail.com")
        .replace(/\[contact\.phone\]|\{contact\.phone\}/gi, "+91 9025873422")
        .replace(/\[contact\.address\]|\{contact\.address\}/gi, "Tamilnadu, India");

    let fallbackAnswer = cleanText(cleanContent) || "I do not know from the portfolio files yet.";

    // Guard against raw JSON string output in fallback
    if (fallbackAnswer.trim().startsWith("{")) {
        const match = fallbackAnswer.match(/"answer"\s*:\s*"([\s\S]*?)"/);
        if (match && match[1]) {
            fallbackAnswer = cleanText(match[1].replace(/\\n/g, "\n").replace(/\\"/g, '"'));
        }
    }

    const fallback = {
        answer: fallbackAnswer,
        sourceBadges,
    };

    try {
        const jsonStart = cleanContent.indexOf("{");
        const jsonEnd = cleanContent.lastIndexOf("}");

        if (jsonStart === -1 || jsonEnd === -1) {
            return fallback;
        }

        const jsonString = cleanContent.slice(jsonStart, jsonEnd + 1);
        
        let parsed;
        try {
            parsed = JSON.parse(jsonString);
        } catch {
            // Attempt to parse by escaping literal newlines which break native JSON.parse
            const escapedString = jsonString
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r");
            parsed = JSON.parse(escapedString);
        }

        return {
            answer: cleanText(parsed.answer || fallback.answer),
            sourceBadges: Array.isArray(parsed.sourceBadges)
                ? parsed.sourceBadges.filter((badge) => ALLOWED_BADGES.includes(badge)).slice(0, 4)
                : sourceBadges,
        };
    } catch {
        // Fallback to regex extraction if JSON parsing completely fails
        try {
            const answerMatch = cleanContent.match(/"answer"\s*:\s*"([\s\S]*?)"\s*(,|\})/);
            if (answerMatch && answerMatch[1]) {
                const extractedText = answerMatch[1]
                    .replace(/\\n/g, "\n")
                    .replace(/\\"/g, '"');
                return {
                    answer: cleanText(extractedText),
                    sourceBadges,
                };
            }
        } catch (regexError) {
            console.error("Regex backup parsing failed:", regexError);
        }
        
        return fallback;
    }
};

const buildPrompt = ({ message, contextChunks, history }) => {
    const context = contextChunks
        .map((chunk, index) => `[${index + 1}] Badge: ${chunk.badge}\nFile: ${chunk.path}\n${chunk.content}`)
        .join("\n\n---\n\n");

    const recentConversation = (history || [])
        .slice(-6)
        .map((item) => `${item.role === "user" ? "Visitor" : "Assistant"}: ${cleanText(item.content || "")}`)
        .join("\n");

    return [
        {
            role: "system",
            content: [
                "You are AIRA, the dedicated AI Portfolio Assistant for Dhinesh V (AI Software Engineer & Full-Stack Developer).",
                "Your SOLE Purpose is to tell visitors about Dhinesh: his background, projects, technical skills, hackathon wins, education, experience, resume, and contact details.",
                "ALWAYS speak about Dhinesh with high confidence, accuracy, and enthusiasm to anyone visiting his portfolio.",
                "STRICT BOUNDARY: You must NEVER discuss off-topic subjects (e.g. general math homework, sports scores, recipes, politics, general coding tutorials unrelated to Dhinesh).",
                `If the visitor asks an off-topic question, respond exactly with: "${REFUSAL_TEXT}"`,
                "Use only the provided PORTFOLIO_CONTEXT. Never invent false facts about Dhinesh.",
                "Keep your answers concise, engaging, recruiter-friendly, and well-structured.",
                `Return JSON only with this shape: {"answer":"short answer","sourceBadges":["Project"]}. Badges can only be: ${ALLOWED_BADGES.join(", ")}.`,
            ].join("\n"),
        },
        {
            role: "user",
            content: [
                "PORTFOLIO_CONTEXT:",
                context,
                recentConversation ? `RECENT_CONVERSATION:\n${recentConversation}` : "",
                `VISITOR_QUESTION:\n${message}`,
            ].filter(Boolean).join("\n\n"),
        },
    ];
};

const getCandidateModels = async (apiKey) => {
    const now = Date.now();
    const list = [];

    const envModel = process.env.GROQ_MODEL;
    if (envModel && !DECOMMISSIONED_MODELS.has(envModel)) {
        list.push(envModel);
    }

    if (discoveredWorkingModel && !list.includes(discoveredWorkingModel)) {
        list.push(discoveredWorkingModel);
    }

    // Return cached dynamic models if fetched within the last 10 minutes
    if (cachedAvailableModels && now - lastModelsFetchTime < 10 * 60 * 1000) {
        for (const model of cachedAvailableModels) {
            if (!list.includes(model)) {
                list.push(model);
            }
        }
        return list.length ? list : [DEFAULT_MODEL];
    }

    try {
        const response = await fetch(GROQ_MODELS_URL, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data?.data)) {
                const activeChatModels = data.data
                    .map((m) => m.id)
                    .filter((id) => {
                        if (DECOMMISSIONED_MODELS.has(id)) return false;
                        const lower = id.toLowerCase();
                        return (
                            !lower.includes("whisper") &&
                            !lower.includes("guard") &&
                            !lower.includes("embed") &&
                            !lower.includes("tts") &&
                            !lower.includes("orpheus") &&
                            !lower.includes("speech") &&
                            !lower.includes("audio") &&
                            !lower.includes("voice")
                        );
                    });

                const dynamicPriority = [];
                for (const priority of PRIORITY_MODELS) {
                    if (activeChatModels.includes(priority)) {
                        dynamicPriority.push(priority);
                    }
                }
                for (const modelId of activeChatModels) {
                    if (!dynamicPriority.includes(modelId)) {
                        dynamicPriority.push(modelId);
                    }
                }

                cachedAvailableModels = dynamicPriority;
                lastModelsFetchTime = now;

                for (const model of dynamicPriority) {
                    if (!list.includes(model)) {
                        list.push(model);
                    }
                }
            }
        }
    } catch (error) {
        console.warn("Could not query dynamic Groq models list:", error.message);
    }

    for (const priority of PRIORITY_MODELS) {
        if (!list.includes(priority)) {
            list.push(priority);
        }
    }

    return list.length ? list : [DEFAULT_MODEL];
};

export default async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.status(204).end();
        return;
    }

    if (req.method !== "POST") {
        res.status(405).json({ answer: "Method not allowed.", sourceBadges: [] });
        return;
    }

    let body = req.body;
    if (typeof body === "string") {
        try {
            body = JSON.parse(body);
        } catch {
            body = {};
        }
    }

    const apiKey = process.env.GROQ_API_KEY;
    const message = cleanText(body?.message || "");
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
        res.status(400).json({ answer: "Please ask a question about Dhinesh.", sourceBadges: [] });
        return;
    }

    if (!isPortfolioLikely(message)) {
        res.status(200).json({ answer: REFUSAL_TEXT, sourceBadges: [] });
        return;
    }

    if (!apiKey) {
        res.status(503).json({
            answer: "The portfolio chatbot is not connected yet because GROQ_API_KEY is missing on the server.",
            sourceBadges: ["Website"],
        });
        return;
    }

    const contextChunks = retrieveContext(message);
    const sourceBadges = [...new Set(contextChunks.map((chunk) => chunk.badge))].slice(0, 4);

    try {
        const candidateModels = await getCandidateModels(apiKey);
        const promptMessages = buildPrompt({ message, contextChunks, history });

        let groqResponse = null;
        let lastErrorText = "";

        for (const currentModel of candidateModels) {
            try {
                const response = await fetch(GROQ_CHAT_URL, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: currentModel,
                        messages: promptMessages,
                        temperature: 0.15,
                        max_tokens: 650,
                    }),
                });

                if (response.ok) {
                    groqResponse = response;
                    discoveredWorkingModel = currentModel;
                    break;
                }

                const errorText = await response.text();
                lastErrorText = `Model '${currentModel}' failed (${response.status}): ${errorText}`;
                console.warn(lastErrorText);

                const isModelOrQuotaError =
                    response.status === 400 ||
                    response.status === 404 ||
                    response.status === 429 ||
                    errorText.includes("model_not_found") ||
                    errorText.includes("model_decommissioned") ||
                    errorText.includes("does not exist") ||
                    errorText.includes("no longer supported") ||
                    errorText.includes("terms required") ||
                    errorText.includes("terms acceptance") ||
                    errorText.includes("rate_limit");

                if (isModelOrQuotaError) {
                    continue; // Try next fallback model
                }

                // If non-recoverable (like bad credentials 401), stop immediately
                throw new Error(lastErrorText);
            } catch (modelError) {
                console.warn(`Error trying model ${currentModel}:`, modelError.message);
                if (candidateModels.indexOf(currentModel) === candidateModels.length - 1) {
                    throw modelError;
                }
            }
        }

        if (!groqResponse) {
            throw new Error(`All candidate Groq models failed. Last error: ${lastErrorText}`);
        }

        const data = await groqResponse.json();
        const content = data.choices?.[0]?.message?.content || "";
        const parsed = safeParseGroqResponse(content, sourceBadges);

        if (parsed.answer === REFUSAL_TEXT) {
            parsed.sourceBadges = [];
        }

        res.status(200).json(parsed);
    } catch (error) {
        console.error("AIRA chat error:", error);
        res.status(502).json({
            answer: "I could not reach AIRA right now. Please try again shortly.",
            sourceBadges: ["Website"],
        });
    }
}
