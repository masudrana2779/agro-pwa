/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_gray: {
          50: "#F3F3F3",
          100: "#EAEBE9",
          200: "#A9B2B6",
          300: "#828282",
          400: "#808080",
        },
        custom_orange: {
          100: "#FAC84A",
          200: "#FFCE82",
          300: "#F9B266",
        },
        custom_red: {
          400: "#F65D5A",
          500: "#FF0B0B",
        },
        custom_green: {
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
