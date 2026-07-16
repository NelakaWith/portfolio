<template>
  <div :class="{ dark: isDark }">
    <div
      class="font-sans bg-gray-50 dark:bg-dark min-h-screen text-slate-700 dark:text-white selection:bg-primary selection:text-white flex flex-col"
    >
      <!-- Loader -->
      <Transition name="fade">
        <div
          v-if="loading"
          class="!fixed inset-0 flex items-center justify-center z-[100] transition-colors duration-300 paper-container"
        >
          <AppLoader :dark="isDark" />
        </div>
      </Transition>

      <!-- Main Content -->
      <div class="flex flex-col flex-grow">
        <Header :is-dark="isDark" @toggle-dark="toggleDark" />

        <main :key="loading" class="flex-grow overflow-x-hidden paper-container">
          <NuxtPage />
        </main>

        <!-- Footer -->
        <Footer />

        <!-- Back to Top Button -->
        <BackToTop />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/layout/AppHeader.vue";
import Footer from "./components/layout/AppFooter.vue";
import { useLoader } from "./composables/useLoader";
import AppLoader from "./components/common/AppLoader.vue";
import BackToTop from "./components/common/BackToTop.vue";
import { useSmoothScroll } from "./composables/useSmoothscroll";

const { loading, startLoader } = useLoader("IBM Plex Serif", 3000);

// Initialize smooth scrolling
useSmoothScroll();

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

  startLoader().then(() => {
    // Scroll to hash if present after loading hides
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(el, {
              offset: 0,
              duration: 1.2,
            });
          }
        }, 300); // Small timeout to ensure page layout is stable
      }
    }
  });
});

function toggleDark() {
  document.documentElement.classList.add("disable-transitions");

  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("darkMode", String(isDark.value));

  // Force reflow to apply changes instantly without transition
  document.documentElement.offsetHeight;

  requestAnimationFrame(() => {
    document.documentElement.classList.remove("disable-transitions");
  });
}
</script>
