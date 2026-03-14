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
                sans: ['"Classy Exclusive DEMO"', 'var(--font-outfit)', 'sans-serif'],
                heading: ['"Classy Exclusive DEMO"', 'var(--font-cormorant)', 'serif'],
            },
            colors: {
                primary: "#f9a21b", // Mango Yellow from image
                secondary: "#40513b", // Leaf Green from image
                accent: "#753922", // Cashew Brown from image
                background: "#e5d9b6", // Light Beige from image
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
