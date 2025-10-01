// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 👈 enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',   // Indigo
        secondary: '#10B981', // Emerald
        background: '#F3F4F6', // Light gray (default light bg)
        text: '#1F2937',       // Gray-800
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
