<template>
  <section class="py-24 px-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    <div class="mx-auto container max-w-4xl">

      <!-- Bio Section -->
      <div class="mb-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8">
          Who am I?
        </h2>
        <div class="prose prose-lg dark:prose-invert mx-auto">
          <p class="text-xl font-light text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I’ve worked on production web applications, including internal dashboards, workflow tools, and customer-facing systems used by real users.
          </p>
          <p class="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            My focus has been on stability, maintainability, and ensuring the codebase remains understandable and reliable as requirements change. With nearly a decade in the industry, I’ve built everything from high-traffic dashboards to complex internal systems.
          </p>
        </div>
      </div>

      <!-- Tech Stack Badges -->
      <div class="mb-24 text-center">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-8">
          Core Technologies
        </h3>
        <ul class="flex flex-wrap justify-center gap-4">
          <li
            v-for="tech in technologies"
            :key="tech.name"
            class="flex items-center gap-3 py-2 px-5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <Icon
              :icon="tech.icon"
              class="w-6 h-6"
            />
            <span class="text-base font-medium text-slate-700 dark:text-slate-200">
              {{ tech.name }}
            </span>
          </li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div id="contact" class="text-center scroll-mt-32">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you're starting from an idea or improving an existing product,
          I can help you move forward with confidence.
        </p>

        <CompanyContact />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import CompanyContact from "./CompanyContact.vue";

const technologies = [
  { name: "React.js", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Vue 3", icon: "logos:vue" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express.js", icon: "simple-icons:express" },
  { name: "Nest.js", icon: "logos:nestjs" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "REST APIs", icon: "carbon:api" }
];
</script>

<style scoped>
/* No custom CSS needed - utilizing Tailwind utilities */
</style>
