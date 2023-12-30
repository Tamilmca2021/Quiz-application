/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: "'Gabarito', sans-serif",
        montserrat: "Montserrat, sans-serif",
      },
      colors: {
        primary: "#EEE7DA",
        secondary: "#B2C8BA",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
