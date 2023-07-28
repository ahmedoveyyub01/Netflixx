/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-button": "#6d6d6eb3",
        "bgcolor": "#020617",
        "inputcolor": "#333333",
        "faqbg": "#303030",
      },
      fontFamily: {
        roboto: ['Roboto']
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}