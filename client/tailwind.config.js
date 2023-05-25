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
        550: "#494E6E",
        600: "#252945",
        700: "#1E2139",
        800: "#141625",
        900: "#0C0E16",
      },
      accent: {
        300: "#FF9797",
        500: "#EC5757",
      },
      white: "#FFFFFF",
      green: {
        100: "rgb(220 252 231)",
        500: "rgb(16 185 129)",
      },
      orange: {
        100: "rgb(255 237 213)",
        600: "rgb(234 88 12)",
      },
      grey: {
        100: "rgb(243 244 246)",
        600: "rgb(75 85 99)",
      },
    },
    fontSize: {
      "heading-lg": `2.25rem`,
      "heading-md": `1.5rem`,
      "heading-sm": `1rem`,
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
      maxWidth: {
        8: "2rem",
        14: "3.5rem",
        20: "5rem",
        24: "6rem",
        42: "12rem",
      },
      minWidth: {
        8: "2rem",
        10: "2.5rem",
      },
    },
  },
  plugins: [],
};
