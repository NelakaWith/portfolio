<template>
  <section id="skills" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-sm font-bold text-primary tracking-widest uppercase mb-2"
        >
          Expertise
        </h2>
        <h3
          class="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white"
        >
          Technologies & Tools
        </h3>
      </div>

      <!-- Category Sections -->
      <div class="space-y-12">
        <div v-for="category in categories" :key="category.name">
          <!-- Category Header -->
          <div class="flex items-center gap-3 mb-5">
            <Icon :icon="category.icon" class="w-5 h-5 text-primary" />
            <h4 class="text-lg font-semibold text-slate-800 dark:text-white">
              {{ category.name }}
            </h4>
            <div class="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
          </div>

          <!-- Skills Grid -->
          <div class="flex flex-wrap gap-2 cursor-pointer">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="group flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 dark:bg-white/5 dark:border-white/10 rounded-lg hover:border-primary/40 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-200"
            >
              <Icon
                :icon="skill.icon"
                class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover:text-primary transition-colors"
              />
              <span
                class="text-sm font-medium text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
                >{{ skill.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const categories = [
  {
    name: "Frontend",
    icon: "ph:browser-bold",
    skills: [
      { name: "HTML5", icon: "vscode-icons:file-type-html" },
      { name: "CSS3", icon: "devicon:css3" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React.js", icon: "logos:react" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Astro", icon: "logos:astro-icon" },
    ],
  },
  {
    name: "UI Tools & Libraries",
    icon: "ph:paint-brush-bold",
    skills: [
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Material UI", icon: "logos:material-ui" },
      { name: "Shadcn UI", icon: "simple-icons:shadcnui" },
      { name: "Quasar UI", icon: "vscode-icons:file-type-quasar" },
      { name: "Prime Vue", icon: "simple-icons:primevue" },
      { name: "SCSS", icon: "vscode-icons:file-type-scss" },
      { name: "LESS", icon: "vscode-icons:file-type-less" },
    ],
  },
  {
    name: "State Management",
    icon: "ph:database-bold",
    skills: [
      { name: "Pinia", icon: "logos:pinia" },
      { name: "Vuex", icon: "material-icon-theme:vuex-store" },
      { name: "Redux", icon: "logos:redux" },
      { name: "jQuery", icon: "simple-icons:jquery" },
    ],
  },
  {
    name: "Backend",
    icon: "ph:hard-drives-bold",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Nest.js", icon: "material-icon-theme:nest" },
      { name: "REST API", icon: "carbon:api" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "MySQL", icon: "devicon:mysql" },
    ],
  },
  {
    name: "DevOps & Tooling",
    icon: "ph:gear-bold",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub Actions", icon: "devicon-plain:githubactions" },
      { name: "Turborepo", icon: "vscode-icons:file-type-turbo" },
      { name: "Drone CI", icon: "logos:drone-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Vite", icon: "devicon:vitejs" },
      { name: "Jest", icon: "vscode-icons:file-type-jest" },
    ],
  },
  {
    name: "Design & Project Management",
    icon: "ph:palette-bold",
    skills: [
      { name: "Figma", icon: "logos:figma" },
      { name: "Photoshop", icon: "logos:adobe-photoshop" },
      { name: "Azure DevOps", icon: "devicon:azuredevops" },
      { name: "Jira", icon: "devicon:jiraalign" },
    ],
  },
];
</script>
