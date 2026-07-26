import { useState } from "react";
import {
    FaCopy,
    FaCheck,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaLocationDot,
    FaPaperPlane,
    FaPhone,
} from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";

const Contact = () => {
    const { content } = useContent();
    const { contact, hero } = content;
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ submitting: false, succeeded: false, error: null });
    const [copiedKey, setCopiedKey] = useState("");

    const handleCopy = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(""), 2500);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ submitting: true, succeeded: false, error: null });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "23080794-795b-4123-89c8-4049d1047805",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New message from ${formData.name} — Dhinesh Portfolio`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ submitting: false, succeeded: true, error: null });
                setFormData({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setStatus((currentStatus) => ({ ...currentStatus, succeeded: false }));
                }, 5000);
            } else {
                throw new Error(result.message || "Submission failed");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus({
                submitting: false,
                succeeded: false,
                error: "Failed to send. Please try again.",
            });
        }
    };

    return (
        <section
            id="contact"
            className="relative border-b border-slate-200/60 dark:border-slate-800/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Main HR Contact Container */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
                    {/* Left Column: HR Direct Contact Info (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                                <span>Get in Touch</span>
                            </div>

                            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl font-display">
                                Let's Build Something Impactful
                            </h2>

                            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                                Available for full-time AI & Full-Stack engineering roles, project building, and technical discussions.
                            </p>
                        </div>

                        {/* HR Direct Contact Cards */}
                        <div className="space-y-3 pt-2">
                            {/* Email Card */}
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                        <FaEnvelope size={15} />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                                        <a href={`mailto:${contact.email}`} className="block truncate text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                                            {contact.email}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(contact.email, "email")}
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-all cursor-pointer"
                                    title="Copy Email"
                                >
                                    {copiedKey === "email" ? <FaCheck className="text-emerald-500 text-xs" /> : <FaCopy size={11} />}
                                </button>
                            </div>

                            {/* Phone Card */}
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                        <FaPhone size={15} />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Phone</p>
                                        <a href={`tel:${contact.phone}`} className="block truncate text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                                            {contact.phone}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(contact.phone, "phone")}
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-all cursor-pointer"
                                    title="Copy Phone"
                                >
                                    {copiedKey === "phone" ? <FaCheck className="text-emerald-500 text-xs" /> : <FaCopy size={11} />}
                                </button>
                            </div>

                            {/* Location Card */}
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                    <FaLocationDot size={15} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Location</p>
                                    <p className="truncate text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{contact.address}</p>
                                </div>
                            </div>
                        </div>


                        {/* Social Links */}
                        <div className="pt-2 flex items-center gap-2">
                            <a
                                href="https://www.linkedin.com/in/dhineshbuilder/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={14} />
                            </a>
                            <a
                                href="https://github.com/dhineshbuilder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub size={14} />
                            </a>
                        </div>
                    </div>


                    {/* Right Column: Form OR Success State */}
                    <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm min-h-[420px] flex flex-col justify-center">

                        {/* ✅ Success State */}
                        {status.succeeded ? (
                            <div className="flex flex-col items-center justify-center gap-5 text-center py-8">
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute h-24 w-24 rounded-full bg-emerald-500/10 animate-ping opacity-40" />
                                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-lg">
                                        <FaCheck size={32} />
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                                        Message Sent!
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-sans max-w-xs mx-auto leading-relaxed">
                                        Thanks for reaching out! I'll get back to you at <span className="font-bold text-blue-600 dark:text-blue-400">{contact.email}</span> as soon as possible.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Delivered to inbox · dhineshbuilder@gmail.com</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-5">
                                    Send a Direct Message
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="mb-1.5 block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                            {contact.labels.name || "Your Name"}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20"
                                            placeholder={contact.placeholders.name || "Enter your full name"}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-1.5 block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                            {contact.labels.email || "Your Email"}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20"
                                            placeholder={contact.placeholders.email || "name@example.com"}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="mb-1.5 block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                            {contact.labels.message || "Message"}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20"
                                            placeholder={contact.placeholders.message || "Tell me about your opportunity or project..."}
                                        />
                                    </div>

                                    {status.error && (
                                        <p className="text-xs font-mono font-bold text-rose-500">{status.error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className="group btn-primary w-full justify-center py-3.5 cursor-pointer"
                                    >
                                        <span className="font-bold text-sm">
                                            {status.submitting
                                                ? contact.labels.submitLoading || "Sending..."
                                                : contact.labels.submitIdle || "Send Message"}
                                        </span>
                                        <span className="btn-icon-circle">
                                            <FaPaperPlane size={11} />
                                        </span>
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
