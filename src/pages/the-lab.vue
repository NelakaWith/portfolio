<template>
  <div class="pt-32 pb-20 min-h-screen">
    <div class="max-w-4xl mx-auto px-6">

      <section class="mb-16 text-center">
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6">
          The Lab
        </h1>
        <p class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Case studies and deep dives into High-Velocity architectures and complex problem solving.
        </p>
      </section>

      <div class="space-y-16">
        <article
          v-for="(study, index) in caseStudies"
          :key="study.id"
          class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div
            class="inline-block px-3 py-1 mb-6 rounded-full text-sm font-semibold tracking-wide"
            :class="study.badgeClass"
          >
            Case Study {{ index + 1 }}
          </div>
          <h2 class="text-3xl font-bold text-slate-700 dark:text-white mb-6">{{ study.title }}</h2>

          <div class="prose prose-slate dark:prose-invert max-w-none">
            <p class="text-lg text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              "{{ study.description }}"
            </p>

            <div class="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3">
                  <Icon :icon="study.solutionIcon" :class="study.solutionIconClass" /> {{ study.solutionTitle }}
                </h3>
                <p class="text-slate-600 dark:text-gray-400">
                  {{ study.solutionDescription }}
                </p>
              </div>

              <div>
                <h3 class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3">
                  <Icon :icon="study.impactIcon" :class="study.impactIconClass" /> {{ study.impactTitle }}
                </h3>
                <p class="text-slate-600 dark:text-gray-400">
                  {{ study.impactDescription }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Commercial Projects -->
      <section class="mt-20">
        <Projects />
      </section>

    </div>
  </div>
</template>

<script setup>
import Projects from "../components/sections/AppProjects.vue";

const title = "The Lab | Nelaka Withanage";
const description = "Case studies and deep dives into complex problem solving.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const caseStudies = [
  {
    id: "hvdc-engine",
    badgeClass: "bg-primary/10 text-primary",
    title: "The HVDC Engine",
    description: "The challenge was simple: How do we build a system that can handle 100+ different document types without creating 100+ different Vue components?",
    solutionIcon: "ph:wrench-duotone",
    solutionIconClass: "text-primary",
    solutionTitle: "The Solution",
    solutionDescription: "I built a recursive rendering engine using Vue 3 and TypeScript that translates complex metadata into reactive forms.",
    impactIcon: "ph:lightning-duotone",
    impactIconClass: "text-secondary",
    impactTitle: "The Impact",
    impactDescription: "We reduced the time to add a new document type from a 3-day development cycle to a 5-minute metadata update."
  },
  // {
  //   id: "subscription-manager",
  //   badgeClass: "bg-secondary/10 text-secondary",
  //   title: "Subscription Manager",
  //   description: "A study in lean performance. I needed a way to track SaaS margins across multiple developer environments without the bloat of traditional ERP tools.",
  //   solutionIcon: "ph:cpu-duotone",
  //   solutionIconClass: "text-primary",
  //   solutionTitle: "The Tech",
  //   solutionDescription: "Built on a Turborepo foundation, leveraging Vite for sub-second hot reloads and a highly optimized Node.js backend.",
  //   impactIcon: "ph:chart-line-up-duotone",
  //   impactIconClass: "text-secondary",
  //   impactTitle: "The Result",
  //   impactDescription: "A tool that provides instant visibility into operational runway, used to audit and reclaim lost margins."
  // }
];
</script>
