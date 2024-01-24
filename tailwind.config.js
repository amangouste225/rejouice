/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "30rem",
        "3.5xl": "33px",
      },
      fontFamily: {
        nb: "nb",
        re: "re",
      },
      colors: {
        primary: "#FF6038",
      },
      maxWidth: {
        max: "1700px",
      },
      height: {
        0.5: "1px",
      },
    },
  },
  plugins: [],
};
