<template>
  <footer class="bg-gray-100 dark:bg-gray-800 py-12 mt-auto">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p>© {{ new Date().getFullYear() }} All Rights Reserved.</p>
          <p class="mt-1">
            Built by
            <a
              href="https://github.com/NelakaWith"
              target="_blank"
              rel="noopener"
              class="text-orange-500 hover:text-orange-600 font-medium"
              >@NelakaWith</a
            >
            and powered by
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener"
              class="text-orange-500 hover:text-orange-600 font-medium"
              >Vue 3</a
            >
            and
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener"
              class="text-orange-500 hover:text-orange-600 font-medium"
              >Tailwind CSS</a
            >.
          </p>
        </div>

        <div class="flex gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            :aria-label="social.name"
          >
            <Icon :icon="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/NelakaWith",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nelakawith",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:nelakasnj@gmail.com",
    icon: "mdi:email",
  },
];
</script>

<style scoped>
/* Scoped styles if necessary, mostly utilizing Tailwind utils */
</style>
