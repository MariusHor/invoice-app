/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        400: "#9277FF",
        600: "#7C5DFA",
      },
      secondary: {
        200: "#F8F8FB",
        300: "#DFE3FA",
        400: "#7E88C3",
        500: "#888EB0",
        600: "#252945",
        700: "#1E2139",
        800: "#141625",
        900: "#0C0E16",
      },
      accent: {
        300: "#FF9797",
        500: "#EC5757",
      },
    },
    fontSize: {
      "heading-lg": `2.25rem`,
      "heading-md": `1.5rem`,
      "heading-sm": `0.938rem`,
      paragraph: `0.813rem`,
    },
    extend: {
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      height: {
        18: "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
