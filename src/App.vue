<template>
  <div :class="{ dark: isDark }">
    <div class="font-sans bg-gray-50 dark:bg-dark min-h-screen text-slate-900 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300">
      <!-- Loader -->
      <div
        v-if="loading"
        class="fixed inset-0 flex items-center justify-center z-[100] bg-gray-50 dark:bg-dark"
      >
        <AppLoader :dark="isDark" />
      </div>

      <!-- Main Content -->
      <div v-else>
        <Header
          @menu-click="handleMenuClick"
          :is-dark="isDark"
          @toggle-dark="toggleDark"
        />

        <main class="overflow-x-hidden">
          <About />
          <Skills />
          <Showcase />
          <Experience />
          <Projects />
          <Education />
        </main>

        <!-- Footer -->
        <footer class="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-dark-lighter/20">
          <p>&copy; {{ new Date().getFullYear() }} Nelaka Withanage. All rights reserved.</p>
          <p class="mt-2">Built with Vue 3, Tailwind CSS & Glassmorphism</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Header from "./components/AppHeader.vue";
import About from "./components/AppAbout.vue";
import Skills from "./components/AppSkills.vue";
import Experience from "./components/AppExperience.vue";
import Education from "./components/AppEducation.vue";
import Projects from "./components/AppProjects.vue";
import Showcase from "./components/AppShowcase.vue";
import { useLoader } from "./composables/useLoader";
import AppLoader from "./components/AppLoader.vue";

const { loading, startLoader } = useLoader("Inter", 3000);

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
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0f172a';
  } else {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#f9fafb';
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
    background-color: #0f172a; /* Ensure bg matches loading state */
}
</style>
