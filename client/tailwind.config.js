/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        "font-xl": `2.25rem`,
        "font-lg": `1.5rem`,
        "font-md": `0.935rem`,
        "font-sm": `0.813rem`,
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          accent: "var(--color-text-accent)",
          inverted: "var(--color-text-inverted)",
          orange: "var(--color-text-orange)",
          green: "var(--color-text-green)",
          grey: "var(--color-text-grey)",
          white: "var(--color-text-white)",
        },
      },
      backgroundColor: {
        skin: {
          static: "var(--color-bg-static)",
          fill: "var(--color-fill)",
          "fill-secondary": "var(--color-fill-secondary)",
          box: "var(--color-box)",
          "box-secondary": "var(--color-box-secondary)",
          inverted: "var(--color-inverted)",
          orange: "var(--color-bg-orange)",
          green: "var(--color-bg-green)",
          grey: "var(--color-bg-grey)",
          "btn-primary": "var(--color-button-primary)",
          "btn-primary-hover": "var(--color-button-primary-hover)",
          "btn-secondary": "var(--color-button-secondary)",
          "btn-secondary-hover": "var(--color-button-secondary-hover)",
          "btn-accent": "var(--color-button-accent)",
          "btn-accent-hover": "var(--color-button-accent-hover)",
          "btn-outlined": "var(--color-button-outlined)",
          "btn-outlined-hover": "var(--color-button-outlined-hover)",
        },
      },
      borderColor: {
        base: "var(--color-border-base)",
      },
      fontFamily: {
        main: "var(--font-main)",
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
        28: "7rem",
      },
    },
  },
  plugins: [],
};
