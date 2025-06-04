<template>
  <div>
    <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div class="loader"></div>
    </div>
    <div v-else class="min-h-screen bg-gray-50">
      <Header @menu-click="handleMenuClick" />
      <main class="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
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
