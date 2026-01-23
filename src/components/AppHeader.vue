<template>
  <header class="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
    <div
      class="bg-white/80 dark:bg-dark/70 backdrop-blur-xl border border-slate-200 dark:border-glass-border rounded-full px-6 py-3 flex justify-between items-center shadow-lg dark:shadow-glass transition-all duration-300"
    >
      <!-- Logo / Name -->
      <div class="cursor-pointer group" @click="$emit('menu-click', 'about')">
        <h1
          class="font-heading font-bold text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors"
        >
          Nelaka<span class="text-primary">.</span>
        </h1>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-1">
        <template v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-all duration-200"
            @click.prevent="$emit('menu-click', item.id)"
          >
            {{ item.label }}
          </a>
        </template>

        <div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-2"></div>

        <!-- Theme Toggle (Simplified) -->
        <button
          class="p-2 rounded-full text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          @click="$emit('toggle-dark')"
          aria-label="Toggle dark mode"
        >
          <Icon
            v-if="isDark"
            icon="line-md:sunny-filled-loop"
            class="w-5 h-5"
          />
          <Icon v-else icon="line-md:moon-filled-loop" class="w-5 h-5" />
        </button>
      </nav>

      <!-- Mobile Nav Toggle -->
      <button
        class="md:hidden text-slate-900 dark:text-white p-2"
        @click="showMobileMenu = true"
        aria-label="Open menu"
      >
        <Icon icon="ph:list-bold" class="w-6 h-6" />
      </button>
    </div>
  </header>

  <!-- Mobile Nav Overlay -->
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="showMobileMenu"
        class="fixed inset-0 bg-white dark:bg-dark z-[100] flex flex-col justify-center items-center"
      >
        <button
          class="absolute top-8 right-8 text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-white p-2"
          @click="showMobileMenu = false"
        >
          <Icon icon="ph:x-bold" class="w-8 h-8" />
        </button>

        <nav class="flex flex-col items-center space-y-6">
          <template v-for="item in navItems" :key="item.id">
            <a
              :href="item.href"
              class="text-3xl font-heading font-bold text-slate-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
              @click.prevent="
                $emit('menu-click', item.id);
                showMobileMenu = false;
              "
            >
              {{ item.label }}
            </a>
          </template>

          <div class="w-12 h-px bg-slate-200 dark:bg-white/10 my-4"></div>

          <!-- Mobile Theme Toggle -->
          <button
            class="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            @click="$emit('toggle-dark')"
          >
            <Icon
              v-if="isDark"
              icon="line-md:sunny-filled-loop"
              class="w-6 h-6"
            />
            <Icon v-else icon="line-md:moon-filled-loop" class="w-6 h-6" />
            <span>{{ isDark ? "Switch to Light" : "Switch to Dark" }}</span>
          </button>
        </nav>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
defineProps({ isDark: Boolean });
defineEmits(["menu-click", "toggle-dark"]);

const showMobileMenu = ref(false);

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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
