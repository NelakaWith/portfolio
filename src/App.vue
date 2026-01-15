<template>
  <div :class="{ dark: isDark }">
    <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-white z-50 dark:bg-gray-900"
    >
      <AppLoader :dark="isDark" />
    </div>
    <div v-else class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        @menu-click="handleMenuClick"
        :is-dark="isDark"
        @toggle-dark="toggleDark"
      />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Header from "./components/AppHeader.vue";
import Footer from "./components/AppFooter.vue";
import { useLoader } from "./composables/useLoader";
import AppLoader from "./components/AppLoader.vue";

const { loading, startLoader } = useLoader("Hind", 4000);

const isDark = ref(false);

// Persist dark mode in localStorage
onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) {
    isDark.value = saved === "true";
  }
});

watch(isDark, (val) => {
  localStorage.setItem("darkMode", val);
});

function toggleDark() {
  isDark.value = !isDark.value;
}

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
