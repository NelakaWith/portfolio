<template>
  <div id="skills" class="space-y-8 mt-20">
    <div
      class="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule dark:border-rule-dark pb-4"
    >
      <div>
        <span
          class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-1"
        >
          Technical Inventory
        </span>
        <h3
          class="text-2xl sm:text-3xl font-heading font-normal text-ink dark:text-white"
        >
          Disciplines & Capabilities
        </h3>
      </div>
      <span class="text-xs font-mono text-ink-muted">
        Full-Stack Surface Area
      </span>
    </div>

    <!-- Structured Capability Matrix -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="category in categories"
        :key="category.name"
        class="border border-rule dark:border-rule-dark bg-paper dark:bg-dark rounded-md p-6 space-y-4"
      >
        <div
          class="flex items-center gap-2 border-b border-rule/60 dark:border-rule-dark/60 pb-3"
        >
          <Icon :icon="category.icon" class="w-4 h-4 text-primary" />
          <h4
            class="text-sm font-mono uppercase tracking-wider font-semibold text-ink dark:text-white"
          >
            {{ category.name }}
          </h4>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="px-2.5 py-1 text-xs font-mono rounded bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark text-ink dark:text-ink-dark"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const categories = [
  {
    name: "Languages & Runtimes",
    icon: "ph:code-bold",
    skills: [
      "TypeScript",
      "JavaScript (ESNext)",
      "Python",
      "SQL",
      "HTML5 / CSS3",
    ],
  },
  {
    name: "Frontend Systems",
    icon: "ph:browsers-bold",
    skills: [
      "Vue 3",
      "Nuxt 4",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Astro",
      "Pinia",
      "State Machines",
    ],
  },
  {
    name: "Backend Architecture",
    icon: "ph:cpu-bold",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "AI & Vector Pipelines",
    icon: "healthicons:artificial-intelligence",
    skills: [
      "RAG Pipelines",
      "Embeddings Search",
      "Gemini API",
      "Groq SDK",
      "Llama Tooling",
    ],
  },
  {
    name: "Engineering Infrastructure",
    icon: "ph:terminal-window-bold",
    skills: [
      "Docker",
      "GitHub Actions",
      "Gitlab CI",
      "Linux / Nginx",
      "Vite",
      "Playwright",
      "Vitest",
    ],
  },
  {
    name: "Methodology & Design",
    icon: "ph:compass-tool-bold",
    skills: [
      "Systems Architecture",
      "TDD Practices",
      "Figma",
      "Azure DevOps",
      "Performance Tuning",
    ],
  },
];
</script>
