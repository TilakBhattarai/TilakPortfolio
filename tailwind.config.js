/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#0A0E14",
                bgsoft: "#10141C",
                teal: "#14B8A6",
                amber: "#F59E0B",
                ink: "#F5F5F7",
                muted: "#94A3B8",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            keyframes: {
                floaty: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-18px)" },
                },
                pulseGlow: {
                    "0%, 100%": { opacity: 0.2 },
                    "50%": { opacity: 0.45 },
                },
            },
            animation: {
                floaty: "floaty 5s ease-in-out infinite",
                pulseGlow: "pulseGlow 6s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};