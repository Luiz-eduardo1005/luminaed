/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#ebefff",
          200: "#dce3ff",
          300: "#c5d0ff",
          500: "#5f6bff",
          600: "#4d57f3",
          700: "#3f47c8",
        },
        ink: {
          950: "#0f172a",
          900: "#111827",
          700: "#344256",
          500: "#65758b",
        },
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.06)",
        card: "0 10px 35px rgba(79, 87, 243, 0.08)",
        glow: "0 0 0 4px rgba(95, 107, 255, 0.14)",
      },
      animation: {
        "fade-in": "fadeIn .45s ease-out",
        "pop-in": "popIn .25s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
