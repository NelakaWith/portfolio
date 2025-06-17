<template>
  <section id="showcase" class="py-12">
    <h2 class="skills-title text-3xl font-bold text-dark dark:text-white mb-8">
      Showcase
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.name"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.name + ' screenshot'"
          class="w-full h-60 object-cover rounded mb-4 border border-gray-200 dark:border-gray-700"
        />
        <h3 class="text-xl font-semibold text-dark dark:text-white mb-2">
          {{ project.name }}
        </h3>
        <p class="text-gray-700 dark:text-gray-200 mb-4 flex-1">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full dark:bg-yellow-400 dark:bg-opacity-10 dark:text-yellow-400"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex gap-4 mt-auto">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center text-primary dark:text-yellow-400 font-medium hover:underline"
          >
            <Icon
              icon="mdi:github"
              class="w-5 h-5 mr-1 -mt-0.5 group-hover:scale-110 transition-transform"
            />
            <span class="leading-tight">GitHub</span>
          </a>
          <a
            v-if="project.web"
            :href="project.web"
            target="_blank"
            class="group inline-flex items-center text-primary dark:text-yellow-400 font-medium hover:underline"
          >
            <Icon
              icon="mdi:web"
              class="w-5 h-5 mr-1 -mt-0.5 group-hover:scale-110 transition-transform"
            />
            <span class="leading-tight">Live App</span>
          </a>
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
    web: "https://nelakawith.netlify.app/",
    image: "/sample_app_portfolio.png",
  },
  {
    name: "Calendar App",
    description:
      "A full-stack web app to schedule, view, and manage events via an interactive calendar interface.",
    technologies: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Vue Router",
      "Sass/SCSS",
      "Express.js (ES modules)",
      "Sequelize ORM",
      "MySQL",
    ],
    github: "https://github.com/NelakaWith/event-calendar-app",
    web: "https://nw-event-calendar-app-client.netlify.app/",
    image: "/sample_app_calendar.png",
  },
];
</script>
