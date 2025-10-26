/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "app/index.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/movie/[id].{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444", // use for active elements, buttons, highlights
        secondary: "#1f2937", // example: dark text or secondary background
        accent: "#fbbf24", // example: accent highlights
        "input-bg": "#1a1a1a",
        "input-bg-focus": "#2f2f2f",
      },
    },
  },

  presets: [require("nativewind/preset")],
};
