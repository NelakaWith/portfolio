<template>
  <div class="max-w-4xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-7xl font-heading font-light text-slate-700 dark:text-white mb-6"
      >
        Ready to <span class="title-highlight">eliminate the noise?</span>
      </h2>
      <p
        class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8"
      >
        Whether you're looking for an MVP build, a technical audit, or a senior
        engineer to join your ranks, let's talk about velocity.
      </p>

      <div class="flex flex-wrap gap-4 justify-center items-center mb-16">
        <a
          href="mailto:nelakasnj@gmail.com"
          class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
        >
          <Icon icon="ph:envelope-simple-bold" class="w-5 h-5 text-primary" />
          <span class="text-sm font-medium text-slate-700 dark:text-white"
            >Email Me</span
          >
        </a>
        <a
          href="https://linkedin.com/in/nelaka-withanage"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
        >
          <Icon icon="ph:linkedin-logo-bold" class="w-5 h-5 text-[#0A66C2]" />
          <span class="text-sm font-medium text-slate-700 dark:text-white"
            >LinkedIn</span
          >
        </a>
        <a
          href="https://github.com/NelakaWith"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
        >
          <Icon
            icon="ph:github-logo-bold"
            class="w-5 h-5 text-slate-700 dark:text-gray-300"
          />
          <span class="text-sm font-medium text-slate-700 dark:text-white"
            >GitHub</span
          >
        </a>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto">
      <div
        class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-lg"
      >
        <CompanyContact />
      </div>
    </div>
  </div>
</template>

<script setup>
import CompanyContact from "../company/CompanyContact.vue";
</script>
