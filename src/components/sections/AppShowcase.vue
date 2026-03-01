<template>
  <section class="relative overflow-hidden">
    <!-- Background decoration -->
    <div
      class="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full -z-10 pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16 text-center">
        <h3
          class="text-3xl md:text-5xl font-heading font-bold text-slate-700 dark:text-white"
        >
          Passion Projects
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.name"
          class="group flex flex-col bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/5 dark:shadow-none rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 relative"
        >
          <!-- Hover Background Shimmer -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1 relative z-20">
            <h3
              class="text-2xl font-bold text-slate-700 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300"
            >
              {{ project.name }}
            </h3>
            <p
              class="text-slate-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-1"
            >
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 text-xs font-mono bg-slate-100 border border-slate-200 text-slate-600 dark:bg-dark dark:border-white/10 dark:text-gray-400 rounded group-hover:border-primary/20 transition-colors duration-300"
              >
                {{ tech }}
              </span>
            </div>

            <div
              class="flex gap-4 pt-4 border-t border-slate-100 dark:border-white/5"
            >
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white hover:text-primary transition-colors group/link"
              >
                <Icon icon="ph:github-logo-bold" class="w-5 h-5 group-hover/link:-translate-y-0.5 transition-transform" />
                Code
              </a>
              <a
                v-if="project.web"
                :href="project.web"
                target="_blank"
                class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white hover:text-secondary transition-colors group/link"
              >
                <Icon icon="ph:globe-bold" class="w-5 h-5 group-hover/link:-translate-y-0.5 transition-transform" />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const projects = [
  {
    name: "Personal Portfolio",
    description:
      "A modern, responsive portfolio site built with Vue 3, Tailwind CSS, and Vite. Features dark mode, project showcase, and smooth navigation.",
    technologies: ["Vue 3", "Tailwind CSS", "Vite"],
    github: "https://github.com/NelakaWith/portfolio",
    web: "",
    image: "/sample_app_portfolio.png",
  },
  {
    name: "FAQ Chatbot",
    description:
      "OpenRouter AI-powered chatbot with intelligent knowledge base search and LLM integration, built with Vue 3 and Node.js.",
    technologies: [
      "Fuzzy Search",
      "Express/Node",
      "Groq SDK",
      "OpenRouter API",
    ],
    github: "https://github.com/NelakaWith/faq-chatbot",
    web: "https://faq-chatbot.nelaka.xyz/",
    image: "/sample_app_chatbot.png",
  },
  {
    name: "Pulse Ops",
    description:
      "A modern GitHub analytics dashboard built with Next.js 16 and TypeScript, featuring real-time user metrics, contribution visualization, language usage insights, and AI-powered repository analysis.",
    technologies: [
      "Next.js",
      "Shadcn/ui",
      "TypeScript",
      "GitHub API",
      "GraphQL",
    ],
    github: "https://github.com/NelakaWith/pulse-ops",
    web: "",
    image: "/sample_app_pulse_ops.png",
  },
  {
    name: "Gloire RoadMap",
    description:
      "Gloire Road Map is a modern full-stack application designed for educational institutions and training programs to track student goals, manage attendance, and analyze performance metrics.",
    technologies: ["Vue 3", "Express.js", "MySQL", "PrimeVue", "Tailwind CSS"],
    github: "https://roadmap-demo.nelaka.xyz/login",
    web: "https://roadmap-demo.nelaka.xyz/login",
    image: "/sample_app_roadmap.png",
  },
  {
    name: "The Black Box Beacon",
    description:
      'This is a JJournaling app for mental recovery. Most mental health apps are built for "improvement." This tool is built for survivability. It treats the user not as a "patient" to be fixed, but as a "survivor" whose data matters.',
    technologies: [
      "Vue 3",
      "Nest.js",
      "PostgreSQL",
      "Groq SDK",
      "Tailwind CSS",
    ],
    github: "https://github.com/NelakaWith/black-box-beacon",
    web: "",
    image: "",
  },
];
</script>
