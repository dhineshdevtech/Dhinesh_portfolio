/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                main: "rgb(var(--color-text-main) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
                onaccent: "rgb(var(--color-on-accent) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                "surface-border": "rgb(var(--color-surface-border) / <alpha-value>)",
                brand: {
                    primary: "rgb(var(--color-brand-primary) / <alpha-value>)",
                    secondary: "rgb(var(--color-brand-secondary) / <alpha-value>)",
                    accent: "rgb(var(--color-brand-accent) / <alpha-value>)",
                },
            },
            fontFamily: {
                sans: ["'Geist'", "'Outfit'", "'Space Grotesk'", 'sans-serif'],
                display: ["'Geist'", "'Outfit'", "'Space Grotesk'", 'sans-serif'],
                mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
            },
            boxShadow: {
                'double-bezel-light': 'inset 0 1px 1px rgba(255, 255, 255, 0.9), 0 20px 40px -15px rgba(15, 23, 42, 0.06)',
                'double-bezel-dark': 'inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                'button-glow': '0 4px 20px -2px rgba(37, 99, 235, 0.35)',
                'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
                'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
