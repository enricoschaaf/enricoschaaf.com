const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: "all",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
}
