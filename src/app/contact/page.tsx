"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "dhineshbuilder@gmail.com";
  const phoneNumber = "+91 90258 73422";
  const phoneClean = "919025873422";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // Graceful fallback to mailto if key is not yet set in .env.local
    if (!accessKey || accessKey.includes("your_web3forms_access_key")) {
      const mailtoSubject = encodeURIComponent(
        formData.subject || `Project Inquiry from ${formData.name}`
      );
      const mailtoBody = encodeURIComponent(
        `Hi Dhinesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: "Dhinesh Portfolio",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again or reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00f2fe]/30 selection:text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden">
        {/* Apple-style gradient section boundary line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

        {/* Ambient cyber blue / azure background glow */}
        <div className="absolute top-20 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#00f2fe]/10 via-[#0070f3]/6 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-[#0070f3]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* ========================================================================= */}
          {/* 1. HERO SECTION: "Get in Touch"                                            */}
          {/* ========================================================================= */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeUp delay={0} duration={600}>
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-slate-900 tracking-tight leading-[1.08]">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={80} duration={700}>
              <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Have a product idea, mobile app, business system, or software project in mind? I build cross-platform mobile apps, websites, business software, and admin panels — fill out the form below or reach out directly.
              </p>
            </FadeUp>
          </div>

          {/* ========================================================================= */}
          {/* 2. DUAL-COLUMN LAYOUT: Send a Message (Left) & Contact Information (Right) */}
          {/* Standardized card styling: rounded-2xl border-2 border-[#bfd8f6] ring-1    */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            {/* LEFT COLUMN (7 cols): Send a Message Form */}
            <FadeUp delay={100} duration={700} className="lg:col-span-7">
              <div className="rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,112,243,0.06)]">
                {/* Form Header */}
                <div className="flex items-center gap-3 pb-6 border-b border-[#e2ecf8] mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      I usually respond within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Your Name <span className="text-[#0070f3]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Email Address <span className="text-[#0070f3]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Role Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Message <span className="text-[#0070f3]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, tech stack, or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#0070f3] to-[#00c2ff] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(0,112,243,0.3)] hover:shadow-[0_14px_40px_rgba(0,112,243,0.45)] transition-all cursor-pointer group ${
                        isSubmitting
                          ? "opacity-75 cursor-not-allowed pointer-events-none"
                          : "hover:scale-[1.01] active:scale-[0.99]"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                          </svg>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Feedback Notifications */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start justify-between gap-3 animate-in fade-in">
                      <div className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <p className="font-bold">Thank you! Your message was sent successfully.</p>
                          <p className="text-xs text-emerald-700/90 pt-0.5">I will review your message and get back to you within 24 hours.</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus("idle")}
                        className="text-emerald-700 hover:text-emerald-900 font-bold p-1 cursor-pointer"
                        title="Dismiss"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start justify-between gap-3 animate-in fade-in">
                      <div className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold">Message could not be delivered.</p>
                          <p className="text-xs text-rose-700/90 pt-0.5">{errorMessage || "Please try again or email me directly."}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus("idle")}
                        className="text-rose-700 hover:text-rose-900 font-bold p-1 cursor-pointer"
                        title="Dismiss"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </FadeUp>

            {/* RIGHT COLUMN (5 cols): Contact Information Stack (No Availability) */}
            <FadeUp delay={160} duration={700} className="lg:col-span-5 space-y-5">
              {/* Header Title */}
              <div className="flex items-center gap-3 pb-2 px-1">
                <div className="w-10 h-10 rounded-xl bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="16" rx="3" strokeWidth={1.9} />
                    <circle cx="9" cy="10" r="2.5" strokeWidth={1.9} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M15 9h2m-2 4h2M6 16.5c.8-1.5 2-2 3-2s2.2.5 3 2m3-2.5h2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Contact Information
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Direct reach-out channels
                  </p>
                </div>
              </div>

              {/* CARD 1: Email */}
              <div className="group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-5 sm:p-6 hover:border-[#0070f3] hover:shadow-[0_6px_20px_rgba(0,112,243,0.08)] transition-all text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#edf5fe] border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0070f3] transition-colors block truncate"
                    >
                      {emailAddress}
                    </a>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${emailAddress}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0070f3] hover:bg-[#005bb5] shadow-xs hover:shadow transition-all active:scale-95"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Send Email</span>
                        <span className="text-[10px] opacity-80">↗</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                          copiedEmail
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                            : "bg-white text-slate-700 border border-[#bfd8f6] hover:bg-[#f0f7ff] hover:text-[#0070f3] hover:border-[#0070f3]"
                        }`}
                      >
                        {copiedEmail ? (
                          <>
                            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0070f3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: Phone & WhatsApp */}
              <div className="group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-5 sm:p-6 hover:border-[#0070f3] hover:shadow-[0_6px_20px_rgba(0,112,243,0.08)] transition-all text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#edf5fe] border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${phoneClean}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0070f3] transition-colors block"
                    >
                      {phoneNumber}
                    </a>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={`https://wa.me/${phoneClean}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300 shadow-xs transition-all active:scale-95"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Chat on WhatsApp</span>
                        <span className="text-[10px] opacity-80">↗</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                          copiedPhone
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                            : "bg-white text-slate-700 border border-[#bfd8f6] hover:bg-[#f0f7ff] hover:text-[#0070f3] hover:border-[#0070f3]"
                        }`}
                      >
                        {copiedPhone ? (
                          <>
                            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0070f3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Copy Number</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Location */}
              <div className="group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-5 sm:p-6 hover:border-[#0070f3] hover:shadow-[0_6px_20px_rgba(0,112,243,0.08)] transition-all text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#edf5fe] border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 block">
                      Tamil Nadu, India
                    </span>
                    <p className="text-xs text-slate-500 pt-0.5">
                      Open to Onsite, Hybrid &amp; Global Remote Roles
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ========================================================================= */}
          {/* 3. CONNECT ON SOCIAL MEDIA GRID: DIRECTLY INSPIRED BY REFERENCE           */}
          {/* Standardized card styling: rounded-2xl border-2 border-[#bfd8f6] ring-1    */}
          {/* ========================================================================= */}
          <div className="pt-8 sm:pt-10 border-t border-[#d8e6f7] space-y-8 sm:space-y-10 text-center">
            {/* Section Header */}
            <FadeUp delay={0}>
              <div className="space-y-2 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Connect on{" "}
                  <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
                    Social Media
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Follow me on developer platforms for source code releases, technical updates, and engineering discussions.
                </p>
              </div>
            </FadeUp>

            {/* Social Grid (Responsive: 2 cols on mobile, 3 on tablet, 5 on desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {/* LinkedIn */}
              <FadeUp delay={60} className="h-full">
                <a
                  href="https://www.linkedin.com/in/dhineshdevtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 hover:border-[#0070f3] hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0070f3] group-hover:text-white transition-all shadow-2xs">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.54-1.54 1.54 1.54 0 0 0-3.08 0c0 .85.69 1.54 1.54 1.54m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">@dhineshdevtech</span>
                  </div>
                </a>
              </FadeUp>

              {/* GitHub */}
              <FadeUp delay={120} className="h-full">
                <a
                  href="https://github.com/dhineshdevtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 hover:border-[#0070f3] hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-2xs">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors block">
                      GitHub
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">@dhineshdevtech</span>
                  </div>
                </a>
              </FadeUp>

              {/* WhatsApp */}
              <FadeUp delay={180} className="h-full">
                <a
                  href={`https://wa.me/${phoneClean}?text=Hi%20Dhinesh,%20I%20viewed%20your%20portfolio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 hover:border-emerald-500 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#bfd8f6] text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6-.1.48-.3 1.47-1.2 1.67-1.78.21-.57.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors block">
                      WhatsApp
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">+91 90258 73422</span>
                  </div>
                </a>
              </FadeUp>

              {/* Email Direct */}
              <FadeUp delay={240} className="h-full">
                <a
                  href={`mailto:${emailAddress}`}
                  className="h-full group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 hover:border-[#0070f3] hover:shadow-[0_8px_25px_rgba(0,112,243,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0070f3] group-hover:text-white transition-all shadow-2xs">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors block">
                      Direct Email
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Compose ↗</span>
                  </div>
                </a>
              </FadeUp>

              {/* Instagram */}
              <FadeUp delay={300} className="h-full col-span-2 sm:col-span-1">
                <a
                  href="https://www.instagram.com/dhinesh.devtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 hover:border-pink-500 hover:shadow-[0_8px_25px_rgba(236,72,153,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#bfd8f6] text-pink-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all shadow-2xs">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors block">
                      Instagram
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">@dhinesh.devtech</span>
                  </div>
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
