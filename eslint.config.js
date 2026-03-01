import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

// Nuxt auto-imports
const nuxtGlobals = {
  // Nuxt composables
  useAsyncData: "readonly",
  useFetch: "readonly",
  useHead: "readonly",
  useSeoMeta: "readonly",
  useRoute: "readonly",
  useRouter: "readonly",
  useState: "readonly",
  useCookie: "readonly",
  useRequestHeaders: "readonly",
  useRuntimeConfig: "readonly",
  navigateTo: "readonly",
  abortNavigation: "readonly",
  defineNuxtComponent: "readonly",
  defineNuxtConfig: "readonly",
  definePageMeta: "readonly",
  // SEO module composables
  useSchemaOrg: "readonly",
  definePerson: "readonly",
  defineWebSite: "readonly",
  defineOrganization: "readonly",
  // Vue composables
  computed: "readonly",
  ref: "readonly",
  reactive: "readonly",
  watch: "readonly",
  watchEffect: "readonly",
  onMounted: "readonly",
  onUnmounted: "readonly",
  onBeforeMount: "readonly",
  onBeforeUnmount: "readonly",
  nextTick: "readonly",
};

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...nuxtGlobals,
      },
    },
  },
  pluginVue.configs["flat/essential"],
  // Disable multi-word-component-names for Nuxt pages (file-based routing)
  {
    files: ["src/pages/**/*.vue", "src/App.vue", "src/app.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
]);
