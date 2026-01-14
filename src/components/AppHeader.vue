<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-sm dark:shadow-lg sticky top-0 z-40"
  >
    <div class="container mx-auto px-4 py-6 flex justify-end items-center">
      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6 items-center">
        <template v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="text-dark dark:text-white hover:text-primary dark:hover:text-yellow-400 transition cursor-pointer"
            @click.prevent="handleNavClick(item)"
            >{{ item.label }}</a
          >
        </template>
        <!-- Dark/Light Toggle Button -->
        <button
          class="ml-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-dark dark:text-white px-2 py-1 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          @click="$emit('toggle-dark')"
          aria-label="Toggle dark mode"
        >
          <Icon
            v-if="isDark"
            icon="line-md:sunny"
            class="w-6 h-6 text-yellow-500"
          />
          <Icon v-else icon="line-md:moon" class="w-6 h-6 text-slate-500" />
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
            class="text-dark dark:text-white hover:text-primary dark:hover:text-yellow-400 transition cursor-pointer"
            @click.prevent="
              handleNavClick(item);
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
          <Icon
            v-if="isDark"
            icon="line-md:sunny"
            class="w-8 h-8 text-yellow-500"
          />
          <Icon v-else icon="line-md:moon" class="w-8 h-8 text-slate-500" />
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
import { useRouter } from "vue-router";

defineProps({ isDark: Boolean });
defineEmits(["menu-click", "toggle-dark"]);
const showMobileMenu = ref(false);
const router = useRouter();

const navItems = [
  { id: "about", label: "About", href: "#about", type: "hash" },
  { id: "skills", label: "Skills", href: "#skills", type: "hash" },
  { id: "showcase", label: "Showcase", href: "#showcase", type: "hash" },
  { id: "experience", label: "Experience", href: "#experience", type: "hash" },
  { id: "projects", label: "Projects", href: "#projects", type: "hash" },
  { id: "education", label: "Education", href: "#education", type: "hash" },
  { id: "services", label: "Services", href: "/services", type: "route" },
];

function handleNavClick(item) {
  if (item.type === "route") {
    router.push(item.href);
  } else {
    // For hash links, navigate to home first if not already there
    if (router.currentRoute.value.path !== "/") {
      router.push("/" + item.href);
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}
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
