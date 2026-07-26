import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-40 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-3 text-blue-600 dark:text-blue-400 shadow-lg backdrop-blur-md transition-all hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 group sm:bottom-28 sm:right-8 sm:p-3.5"
                    aria-label="Back to top"
                >
                    <HiArrowUp className="text-xl transition-transform group-hover:-translate-y-1 sm:text-2xl" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
