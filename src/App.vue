<template>
  <div :class="{ dark: isDark }">
    <div
      class="font-sans bg-gray-50 dark:bg-dark min-h-screen text-slate-700 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300 flex flex-col"
    >
      <!-- Loader -->
      <Transition name="fade">
        <div
          v-if="loading"
          class="fixed inset-0 flex items-center justify-center z-[100] transition-colors duration-300"
          :class="isMounted && isDark ? 'bg-dark' : 'bg-gray-50'"
        >
          <AppLoader :dark="isDark" />
        </div>
      </Transition>

      <!-- Main Content -->
      <div class="flex flex-col flex-grow">
        <Header
          @menu-click="handleMenuClick"
          :is-dark="isDark"
          @toggle-dark="toggleDark"
        />

        <main class="flex-grow overflow-x-hidden">
          <NuxtPage />
        </main>

        <!-- Footer -->
        <Footer />

        <!-- Back to Top Button -->
        <BackToTop />
      </div>
    </div>

    <!-- MOVE THIS INSIDE THE ROOT WRAPPER DIV -->
    <ClientOnly>
      <Lenis :options="{ lerp: 0.2, wheelMultiplier: 1.5 }" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/layout/AppHeader.vue";
import Footer from "./components/layout/AppFooter.vue";
import { useLoader } from "./composables/useLoader";
import AppLoader from "./components/common/AppLoader.vue";
import BackToTop from "./components/common/BackToTop.vue";
import { useLenis } from "#imports";

const { loading, startLoader } = useLoader("IBM Plex Serif", 3000);

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Nelaka Withanage`
      : "Nelaka Withanage - Software Engineer";
  },
  ogType: "website",
  ogSiteName: "Nelaka Withanage",
  twitterCard: "summary_large_image",
  ogImage: "https://nelaka.xyz/og_banner_02.png",
});

useSchemaOrg([
  definePerson({
    name: "Nelaka Withanage",
    url: "https://nelaka.xyz",
    image: "https://nelaka.xyz/og_banner_02.png",
    jobTitle: "Software Engineer & Full-Stack Developer",
    sameAs: [
      "https://github.com/NelakaWith/",
      "https://www.linkedin.com/in/nelaka-withanage/",
    ],
  }),
  defineWebSite({
    name: "Nelaka Withanage",
    url: "https://nelaka.xyz",
  }),
]);

// 1. Default to false on both server and initial client render
const isDark = ref(false);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;

  // 2. Read from localStorage safely after mounting
  const stored = localStorage.getItem("darkMode");
  if (stored !== null) {
    isDark.value = stored === "true";
  } else {
    // Optional fallback: check system preference if no local preference exists
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // 3. Apply class to document root
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  startLoader();
});

function toggleDark() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("darkMode", String(isDark.value));
}

function handleMenuClick(target) {
  const el = document.getElementById(target);
  if (el) {
    // Uses the global Nuxt-Lenis composable to scroll elegantly
    useLenis().scrollTo(el, {
      offset: 0,
      duration: 1.2,
    });
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
