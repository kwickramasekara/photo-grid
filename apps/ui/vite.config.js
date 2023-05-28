// Using JSDoc type hints for intellisense.
// Make sure to enable "Check JS" option in VS Code settings
/** @type {import('vite').UserConfig} */
module.exports = {
  cacheDir: "../../../node_modules/.vite",
  root: process.env.ELEVENTY_RUN_MODE == "serve" ? "site" : "dist",
  build: {
    outDir: process.env.ELEVENTY_RUN_MODE == "serve" ? "../site" : "../dist",
    emptyOutDir: true,
  },
};
