/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "32rem",
      },
      fontFamily: {
        nb: "nb",
        re: "re",
      },
      colors: {
        primary: "#FF6038",
      },
    },
  },
  plugins: [],
};
