<template>
  <div :class="{ dark: isDark }">
    <div
      class="font-sans bg-gray-50 dark:bg-dark min-h-screen text-slate-900 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300"
    >
      <!-- Loader -->
      <Transition name="fade">
        <div
          v-if="loading"
        class="fixed inset-0 flex items-center justify-center z-[100] bg-gray-50 dark:bg-dark"
      >
        <AppLoader :dark="isDark" />
        </div>
      </Transition>

      <!-- Main Content -->
      <div>
        <Header
          @menu-click="handleMenuClick"
          :is-dark="isDark"
          @toggle-dark="toggleDark"
        />

        <main class="overflow-x-hidden">
          <NuxtPage />
        </main>

        <!-- Footer -->
        <footer
          class="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-dark-lighter/20"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Nelaka Withanage. All rights
            reserved.
          </p>
          <p class="mt-2">Built with Vue 3, Tailwind CSS & Glassmorphism</p>
        </footer>

        <!-- Back to Top Button -->
        <BackToTop />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/layout/AppHeader.vue";
import { useLoader } from "./composables/useLoader";
import AppLoader from "./components/common/AppLoader.vue";
import BackToTop from "./components/common/BackToTop.vue";

const { loading, startLoader } = useLoader("Inter", 3000);
const route = useRoute();

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nelaka Withanage` : 'Nelaka Withanage - Software Engineer';
  },
  ogType: 'website',
  ogSiteName: 'Nelaka Withanage',
  twitterCard: 'summary_large_image',
  ogImage: 'https://nelaka.xyz/og_banner_02.png',
});

useSchemaOrg([
  definePerson({
    name: "Nelaka Withanage",
    url: "https://nelaka.xyz",
    image: "https://nelaka.xyz/og_banner_02.png",
    jobTitle: "Software Engineer & Full-Stack Developer",
    sameAs: [
      "https://github.com/nelakaw",
      "https://linkedin.com/in/nelakaw",
    ]
  }),
  defineWebSite({
    name: "Nelaka Withanage",
    url: "https://nelaka.xyz",
  })
]);

const isDark = ref(true);

// Persist dark mode in localStorage
onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) {
    isDark.value = saved === "true";
  } else {
    isDark.value = true;
  }
  updateTheme();
  startLoader();
});

watch(isDark, (val) => {
  localStorage.setItem("darkMode", val);
  updateTheme();
});

function toggleDark() {
  isDark.value = !isDark.value;
}

function updateTheme() {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function handleMenuClick(target) {
  const el = document.getElementById(target);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style lang="scss">
/* Global transitions */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-50 dark:bg-dark transition-colors duration-300;
}

/* Fade transition for loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
