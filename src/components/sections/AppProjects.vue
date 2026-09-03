<template>
  <div id="projects" class="space-y-8">
    <div class="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule dark:border-rule-dark pb-4">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-1">
          Production Deployments
        </span>
        <h3 class="text-2xl sm:text-3xl font-heading font-normal text-ink dark:text-white">
          Commercial Delivery
        </h3>
      </div>
      <span class="text-xs font-mono text-ink-muted">
        06 Verified Systems
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="border border-rule dark:border-rule-dark bg-paper dark:bg-dark rounded-md p-6 flex flex-col justify-between hover:border-ink/40 dark:hover:border-white/30 transition-colors"
      >
        <div class="space-y-3">
          <div class="flex items-center justify-between text-xs font-mono text-ink-muted">
            <span>SYS_{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="text-ink-2 dark:text-ink-dark-2">{{ project.technologies[0] }}</span>
          </div>

          <h4 class="text-lg font-heading font-medium text-ink dark:text-white">
            {{ project.name }}
          </h4>

          <p class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-rule/50 dark:border-rule-dark/50">
          <span
            v-for="(tech, i) in project.technologies"
            :key="i"
            class="px-2 py-0.5 text-xs font-mono rounded bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark text-ink-2 dark:text-ink-dark-2"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "Deal Flow - Calendar and Events",
    description:
      "Engineered the Calendar and Events synchronization module for Startup Steroid's flagship Deal Flow investor platform.",
    technologies: ["Vue.js", "JavaScript ES6", "CSS", "Azure DevOps"],
  },
  {
    name: "Jiva.ai Studio Portal",
    description:
      "Frontend systems development for multimodal zero-code AI workflow orchestrator and dataset modeling engine.",
    technologies: ["Vue 3", "TypeScript", "PrimeVue", "Vue Query"],
  },
  {
    name: "Digital Banking & Mobile Wallet",
    description:
      "Financial technology UI architecture for mobile banking client interfaces and telco-grade payment platforms.",
    technologies: ["React", "JavaScript", "SCSS", "Material UI"],
  },
  {
    name: "Tiks Enterprise Compliance",
    description:
      "Delivered cross-platform UI component library for safety & compliance platform across desktop and hybrid mobile apps.",
    technologies: ["Vue.js", "TypeScript", "Ionic Capacitor", "Vuex"],
  },
  {
    name: "Expedia Promotions Engine",
    description:
      "High-traffic frontend promotional templates and booking platforms serving global travel consumer traffic.",
    technologies: ["JavaScript", "HTML5", "LESS", "Templating"],
  },
  {
    name: "OzoneDesk Enterprise ERP",
    description:
      "Core UI interfaces and workflow management modules for monolithic enterprise resource management systems.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
  },
];
</script>
