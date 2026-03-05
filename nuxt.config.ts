export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  // Set the source directory to src since we have existing src/-based structure
  srcDir: "src/",

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo"],

  css: ["~/assets/scss/main.scss"],

  // SEO default configuration
  site: {
    url: "https://nelaka.xyz",
    name: "Nelaka Withanage",
    description: "Portfolio of Nelaka Withanage",
    defaultLocale: "en",
    trailingSlash: false,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
      routes: ["/", "/contact", "/velocity", "/the-lab", "/proof", "/services"],
    },
  },
});
