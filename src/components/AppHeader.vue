<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
      <div>
        <h1
          class="text-3xl md:text-5xl font-semibold text-dark dark:text-white"
        >
          Nelaka Withanage
        </h1>
        <h2 class="text-xl text-primary dark:text-yellow-400">
          Developer | UI Enthusiast
        </h2>
      </div>
      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6 items-center">
        <template v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="text-dark dark:text-white hover:text-primary dark:hover:text-yellow-400 transition"
            @click.prevent="$emit('menu-click', item.id)"
            >{{ item.label }}</a
          >
        </template>
        <!-- Dark/Light Toggle Button -->
        <button
          class="ml-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-dark dark:text-white px-2 py-1 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          @click="$emit('toggle-dark')"
          aria-label="Toggle dark mode"
        >
          <Icon v-if="isDark" icon="line-md:moon-filled" class="w-6 h-6" />
          <Icon v-else icon="line-md:sunny-filled" class="w-6 h-6" />
        </button>
      </nav>
      <!-- Mobile Nav Toggle -->
      <button
        class="md:hidden flex items-center px-3 py-2 text-dark border-gray-400 focus:outline-none"
        @click="showMobileMenu = !showMobileMenu"
        aria-label="Toggle menu"
      >
        <Icon icon="fxemoji:hamburger" class="h-8 w-8" />
      </button>
    </div>
    <!-- Mobile Nav Menu -->
    <transition name="fade">
      <nav
        v-if="showMobileMenu"
        class="md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold"
        @click.self="showMobileMenu = false"
      >
        <template v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="text-dark dark:text-white hover:text-primary dark:hover:text-yellow-400 transition"
            @click.prevent="
              $emit('menu-click', item.id);
              showMobileMenu = false;
            "
            >{{ item.label }}</a
          >
        </template>
        <!-- Dark/Light Toggle Button for Mobile -->
        <button
          class="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-dark dark:text-white px-3 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          @click="
            $emit('toggle-dark');
            showMobileMenu = false;
          "
          aria-label="Toggle dark mode"
        >
          <Icon v-if="isDark" icon="line-md:moon-filled" class="w-8 h-8" />
          <Icon v-else icon="line-md:sunny-filled" class="w-8 h-8" />
        </button>
        <button
          class="mt-8 text-base text-gray-500 dark:text-gray-300"
          @click="showMobileMenu = false"
        >
          Close
        </button>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
defineProps({ isDark: Boolean });
defineEmits(["menu-click", "toggle-dark"]);
const showMobileMenu = ref(false);
const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "showcase", label: "Showcase", href: "#showcase" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
];
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
