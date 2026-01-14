<template>
  <section class="py-16 px-4 mt-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto max-w-4xl">
      <!-- How I Work -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8">
          How I Work
        </h2>
        <ul class="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li class="flex items-start gap-3">
            <span class="text-primary dark:text-yellow-400 mt-1">•</span>
            <span>Start with clear requirements and scope</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary dark:text-yellow-400 mt-1">•</span>
            <span>Make business-first technical decisions</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary dark:text-yellow-400 mt-1">•</span>
            <span>Build clean, maintainable solutions</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary dark:text-yellow-400 mt-1">•</span>
            <span>Communicate clearly and honestly throughout</span>
          </li>
        </ul>
        <p class="mt-6 text-gray-600 dark:text-gray-400 italic">
          No over-engineering. No unnecessary tools. Just steady progress.
        </p>
      </div>

      <hr class="border-gray-300 dark:border-gray-600 my-12" />

      <!-- Experience -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          Experience
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I've worked on production web applications, including dashboards,
          internal tools, and customer-facing systems, with a focus on
          stability, maintainability, and long-term use.
        </p>
      </div>

      <hr class="border-gray-300 dark:border-gray-600 my-12" />

      <!-- Tech Stack -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          Tech Stack
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Vue 3 · TypeScript · Node/NestJS · PostgreSQL · REST APIs
        </p>
      </div>

      <hr class="border-gray-300 dark:border-gray-600 my-12" />

      <!-- Let's Work Together -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          Let's Work Together
        </h2>
        <p
          class="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Whether you're starting from an idea or improving an existing product,
          I can help you move forward with confidence.
        </p>
        <button class="cta-button">→ Get in touch</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.75rem;
  background: #cf886c;
  background: -webkit-linear-gradient(
    to bottom right,
    #cf886c 0%,
    #cf291a 100%
  );
  background: -moz-linear-gradient(to bottom right, #cf886c 0%, #cf291a 100%);
  background: linear-gradient(to bottom right, #cf886c 0%, #cf291a 100%);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
