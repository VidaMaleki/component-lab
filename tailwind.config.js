/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          vida: "#344150",
          gold: "#d8b65c",
          green: "#4a9878",
        },
      },
    },
  },
  plugins: [],
};
