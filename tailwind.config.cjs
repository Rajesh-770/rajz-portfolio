/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1f",             // deep navy-black
        card: "#111827",           // dark elevated surface
        neonRed: "#ff3366",
        neonBlue: "#3b82f6",
        neonCyan: "#22d3ee",
      },
      boxShadow: {
        neo: "0 0 40px rgba(59,130,246,0.2)",
      },
      borderRadius: {
        neo: "1.5rem",
      },
    },
  },
  plugins: [],
};
