import { useMemo, useState } from "react";
import { FaAward, FaCalendarDays, FaTrophy, FaLocationDot } from "react-icons/fa6";
import { useContent } from "../../context/ContentContext";
import { NODE_TYPES } from "../../utils/timelineContent";
import Modal from "../common/Modal";

const buildAchievementItems = (items = []) => {
    const records = [];
    let currentYear = "";

    items.forEach((item) => {
        if (item.type !== NODE_TYPES.CHECKPOINT) {
            return;
        }

        if (!item.shouldDrawLine) {
            currentYear = item.title;
            return;
        }

        records.push({
            ...item,
            year: currentYear,
        });
    });

    return records;
};

const HRAchievementCard = ({ item, index, onSelect }) => (
    <article className="group relative flex flex-col sm:flex-row gap-5 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg">
        {/* Photo Thumbnail */}
        <div
            onClick={() => onSelect(item)}
            className="relative h-44 w-full sm:w-48 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950"
        >
            <img
                src={item.slideImage}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                View Photo &rarr;
            </div>
        </div>

        {/* Details Content */}
        <div className="flex flex-1 flex-col justify-between min-w-0">
            <div>
                {/* Year & Category Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        <FaTrophy size={10} />
                        <span>{item.year || "Award"}</span>
                    </span>
                    {item.issuer && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                            <FaLocationDot size={10} />
                            <span className="truncate">{item.issuer}</span>
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3
                    onClick={() => onSelect(item)}
                    className="text-lg font-bold text-slate-900 dark:text-white font-display cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug"
                >
                    {item.title}
                </h3>

                {/* Subtitle / Description */}
                {item.subtitle && (
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans line-clamp-3">
                        {item.subtitle}
                    </p>
                )}
            </div>

            {/* Bottom Link Action */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-400">Official Achievement Record</span>
                <button
                    type="button"
                    onClick={() => onSelect(item)}
                    className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                    Expand &rarr;
                </button>
            </div>
        </div>
    </article>
);

const Timeline = () => {
    const { content } = useContent();
    const timelineContent = content.timeline;
    const [selectedItem, setSelectedItem] = useState(null);

    const achievements = useMemo(
        () => buildAchievementItems(timelineContent?.items || []).slice(0, timelineContent?.displayCount || 8),
        [timelineContent?.displayCount, timelineContent?.items]
    );

    if (!timelineContent?.enabled || achievements.length === 0) {
        return null;
    }

    return (
        <section
            id="timeline"
            className="relative border-b border-slate-200/60 dark:border-slate-800/60 py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl font-display">
                        {timelineContent.title || "Key Achievements & Honors"}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                        National hackathon victories, engineering awards, leadership records, and technical training highlights.
                    </p>
                </div>

                {/* Scannable HR Grid */}
                <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((item, index) => (
                        <HRAchievementCard key={`${item.year}-${item.title}`} item={item} index={index} onSelect={setSelectedItem} />
                    ))}
                </div>
            </div>

            {/* Modal Lightbox */}
            <Modal
                isOpen={Boolean(selectedItem)}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.title || "Achievement Details"}
                maxWidthClass="max-w-4xl"
            >
                {selectedItem && (
                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 max-h-[70vh] flex items-center justify-center">
                            <img
                                src={selectedItem.slideImage}
                                alt={selectedItem.title}
                                className="max-h-[70vh] w-full object-contain"
                            />
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 font-sans">
                            {selectedItem.subtitle}
                        </p>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Timeline;
