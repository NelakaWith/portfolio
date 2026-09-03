<template>
  <article
    class="border border-rule dark:border-rule-dark bg-paper dark:bg-dark rounded-md p-8 md:p-10 mb-16 relative overflow-hidden"
  >
    <!-- Architectural Header Row -->
    <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-rule dark:border-rule-dark">
      <div class="flex items-center gap-3">
        <img
          v-if="project.logo"
          :src="project.logo"
          :alt="project.title"
          class="w-10 h-10 object-contain"
        />
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
            Flagship Engineering Specimen
          </span>
          <h3 class="text-2xl sm:text-3xl font-heading font-medium text-ink dark:text-white">
            {{ project.title }}
          </h3>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink-2 dark:text-ink-dark-2">
          Active Engineering
        </span>
        <span class="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded bg-primary/10 text-primary border border-primary/20">
          Deterministic Engine
        </span>
      </div>
    </div>

    <!-- Main Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
      <div class="lg:col-span-5 space-y-4">
        <p class="text-base sm:text-lg text-ink dark:text-ink-dark leading-relaxed font-sans">
          {{ project.description }}
        </p>

        <div class="pt-2">
          <span class="text-xs font-mono uppercase tracking-wider text-ink-muted block mb-2">Stack Architecture</span>
          <div class="flex flex-wrap gap-1.5 font-mono text-xs">
            <span class="px-2 py-1 bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark rounded text-ink-2 dark:text-ink-dark-2">NestJS API</span>
            <span class="px-2 py-1 bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark rounded text-ink-2 dark:text-ink-dark-2">React Client</span>
            <span class="px-2 py-1 bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark rounded text-ink-2 dark:text-ink-dark-2">Nuxt Web</span>
            <span class="px-2 py-1 bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark rounded text-ink-2 dark:text-ink-dark-2">State Graph</span>
          </div>
        </div>
      </div>

      <!-- Detail Specs -->
      <div class="lg:col-span-7 space-y-6">
        <div class="p-5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter space-y-2">
          <div class="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
            <Icon icon="ph:graph-bold" class="w-4 h-4" />
            <span>01 / Deterministic Rule-Based Graph Engine</span>
          </div>
          <p class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans">
            {{ project.solutionDescription }}
          </p>
        </div>

        <div class="p-5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter space-y-2">
          <div class="flex items-center gap-2 text-ink dark:text-white font-mono text-xs uppercase tracking-wider font-semibold">
            <Icon icon="ph:flask-bold" class="w-4 h-4" />
            <span>02 / Interactive Sandbox Lab & Traversal Solver</span>
          </div>
          <p class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans">
            {{ project.impactDescription }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const project = {
  id: "saadhaka-ils",
  active: true,
  logo: "/products/saadhaka.svg",
  title: "Saadhaka ILS",
  description:
    "Bridging static textbooks and interactive dynamic synthesis. Saadhaka models organic chemistry as a graph-based state ecosystem for high-precision examination workflows.",
  solutionDescription:
    "Built on a strict, rule-based state machine treating chemical compounds as functional nodes and syllabus-approved reagents as directed edges. By strictly encoding exam-valid conditions, it completely eliminates non-deterministic AI hallucinations.",
  impactDescription:
    "Features a visual workspace where students drag and chain reagents to explore reaction pathways, backed by a graph traversal solver calculating the most efficient, syllabus-safe conversion routes between arbitrary compound pairs.",
};
</script>
