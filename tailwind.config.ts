import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            "2xl": {
                max: "1919px",
            },
            xl: {
                max: "1719px",
            },
            lg: {
                max: "1439px",
            },
            md: {
                max: "1279px",
            },
            "min-md": "768px",
            tb: {
                max: "991px",
            },
            sm: {
                max: "767px",
            },
            xs: {
                max: "479px",
            },
        },
        extend: {
            colors: {
                white: "var(--general-white)",
                sky: "var(--general-sky)",
                "sky-hover": "var(--hover-sky)",
                orange: "var(--general-orange)",
                "orange-hover": "var(--hover-orange)",
                "orange-focus": "var(--active-orange)",
                gray: "var(--general-gray)",
                black: "var(--general-black)",
                glass: "var(--general-glass)",
                overlay: "var(--general-overlay)",
                disabled: "var(--general-disabled)",

                t: {
                    black: "var(--text-black)",
                    white: "var(--text-white)",
                    gray: "var(--text-gray)",
                    orange: "var(--text-orange)",
                },
            },
            fontFamily: {
                "familijen-grotesk": ["var(--font-familijen-grotesk)", "sans-serif"],
            },
            keyframes: {
                spinner: {
                    "0%": { opacity: "1" },
                    "50%": { opacity: "0.6" },
                    "100%": { opacity: "1" },
                },
                cursorMoving: {
                    "0%": { transform: "translateX(0)" },
                    "25%": { transform: "translateX(-5px)" },
                    "50%": { transform: "translateX(5px)" },
                    "75%": { transform: "translateX(-5px)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                spinner: "spinner 1.1s steps(1, end) infinite",
                "curson-moving": "cursorMoving 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },
    plugins: [],
};

export default config;
