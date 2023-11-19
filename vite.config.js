// Using JSDoc type hints for intellisense.
// Make sure to enable "Check JS" option in VS Code settings
/** @type {import('vite').UserConfig} */
module.exports = {
  build: {
    chunkSizeWarningLimit: 3000, // default is 500 but Sanity Studio chunk is 2.5MB
    emptyOutDir: true,
    outDir: process.env.ELEVENTY_RUN_MODE == "serve" ? "../site" : "../dist",
  },
  envDir: "../", // relative to root
  envPrefix: ["SANITY_STUDIO_", "VITE_"], // only load env vars starting with these prefixes to prevent leaks
  root: process.env.ELEVENTY_RUN_MODE == "serve" ? "site" : "dist",
  publicDir: "../public", // relative to root
  plugins: [
    {
      name: "forward-admin", // https://github.com/kwickramasekara/photo-grid/issues/16
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req?.url?.endsWith("admin")) {
            res.writeHead(301, { Location: "/admin/" });
            res.end();
          }
          next();
        });
      },
    },
  ],
};
