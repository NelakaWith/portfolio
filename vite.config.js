import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue()],
  server: {
    allowedHosts: [
      "devserver-main--nw-portfolio-app.netlify.app",
      "localhost",
      "127.0.0.1",
    ],
    host: true,
  },
});
