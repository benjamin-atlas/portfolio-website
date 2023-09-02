/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('./src/assets/landing.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        raleway: ["Raleway", "sans"],
        sans: ["Open Sans", "sans"],
      },
      animation: {
        fadeIn: "fadeIn 800ms linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
