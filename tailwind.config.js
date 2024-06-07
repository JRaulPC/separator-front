/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,ts,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      archivo: ["Archivo Black", "sans-serif"],
      geologica: ["Geologica", "sans-serif"],
      darker: ["Darker Grotesque", "sans-serif"],
    },
    extend: {
      keyframes: {
        animate: {
          "0%, 100%": { "background-position": "left top" },
          "25%": { "background-position": "right bottom" },
          "50%": { "background-position": "left bottom" },
          "75%": { "background-position": "right top" },
        },
      },
      animation: {
        animate: "animate 15s ease-in-out infinite",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animated")],
};
