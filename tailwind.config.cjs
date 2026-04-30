/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",             // deep black for console
        card: "#0f172a",           // slate-900 elevated surface
        cyberCyan: "#06b6d4",
        terminalGreen: "#10b981",
        dockerBlue: "#2496ed",
        awsOrange: "#ff9900",
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neo: "0 0 40px rgba(6, 182, 212, 0.15)",
      },
      borderRadius: {
        neo: "0.5rem", // More professional, less rounded than 1.5rem
      },
    },
  },
  plugins: [],
};
