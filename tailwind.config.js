import config from "./src/_data/config";

// Using JSDoc type hints for intellisense.
// Make sure to enable "Check JS" option in VS Code settings
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.html"],
  theme: {
    extend: {
      gap: {
        grid: config.gridGap ? config.gridGap + "rem" : "0.25rem",
      },
    },
  },
  plugins: [],
};
