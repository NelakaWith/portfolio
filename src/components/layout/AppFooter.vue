<template>
  <footer class="border-t border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter py-16 mt-auto">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        <!-- Colophon Bio -->
        <div class="md:col-span-6 space-y-4">
          <div class="flex items-center gap-2">
            <span class="font-heading font-normal text-2xl text-ink dark:text-white">
              Nelaka<span class="text-primary">.</span>
            </span>
            <span class="text-xs font-mono uppercase tracking-widest px-2 py-0.5 border border-rule dark:border-rule-dark rounded text-ink-2 dark:text-ink-dark-2">
              Architect
            </span>
          </div>
          <p class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed max-w-md">
            Full-stack systems engineer focused on deterministic engines, compiler frontends, and high-velocity product architectures. Operating remotely from Colombo, Sri Lanka.
          </p>
          <div class="pt-2">
            <p class="text-xs font-mono text-ink-muted dark:text-ink-muted">
              Colophon: Nuxt 4 · Tailwind CSS · Typeset in Fraunces & Inter · Hosted on Edge
            </p>
          </div>
        </div>

        <!-- Quick Index -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-widest text-ink dark:text-white font-semibold">
            Index
          </h4>
          <ul class="space-y-2 text-sm font-sans">
            <li>
              <a href="/#home" class="text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors">Overview</a>
            </li>
            <li>
              <a href="/#the-lab" class="text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors">Engineering & Projects</a>
            </li>
            <li>
              <a href="/#proof" class="text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors">Career Ledger</a>
            </li>
            <li>
              <a href="/blog" class="text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors">Journal / Blog</a>
            </li>
            <li>
              <a href="/#contact" class="text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors">Direct Dispatch</a>
            </li>
          </ul>
        </div>

        <!-- Channels -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-widest text-ink dark:text-white font-semibold">
            Channels
          </h4>
          <ul class="space-y-2 text-sm font-sans">
            <li v-for="social in socialLinks" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors"
              >
                <Icon :icon="social.icon" class="w-4 h-4" />
                <span>{{ social.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Rule & Copyright -->
      <div class="pt-8 border-t border-rule dark:border-rule-dark flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-ink-muted dark:text-ink-muted">
        <p>© {{ new Date().getFullYear() }} Nelaka Withanage. All rights reserved.</p>
        <p>Built with restraint. Zero artificial latency.</p>
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
    icon: "ph:github-logo-bold",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nelaka-withanage",
    icon: "ph:linkedin-logo-bold",
  },
  {
    name: "Email",
    url: "mailto:nelakasnj@gmail.com",
    icon: "ph:envelope-simple-bold",
  },
];
</script>
