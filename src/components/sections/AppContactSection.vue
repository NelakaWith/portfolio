<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <div class="text-center mb-12 space-y-4">
      <span class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
        Direct Engagement
      </span>
      <h2 class="text-3xl sm:text-5xl font-heading font-normal text-ink dark:text-white">
        Initiate Technical Dispatch
      </h2>
      <p class="text-base sm:text-lg text-ink-2 dark:text-ink-dark-2 leading-relaxed max-w-xl mx-auto font-sans">
        Available for systems architecture, technical prototype builds, or senior full-stack leadership. Let's discuss requirements.
      </p>

      <!-- Channels -->
      <div class="flex flex-wrap gap-3 justify-center items-center pt-2">
        <a
          href="mailto:nelakasnj@gmail.com"
          class="inline-flex items-center gap-2 px-4 py-2 rounded border border-rule dark:border-rule-dark bg-paper dark:bg-dark-lighter hover:border-primary text-xs font-mono uppercase tracking-wider text-ink dark:text-white transition-colors"
        >
          <Icon icon="ph:envelope-simple-bold" class="w-4 h-4 text-primary" />
          <span>Email</span>
        </a>
        <a
          href="https://linkedin.com/in/nelaka-withanage"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded border border-rule dark:border-rule-dark bg-paper dark:bg-dark-lighter hover:border-primary text-xs font-mono uppercase tracking-wider text-ink dark:text-white transition-colors"
        >
          <Icon icon="ph:linkedin-logo-bold" class="w-4 h-4 text-primary" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/NelakaWith"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded border border-rule dark:border-rule-dark bg-paper dark:bg-dark-lighter hover:border-primary text-xs font-mono uppercase tracking-wider text-ink dark:text-white transition-colors"
        >
          <Icon icon="ph:github-logo-bold" class="w-4 h-4 text-primary" />
          <span>GitHub</span>
        </a>
      </div>
    </div>

    <!-- Contact Form Card -->
    <div class="max-w-2xl mx-auto border border-rule dark:border-rule-dark rounded-md bg-paper dark:bg-dark p-6 sm:p-10">
      <CompanyContact />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import CompanyContact from "../company/CompanyContact.vue";
</script>
