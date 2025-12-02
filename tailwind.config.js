/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        display: ["Fredoka", "sans-serif"],
      },
      colors: {
        "kid-yellow": "#FFD166",
        "kid-blue": "#118AB2",
        "kid-red": "#EF476F",
        "kid-green": "#06D6A0",
        "kid-dark": "#073B4C",
      },
    },
  },
  plugins: [],
};
