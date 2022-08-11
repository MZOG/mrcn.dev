// tailwind.config.js
module.exports = {
  darkMode: "class",
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        lg: "1024px",
        xl: "1200px",
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
