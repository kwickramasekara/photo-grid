const fs = require("fs");
const path = require("path");

// Vite/Rollup does not know how to process feed.xml file, thus it will not be copied to the _site folder.
// This plugin tries to copy the file manually without any processing.
function copyRSS() {
  return {
    name: "copy-rss",
    generateBundle(options) {
      const src = path.resolve(".11ty-vite/feed.xml");
      const dest = path.resolve(options.dir + "/feed.xml");

      if (fs.existsSync(src)) {
        console.log(`\n[Vite: Rollup] Copying RSS feed file: ${src} → ${dest}`);
        fs.copyFileSync(src, dest);
      }
    },
  };
}

// Using JSDoc type hints for intellisense.
// Make sure to enable "Check JS" option in VS Code settings
/** @type {import('vite').UserConfig} */
module.exports = {
  build: {
    chunkSizeWarningLimit: 3000, // default is 500 but Sanity Studio chunk is 2.5MB
    emptyOutDir: true,
    outDir: process.env.ELEVENTY_RUN_MODE == "serve" ? "../_dev" : "../_site",
    minify: true,
    rollupOptions: {
      plugins: [copyRSS()],
    },
  },
  envDir: "../", // relative to root
  envPrefix: ["SANITY_STUDIO_", "VITE_"], // only load env vars starting with these prefixes to prevent leaks
  root: process.env.ELEVENTY_RUN_MODE == "serve" ? "_dev" : "_site",
  publicDir: "../public", // relative to root
  plugins: [
    {
      name: "forward-admin", // https://github.com/kwickramasekara/photo-grid/issues/16
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.originalUrl === "/admin" ||
            req.originalUrl === "/admin/media" ||
            req.originalUrl === "/admin/publish"
          ) {
            res.writeHead(301, { Location: "/admin/" });
            res.end();
          } else {
            next();
          }
        });
      },
    },
  ],
};
