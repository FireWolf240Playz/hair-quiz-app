/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        colorMain: "#C3EDFF",
        darkerBlue: "#A0D4E6",
        colorSecodary: "#EEF7FB",
      },
      screens: {
        "max-600": { max: "600px" },
        "max-800": { max: "800px" },
        "max-1000": { max: "1000px" },
      },
    },
  },
  plugins: [],
};
