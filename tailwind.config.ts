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
                sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
                heading: ['"Classy Exclusive DEMO"', 'var(--font-cormorant)', 'serif'],
            },
            colors: {
                primary: "#f9a21b", // Mango Yellow
                secondary: "#40513b", // Leaf Green
                accent: "#753922", // Cashew Brown
                background: "#faf8f5", // Clean Off-White
                surface: "#e5d9b6", // Light Beige Accent
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
