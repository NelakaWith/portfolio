<template>
  <div :class="{ dark: isDark }" class="w-full min-h-screen">
    <div
      class="font-sans bg-paper dark:bg-dark min-h-screen text-ink dark:text-white selection:bg-primary selection:text-white flex flex-col w-full"
    >
      <Header :is-dark="isDark" @toggle-dark="toggleDark" />

      <main class="w-full flex-grow paper-container">
        <NuxtPage />
      </main>

      <Footer class="w-full mt-auto" />

      <BackToTop />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/layout/AppHeader.vue";
import Footer from "./components/layout/AppFooter.vue";
import BackToTop from "./components/common/BackToTop.vue";
import { useSmoothScroll } from "./composables/useSmoothscroll";

// Initialize smooth scrolling
useSmoothScroll();

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Nelaka Withanage`
      : "Nelaka Withanage - Senior Software Engineer & Systems Architect";
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
    jobTitle: "Senior Software Engineer & Systems Architect",
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

const isDark = ref(false);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;

  const stored = localStorage.getItem("darkMode");
  if (stored !== null) {
    isDark.value = stored === "true";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        if (window.lenis) {
          window.lenis.scrollTo(el, {
            offset: 0,
            duration: 1.0,
          });
        }
      }, 100);
    }
  }
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
