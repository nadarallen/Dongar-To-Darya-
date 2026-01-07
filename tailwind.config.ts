import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-outfit)', 'sans-serif'],
                heading: ['var(--font-heading)', 'serif'],
            },
            colors: {
                brand: {
                    mango: "#FFB703",
                    green: "#81B29A",
                    beige: "#F4F1DE", // Cream/Background
                    clay: "#E07A5F", // Terracotta
                    navy: "#264653",
                    teal: "#2A9D8F",
                    gray: "#64748B", // Export container gray
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
