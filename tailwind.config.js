// tailwind.config.js
module.exports = {
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
      sans: ["DM Sans", "system-ui"],
      serif: ["DM Serif Display"],
    },
    extend: {
      colors: {
        mz: "#0147C1",
        dark: "#181818",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
