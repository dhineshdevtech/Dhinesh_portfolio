import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
const THEMES = ['light'];

export const ThemeProvider = ({ children }) => {
    const [theme] = useState('light');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('dark', 'theme-dark');
        root.classList.add('theme-light');
        localStorage.removeItem('theme');
    }, []);

    const toggleTheme = () => {};
    const setTheme = () => {};
    const cycleTheme = () => {};

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, cycleTheme, themes: THEMES }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        return { theme: 'light', toggleTheme: () => {}, setTheme: () => {} };
    }
    return context;
};
