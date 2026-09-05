<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section: Workbench Entry -->
    <section
      id="home"
      class="pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center relative"
    >
      <AppHero />
    </section>

    <!-- The Lab Section: Specimen + Commercial + Bento Tools -->
    <section
      id="the-lab"
      class="py-20 sm:py-28 border-t border-rule dark:border-rule-dark"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-14 space-y-3">
          <span
            class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block"
          >
            01 / Technical Architecture
          </span>
          <h2
            class="text-3xl sm:text-5xl font-heading font-normal text-ink dark:text-white"
          >
            The Engineering Lab
          </h2>
          <p
            class="text-base sm:text-lg text-ink-2 dark:text-ink-dark-2 leading-relaxed max-w-2xl font-sans"
          >
            Commercial production engines and independent full-stack
            architectures engineered for scale, determinism, and high runtime
            efficiency.
          </p>
        </div>

        <!-- Saadhaka ILS Specimen Card -->
        <AppSaadhaka />

        <!-- Commercial Delivery Ledger -->
        <Projects />

        <!-- Independent Tools Bento Grid -->
        <Showcase />
      </div>
    </section>

    <!-- Proof Section: Experience Ledger + Technical Capabilities -->
    <section
      id="proof"
      class="py-20 sm:py-28 border-t border-rule dark:border-rule-dark bg-paper-2/40 dark:bg-dark-lighter/20"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-14 space-y-3">
          <span
            class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block"
          >
            02 / Track Record & Capabilities
          </span>
          <h2
            class="text-3xl sm:text-5xl font-heading font-normal text-ink dark:text-white"
          >
            Career Ledger & Competencies
          </h2>
          <p
            class="text-base sm:text-lg text-ink-2 dark:text-ink-dark-2 leading-relaxed max-w-2xl font-sans"
          >
            Senior software engineer with 9+ years architecting frontends,
            deterministic APIs, and data-intensive client platforms.
          </p>
        </div>

        <!-- Experience Ledger Component -->
        <Experience />

        <!-- Technical Capabilities Matrix -->
        <Skills />
      </div>
    </section>

    <!-- Contact Section: Direct Dispatch -->
    <section
      id="contact"
      class="py-20 sm:py-28 border-t border-rule dark:border-rule-dark"
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

const title = "Nelaka Withanage — Senior Product Engineer";
const description =
  "Senior Product Engineer helping founders and teams turn ambitious ideas into fast, dependable software that scales smoothly.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "https://nelaka.xyz/og_banner_02.png",
  twitterCard: "summary_large_image",
});
</script>
