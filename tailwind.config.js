/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,ts,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      founders: ["Test Founders Grotesk", "sans-serif"],
      archivo: ["Archivo Black", "sans-serif"],
      geologica: ["Geologica", "sans-serif"],
      darker: ["Darker Grotesque"],
      tiny: ["Tiny5", "sans-serif"],
      montserrat: ["Montserrat Alternates", "sans-serif"],
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "0.75" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slideIn: "animate 1s ease-in ",
        fadeIn: "fadeIn 3s ease-in-out forwards",
        fadeOut: "fadeOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animated")],
};
