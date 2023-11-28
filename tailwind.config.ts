import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            dropShadow: {
                DEFAULT: `0 0 8px rgba(var(--drop-shadow-rgb), 0.65)`,
                xs: `0 0 4px rgba(var(--drop-shadow-rgb), 0.55)`,
                sm: `0 0 6px rgba(var(--drop-shadow-rgb), 0.6)`,
                md: `0 0 10px rgba(var(--drop-shadow-rgb), 0.65)`,
                lg: `0 0 12px rgba(var(--drop-shadow-rgb), 0.7)`,
            },
        },
    },
    plugins: [],
};
export default config;
