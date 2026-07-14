<template>
  <div class="flex flex-col min-h-screen paper-container">
    <!-- Hero Section -->
    <section
      id="home"
      class="pt-32 pb-24 flex flex-col items-center justify-center relative overflow-hidden min-h-[90vh]"
    >
      <AppHero />
    </section>

    <!-- The Lab Section -->
    <section
      id="the-lab"
      class="py-24 border-t border-slate-200 dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 text-center">
          <h2
            class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
          >
            The <span class="title-highlight">Lab</span>
          </h2>
          <p
            class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            A streamlined look at commercial client systems and independent
            full-stack architectures built for scale, performance, and immediate
            reliability.
          </p>
        </div>

        <!-- Saadhaka Project detail -->
        <AppSaadhaka />

        <!-- Commercial Projects -->
        <div>
          <Projects />
        </div>

        <!-- Passion Projects -->
        <div class="mt-20">
          <Showcase />
        </div>
      </div>
    </section>

    <!-- Proof Section -->
    <section
      id="proof"
      class="py-24 border-t border-slate-200 dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 text-center">
          <h2
            class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
          >
            Professional <span class="title-highlight">Validation</span>
          </h2>
          <p
            class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Senior Software Engineer with 9+ years of commercial and solo
            experience specializing in the Javascript ecosystem. Proven track
            record of leading architectural migrations and optimizing delivery
            pipelines for speed and maintainability.
          </p>
        </div>

        <!-- Experience Component -->
        <div>
          <Experience />
        </div>

        <!-- Technical Arsenal Component -->
        <div class="mt-20">
          <Skills />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-24 border-t border-slate-200 dark:border-white/10"
    >
      <AppContactSection />
    </section>
  </div>
</template>

<script setup>
import AppHero from "../components/sections/AppHero.vue";
import AppSaadhaka from "../components/sections/AppSaadhaka.vue";
import Projects from "../components/sections/AppProjects.vue";
import Showcase from "../components/sections/AppShowcase.vue";
import Experience from "../components/sections/AppExperience.vue";
import Skills from "../components/sections/AppSkills.vue";
import AppContactSection from "../components/sections/AppContactSection.vue";

const title = "Software at the Speed of Thought";
const description =
  "I help teams eliminate architectural noise and restore momentum through High-Velocity primitives. Senior Fullstack Engineer & Systems Architect.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "https://nelaka.xyz/og_banner_02.png",
  twitterCard: "summary_large_image",
});
</script>
