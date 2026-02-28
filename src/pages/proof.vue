<template>
  <div class="pt-32 pb-20 min-h-screen">
    <!-- Profile Summary -->
    <section class="max-w-4xl mx-auto px-6 mb-20 text-center">
      <h1
        class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
      >
        Professional Validation
      </h1>
      <p
        class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
      >
        Senior Fullstack Engineer with 5+ years of experience specializing in
        the Vue.js ecosystem. Proven track record of leading architectural
        migrations and optimizing delivery pipelines for speed and
        maintainability.
      </p>
    </section>

    <!-- Professional Experience (Reused Component) -->
    <div class="max-w-7xl mx-auto relative z-20">
      <Experience />
    </div>

    <!-- The Technical Arsenal (Technologies) -->
    <div class="max-w-7xl mx-auto mt-20 relative z-20">
      <Skills />
    </div>
  </div>
</template>

<script setup>
import Experience from "../components/sections/AppExperience.vue";

import Skills from "../components/sections/AppSkills.vue";

const title = "Proof | Nelaka Withanage";
const description =
  "Professional Validation, Experience, and Technical Arsenal.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>
