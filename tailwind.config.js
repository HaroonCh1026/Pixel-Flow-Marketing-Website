/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112B3C",
        secondary: "#F66B0E",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: "scale(0.95)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
