import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,astro,svelte,vue}",
    ],

    theme: {
        extend: {
            colors: {
                brand: {
                    primary: {
                        DEFAULT: "#23972c",
                        light: "#3fbf49",
                        dark: "#1b7a23",
                    },
                    accent: {
                        DEFAULT: "#943764",
                        light: "#b44a7f",
                        dark: "#6f284a",
                    },
                    gray: {
                        50: "#f9fafb",
                        100: "#f3f4f6",
                        200: "#e5e7eb",
                        300: "#d1d5db",
                        400: "#9ca3af",
                        500: "#6b7280",
                        600: "#4b5563",
                        700: "#374151",
                        800: "#1f2937",
                        900: "#111827",
                    },
                },
                success: "#23972c",
                warning: "#eab308",
                danger: "#dc2626",
            },

            spacing: {
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                12: "3rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
            },

            fontSize: {
                hero: ["2.5rem", { lineHeight: "1.1", fontWeight: "700" }],
                h1: ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
                h2: ["1.75rem", { lineHeight: "1.25", fontWeight: "700" }],
                h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
                body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
                "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
                meta: ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }],
            },

            borderRadius: {
                md: "0.375rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px",
            },

            boxShadow: {
                sm: "0 1px 2px rgba(0,0,0,0.05)",
                DEFAULT: "0 1px 3px rgba(0,0,0,0.1)",
                md: "0 4px 6px rgba(0,0,0,0.1)",
                lg: "0 10px 15px rgba(0,0,0,0.15)",
            },
        },
    },

    plugins: [],
};

export default config;
