<template>
  <div class="space-y-8 mt-20">
    <div class="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule dark:border-rule-dark pb-4">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-1">
          Self-Directed R&D
        </span>
        <h3 class="text-2xl sm:text-3xl font-heading font-normal text-ink dark:text-white">
          Independent Systems & Tools
        </h3>
      </div>
      <span class="text-xs font-mono text-ink-muted">
        Bento Workpieces
      </span>
    </div>

    <!-- Asymmetric Bento Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        class="border border-rule dark:border-rule-dark bg-paper dark:bg-dark rounded-md p-6 sm:p-8 flex flex-col justify-between hover:border-ink/40 dark:hover:border-white/30 transition-colors"
        :class="getGridSpan(index)"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-primary font-semibold uppercase tracking-wider">
              TOOL_{{ String(index + 1).padStart(2, '0') }}
            </span>
            <div class="flex items-center gap-3">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Icon icon="ph:github-logo-bold" class="w-4 h-4" />
                <span>Code</span>
              </a>
              <a
                v-if="project.web"
                :href="project.web"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 dark:text-ink-dark-2 hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <Icon icon="ph:arrow-square-out-bold" class="w-4 h-4" />
                <span>Deploy</span>
              </a>
            </div>
          </div>

          <h4 class="text-xl sm:text-2xl font-heading font-medium text-ink dark:text-white">
            {{ project.name }}
          </h4>

          <p class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-rule/50 dark:border-rule-dark/50">
          <span
            v-for="tech in project.technologies"
            :key="tech"
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
import { Icon } from "@iconify/vue";

function getGridSpan(index) {
  // Asymmetric Bento rhythm: 7-5, 5-7
  switch (index) {
    case 0:
      return "lg:col-span-7";
    case 1:
      return "lg:col-span-5";
    case 2:
      return "lg:col-span-5";
    case 3:
      return "lg:col-span-7";
    default:
      return "lg:col-span-6";
  }
}

const projects = [
  {
    name: "YouTube Competitor Analyzer",
    description:
      "Direct channel metric ingest and competitive content intelligence tool built for creator teams needing data-driven analytics without dashboard overhead.",
    technologies: ["YouTube Data API", "Next.js", "Shadcn/ui", "Tailwind CSS"],
    github: "https://github.com/NelakaWith/vid-metrics-competitor-analysis",
    web: "https://vid-metrics-competitor-analysis.netlify.app/",
  },
  {
    name: "DeClerk RAG Assistant",
    description:
      "Enterprise Retrieval-Augmented Generation agent with deep PDF structural extraction, pgvector semantic vector search, and a multi-provider model pipeline.",
    technologies: ["Node.js/Express", "pgvector", "Gemini API", "Groq SDK"],
    github: "https://github.com/NelakaWith/de-clerk",
    web: "https://declerk.nelaka.xyz/",
  },
  {
    name: "Gloire Performance Roadmap",
    description:
      "Goal-tracking and operational attendance management system for educational programs with interactive cohort visualization.",
    technologies: ["Vue 3", "Express.js", "MySQL", "PrimeVue", "Tailwind CSS"],
    github: "https://roadmap-demo.nelaka.xyz/login",
    web: "https://roadmap-demo.nelaka.xyz/login",
  },
  {
    name: "The Black Box Beacon",
    description:
      "Mental recovery logging journal treating personal notes as structured survivability telemetry rather than generic wellness surveys.",
    technologies: ["Vue 3", "NestJS", "PostgreSQL", "Groq SDK", "Tailwind CSS"],
    github: "https://github.com/NelakaWith/black-box-beacon",
    web: "",
  },
];
</script>
