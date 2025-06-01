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
        <!-- <Contact /> -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import Header from "./components/AppHeader.vue";
import About from "./components/AppAbout.vue";
import Skills from "./components/AppSkills.vue";
import Experience from "./components/AppExperience.vue";
import Education from "./components/AppEducation.vue";
import Projects from "./components/AppProjects.vue";
// import Contact from "./components/AppContact.vue";

const loading = ref(true);

function areAllImagesLoaded() {
  const images = Array.from(document.images);
  return images.every((img) => img.complete && img.naturalHeight !== 0);
}

function areAllFontsLoaded() {
  if (!document.fonts) return true; // Fallback for unsupported browsers
  return document.fonts.status === "loaded";
}

function checkResourcesLoaded() {
  if (areAllImagesLoaded() && areAllFontsLoaded()) {
    loading.value = false;
  } else {
    setTimeout(checkResourcesLoaded, 100);
  }
}

onMounted(async () => {
  await nextTick();
  if (document.readyState === "complete") {
    checkResourcesLoaded();
  } else {
    window.addEventListener("load", checkResourcesLoaded);
  }
  // Fallback in case something is missed
  setTimeout(() => {
    loading.value = false;
  }, 4000);
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
