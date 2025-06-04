<template>
  <div :class="{ dark: isDark }">
    <button
      class="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-dark dark:text-white px-3 py-1 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      @click="toggleDark"
      aria-label="Toggle dark mode"
    >
      <span v-if="isDark">🌙</span>
      <span v-else>☀️</span>
    </button>
    <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-white z-50 dark:bg-gray-900"
    >
      <div class="loader"></div>
    </div>
    <div v-else class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header @menu-click="handleMenuClick" />
      <main class="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <!-- <Contact /> -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/AppHeader.vue";
import About from "./components/AppAbout.vue";
import Skills from "./components/AppSkills.vue";
import Experience from "./components/AppExperience.vue";
import Education from "./components/AppEducation.vue";
import Projects from "./components/AppProjects.vue";
import { useLoader } from "./composables/useLoader";

const { loading, startLoader } = useLoader("Hind", 4000);

onMounted(() => {
  startLoader();
});

const isDark = ref(false);
function toggleDark() {
  isDark.value = !isDark.value;
}

function handleMenuClick(target) {
  const el = document.getElementById(target);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style lang="scss">
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
