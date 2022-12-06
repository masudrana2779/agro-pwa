/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EAEBE9",
          200: "#A9B2B6",
        },
        orange: {
          100: "#FFCE82",
          200: "#F9B266",
        },
        red: {
          400: "#F65D5A",
        },
        green: {
          100: "#E6F1E6",
          200: "#D7EADD",
          300: "#CCDDD5",
          400: "#498553",
        },
      },
    },
  },
  plugins: [],
};
