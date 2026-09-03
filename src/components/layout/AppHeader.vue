<template>
  <header class="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50">
    <div
      class="bg-header-bg border border-rule dark:border-rule-dark rounded-md px-6 py-3.5 flex justify-between items-center shadow-md backdrop-blur-md"
    >
      <!-- Logo / Wordmark -->
      <NuxtLink
        to="/#home"
        class="cursor-pointer group select-none"
        @click="handleLogoClick"
      >
        <span
          class="font-heading font-medium text-xl text-ink dark:text-white tracking-tight group-hover:text-primary transition-colors"
        >
          Nelaka<span class="text-primary">.</span>
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-6">
        <template v-for="item in navItems" :key="item.id">
          <NuxtLink
            :to="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="text-xs font-mono uppercase tracking-widest text-ink dark:text-white hover:text-primary dark:hover:text-primary font-semibold transition-colors duration-150 py-1"
            @click="handleItemClick(item, $event)"
          >
            {{ item.label }}
          </NuxtLink>
        </template>

        <div class="w-px h-3.5 bg-rule dark:bg-rule-dark"></div>

        <!-- Theme Toggle -->
        <button
          class="p-1.5 rounded text-ink dark:text-white hover:text-primary dark:hover:text-primary hover:bg-paper-2 dark:hover:bg-dark-lighter transition-colors"
          @click="$emit('toggle-dark')"
          aria-label="Toggle dark mode"
        >
          <Icon v-if="isDark" icon="ph:sun-dim-bold" class="w-4 h-4" />
          <Icon v-else icon="ph:moon-stars-bold" class="w-4 h-4" />
        </button>
      </nav>

      <!-- Mobile Nav Toggle -->
      <button
        class="md:hidden text-ink dark:text-white p-1.5 rounded hover:bg-paper-2 dark:hover:bg-dark-lighter transition-colors"
        @click="showMobileMenu = true"
        aria-label="Open navigation menu"
      >
        <Icon icon="ph:list-bold" class="w-5 h-5" />
      </button>
    </div>
  </header>

  <!-- Mobile Nav Overlay -->
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="showMobileMenu"
        class="fixed inset-0 bg-paper dark:bg-dark z-[100] flex flex-col justify-center items-center px-6"
      >
        <button
          class="absolute top-7 right-7 text-ink-2 dark:text-ink-dark-2 hover:text-ink dark:hover:text-white p-2"
          @click="showMobileMenu = false"
          aria-label="Close navigation menu"
        >
          <Icon icon="ph:x-bold" class="w-6 h-6" />
        </button>

        <nav class="flex flex-col items-center space-y-7 text-center">
          <template v-for="item in navItems" :key="item.id">
            <NuxtLink
              :to="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              class="text-2xl font-heading font-normal text-ink dark:text-white hover:text-primary transition-colors"
              @click="handleItemClick(item, $event)"
            >
              {{ item.label }}
            </NuxtLink>
          </template>

          <div class="w-16 h-px bg-rule dark:bg-rule-dark my-4"></div>

          <!-- Mobile Theme Toggle -->
          <button
            class="flex items-center gap-2.5 px-5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-xs font-mono uppercase tracking-wider hover:border-primary transition-colors"
            @click="$emit('toggle-dark')"
          >
            <Icon v-if="isDark" icon="ph:sun-dim-bold" class="w-4 h-4" />
            <Icon v-else icon="ph:moon-stars-bold" class="w-4 h-4" />
            <span>{{ isDark ? "Light Mode" : "Dark Mode" }}</span>
          </button>
        </nav>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

defineProps({ isDark: Boolean });
defineEmits(["toggle-dark"]);

const route = useRoute();
const showMobileMenu = ref(false);

const navItems = [
  { id: "home", label: "Overview", href: "/#home" },
  { id: "the-lab", label: "Engineering", href: "/#the-lab" },
  { id: "proof", label: "Ledger", href: "/#proof" },
  { id: "contact", label: "Dispatch", href: "/#contact" },
  { id: "blog", label: "Blog", href: "/blog" },
];

function handleItemClick(item, event) {
  if (item.href.startsWith("/#")) {
    const hash = item.href.substring(1);
    if (route.path === "/") {
      event.preventDefault();
      const el = document.querySelector(hash);
      if (el && window.lenis) {
        window.lenis.scrollTo(el, {
          offset: 0,
          duration: 1.0,
        });
        history.pushState(null, "", hash);
      }
    }
  }
  showMobileMenu.value = false;
}

function handleLogoClick(event) {
  if (route.path === "/") {
    event.preventDefault();
    const el = document.querySelector("#home");
    if (el && window.lenis) {
      window.lenis.scrollTo(el, {
        offset: 0,
        duration: 1.0,
      });
      history.pushState(null, "", "#home");
    }
  }
  showMobileMenu.value = false;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
