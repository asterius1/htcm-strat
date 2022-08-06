const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.sky,
        neutral: colors.stone,
        haha: colors.blue,
      },
    },
  },
  plugins: [],
};
