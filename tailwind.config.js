// tailwind.config.js
module.exports = {
  darkMode: "class",
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        lg: "1024px",
        xl: "1180px",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", "system-ui"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
