import { useMemo, useState } from "react";
import { FaAward, FaArrowUpRightFromSquare, FaCalendarDays, FaCheck } from "react-icons/fa6";
import { useLoadMore } from "../../hooks/useLoadMore";
import Modal from "../common/Modal";
import { useContent } from "../../context/ContentContext";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp", ".avif"];

const getCertificateType = (link) => {
    const normalizedLink = (link || "").toLowerCase().split("?")[0].split("#")[0];

    if (normalizedLink.endsWith(".pdf")) return "pdf";
    if (imageExtensions.some((extension) => normalizedLink.endsWith(extension))) return "image";

    return "embed";
};

const getProfessionalBadge = (priority = "", title = "") => {
    const combined = `${priority} ${title}`.toLowerCase();
    if (combined.includes("first prize") || combined.includes("winner") || combined.includes("runner up") || combined.includes("3rd prize") || combined.includes("prize")) {
        return { label: "🏆 Hackathon Award", style: "bg-blue-600 text-white" };
    }
    if (combined.includes("reputed") || combined.includes("cmti") || combined.includes("clinic") || combined.includes("national")) {
        return { label: "🏛️ National Program", style: "bg-indigo-600 text-white" };
    }
    return { label: "📜 Verified Credential", style: "bg-slate-800 dark:bg-slate-700 text-white" };
};

const CertificatePreview = ({ certificate }) => {
    const type = getCertificateType(certificate.link);

    if (type !== "image") {
        return (
            <div className="flex h-full items-center justify-center bg-slate-100 dark:bg-slate-950 text-blue-600 dark:text-blue-400">
                <FaAward className="text-4xl opacity-80" />
            </div>
        );
    }

    return (
        <img
            src={certificate.link}
            alt={certificate.title}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />
    );
};

const HRCertificateCard = ({ certificate, onSelect }) => {
    const badge = getProfessionalBadge(certificate.priority, certificate.title);

    return (
        <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/50">
            <div>
                {/* Certificate Image Thumbnail */}
                <div
                    onClick={() => onSelect(certificate)}
                    className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 mb-4 group/img"
                >
                    <CertificatePreview certificate={certificate} />
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/60 dark:border-slate-700 bg-white/90 dark:bg-slate-950/90 text-blue-600 dark:text-blue-400 shadow-md backdrop-blur-md transition-transform duration-300 group-hover/img:scale-110">
                        <FaArrowUpRightFromSquare size={11} />
                    </span>
                </div>

                {/* Badges & Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs ${badge.style}`}>
                        {badge.label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <FaCalendarDays size={10} />
                        <span>{certificate.date}</span>
                    </span>
                </div>

                {/* Title */}
                <h3
                    onClick={() => onSelect(certificate)}
                    className="text-base font-bold leading-snug text-slate-900 dark:text-white font-display cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    {certificate.title}
                </h3>

                {/* Issuing Authority */}
                <p className="mt-1 text-xs font-bold text-blue-600 dark:text-blue-400 font-sans">
                    {certificate.issuer}
                </p>

                {/* Description */}
                {certificate.description && (
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-sans line-clamp-3">
                        {certificate.description}
                    </p>
                )}
            </div>

            {/* Action Footer */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <FaCheck size={10} />
                    <span>Verified Credential</span>
                </span>
                <button
                    type="button"
                    onClick={() => onSelect(certificate)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                >
                    <span>View Certificate</span>
                    <FaArrowUpRightFromSquare size={9} />
                </button>
            </div>
        </article>
    );
};

const Certificates = () => {
    const { content } = useContent();
    const { certificates } = content;
    const { visibleCount, handleLoadMore, hasMore } = useLoadMore(
        certificates.initialCount,
        certificates.loadCount,
        certificates.items.length
    );
    const visibleCertificates = certificates.items.slice(0, visibleCount);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const selectedType = useMemo(
        () => getCertificateType(selectedCertificate?.link),
        [selectedCertificate]
    );

    return (
        <section
            id="certificates"
            className="relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60 py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl font-display">
                        {certificates.title || "Certificates & Verified Credentials"}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                        {certificates.description || "Official certifications, hackathon awards, and verified technical training records."}
                    </p>
                </div>

                {/* HR Certificate Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {visibleCertificates.map((certificate) => (
                        <HRCertificateCard
                            key={certificate.id}
                            certificate={certificate}
                            onSelect={setSelectedCertificate}
                        />
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="mt-12 flex justify-center">
                        <button
                            type="button"
                            onClick={handleLoadMore}
                            className="group btn-primary"
                        >
                            <span className="font-bold">{certificates.loadMoreText || "Load More Credentials"}</span>
                            <span className="btn-icon-circle">
                                <FaArrowUpRightFromSquare size={10} />
                            </span>
                        </button>
                    </div>
                )}
            </div>

            {/* Modal Lightbox */}
            <Modal
                isOpen={Boolean(selectedCertificate)}
                onClose={() => setSelectedCertificate(null)}
                title={selectedCertificate ? `${selectedCertificate.title} (Issued by ${selectedCertificate.issuer})` : "Credential Details"}
                maxWidthClass="max-w-4xl"
            >
                {selectedCertificate && (
                    <div className="space-y-4">
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                            {selectedCertificate.description}
                        </p>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950">
                            {selectedType === "image" && (
                                <div className="flex min-h-[40vh] items-center justify-center bg-slate-950 sm:min-h-[55vh]">
                                    <img
                                        src={selectedCertificate.link}
                                        alt={selectedCertificate.title}
                                        className="max-h-[70vh] w-full object-contain"
                                    />
                                </div>
                            )}

                            {selectedType !== "image" && (
                                <iframe
                                    title={selectedCertificate.title}
                                    src={selectedCertificate.link}
                                    className="h-[70vh] w-full bg-white"
                                />
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Certificates;
