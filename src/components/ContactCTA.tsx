"use client";

import { useState } from "react";

export default function ContactCTA() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

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
          from_name: "Dhinesh Portfolio Contact Form",
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
      setErrorMessage("Network error. Please reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-[#bfd8f6]/60"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-slate-800 bg-[#f8fbfe] border border-[#bfd8f6] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for New Projects &amp; Roles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.1]">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Have a project in mind, mobile app, realistic AI video commercial, or engineering role? Send a message below or reach out directly.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DUAL-COLUMN LAYOUT (Like the Contact Page)                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: Send a Message Form (7 cols)                               */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,112,243,0.06)]">
              {/* Form Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-[#e2ecf8] mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    I usually respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="cta-name" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Your Name <span className="text-[#0070f3]">*</span>
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="cta-email" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Email Address <span className="text-[#0070f3]">*</span>
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="cta-subject" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Subject
                  </label>
                  <input
                    id="cta-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Mobile App / Web Platform / AI Video Ad Commission"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="cta-message" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Message <span className="text-[#0070f3]">*</span>
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, mobile app, AI video ad, timeline, or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#bfd8f6] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all shadow-2xs resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0070f3] to-[#00c2ff] text-white font-bold text-sm shadow-[0_8px_25px_rgba(0,112,243,0.25)] hover:shadow-[0_12px_32px_rgba(0,112,243,0.35)] transition-all cursor-pointer group ${
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

                {/* Success Feedback */}
                {submitStatus === "success" && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start justify-between gap-3 animate-in fade-in">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold">Thank you! Your message was sent successfully.</p>
                        <p className="text-xs text-emerald-700/90 pt-0.5">I will review your message and reply within 24 hours.</p>
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

                {/* Error Feedback */}
                {submitStatus === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start justify-between gap-3 animate-in fade-in">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-bold">Message could not be delivered.</p>
                        <p className="text-xs text-rose-700/90 pt-0.5">{errorMessage || "Please email me directly."}</p>
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
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Contact Information Cards (5 cols)                         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Header */}
            <div className="flex items-center gap-3 pb-1 px-1">
              <div className="w-10 h-10 rounded-xl bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="16" rx="3" strokeWidth={1.9} />
                  <circle cx="9" cy="10" r="2.5" strokeWidth={1.9} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M15 9h2m-2 4h2M6 16.5c.8-1.5 2-2 3-2s2.2.5 3 2m3-2.5h2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-500">
                  Direct reach-out channels
                </p>
              </div>
            </div>

            {/* CARD 1: Email */}
            <div className="group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-5 hover:border-[#0070f3] hover:shadow-[0_6px_20px_rgba(0,112,243,0.08)] transition-all text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#edf5fe] border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
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
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0070f3] transition-colors block truncate"
                  >
                    {emailAddress}
                  </a>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0070f3] hover:bg-[#005bb5] shadow-xs hover:shadow transition-all active:scale-95"
                    >
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
                      {copiedEmail ? "Copied!" : "Copy Address"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Phone & WhatsApp */}
            <div className="group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-5 hover:border-[#0070f3] hover:shadow-[0_6px_20px_rgba(0,112,243,0.08)] transition-all text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#edf5fe] border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>

                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {phoneNumber}
                  </span>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <a
                      href={`https://wa.me/${phoneClean}?text=${encodeURIComponent("Hi Dhinesh, I saw your portfolio and would like to connect.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300 shadow-xs transition-all active:scale-95"
                    >
                      <span>WhatsApp</span>
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
                      {copiedPhone ? "Copied!" : "Copy Number"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Location & Profiles */}
            <div className="group rounded-2xl border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 bg-[#f8fbfe] p-5 hover:border-[#0070f3] hover:shadow-[0_6px_20px_rgba(0,112,243,0.08)] transition-all text-left space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#edf5fe] border border-[#bfd8f6] text-[#0070f3] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Location &amp; Remote
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    Chennai, Tamil Nadu, India
                  </span>
                  <p className="text-xs text-slate-500">
                    Open to Onsite, Hybrid &amp; Global Remote Roles
                  </p>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="pt-2 border-t border-[#e2ecf8] grid grid-cols-2 gap-2">
                <a
                  href="https://www.linkedin.com/in/dhineshdevtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-white border border-[#bfd8f6] hover:border-[#0070f3] hover:bg-[#f0f7ff] transition-all flex items-center justify-between group/link"
                >
                  <span className="text-xs font-bold text-slate-700 group-hover/link:text-[#0070f3]">
                    LinkedIn
                  </span>
                  <span className="text-xs text-[#0070f3]">↗</span>
                </a>

                <a
                  href="https://github.com/dhineshdevtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-white border border-[#bfd8f6] hover:border-[#0070f3] hover:bg-[#f0f7ff] transition-all flex items-center justify-between group/link"
                >
                  <span className="text-xs font-bold text-slate-700 group-hover/link:text-[#0070f3]">
                    GitHub
                  </span>
                  <span className="text-xs text-[#0070f3]">↗</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
