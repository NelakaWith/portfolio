import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    sitemap({
      hostname: "https://nelaka.xyz",
      routes: ["/", "/services"],
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    allowedHosts: [
      "devserver-main--nw-portfolio-app.netlify.app",
      "localhost",
      "127.0.0.1",
    ],
    host: true,
  },
});
