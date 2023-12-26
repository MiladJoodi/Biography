/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        dark: "#262626",
        secondary: "#d4d4d4",
      },
    },
  },
  plugins: [],
};
