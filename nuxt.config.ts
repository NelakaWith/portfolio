export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  // Set the source directory to src since we have existing src/-based structure
  srcDir: "src/",

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/fonts"],

  fonts: {
    families: [
      {
        name: "IBM Plex Serif",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700],
      },
      {
        name: "Playfair Display",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700],
      },
    ],
  },

  css: ["~/assets/scss/main.scss"],

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "/api",
      ghostApiKey: process.env.NUXT_PUBLIC_GHOST_API_KEY,
      ghostApiUrl: process.env.NUXT_PUBLIC_GHOST_API_URL,
      turnstileSiteKey: String(
        process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || "",
      ),
    },
  },

  // SEO default configuration
  site: {
    url: "https://nelaka.xyz",
    name: "Nelaka Withanage",
    description: "Portfolio of Nelaka Withanage",
    defaultLocale: "en",
    trailingSlash: false,
  },

  app: {
    pageTransition: { name: "page" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  // Tell Nuxt to generate static HTML into the dist directory
  // to remain compatible with your existing deployment action
  nitro: {
    output: {
      publicDir: require("path").join(__dirname, "dist"),
    },
    prerender: {
      crawlLinks: true,
      routes: ["/", "/contact", "/the-lab", "/proof", "/blog"],
    },
  },
});
