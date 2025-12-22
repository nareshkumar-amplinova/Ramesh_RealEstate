/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#264653",      // MAIN BUTTON COLOR
        primaryDark: "#1f3a45",  // Hover
        surface: "#f8fafc",      // Light section bg
      },
    },
  },
  plugins: [],
};
