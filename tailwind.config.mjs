/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#202020",
        darkTheme: "#121212",
      },
      fontFamily: {
        Helvetica: ["Helvetica", "Arial", "sans-serif"], // Primary font
        Outfit: ["Outfit", "Helvetica", "sans-serif"], // Outfit with Helvetica fallback
        Ovo: ["Ovo", "Helvetica", "serif"], // Ovo with Helvetica fallback
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "class", // Fixed: 'selector' is not valid, changed to 'class'
  plugins: [],
};
