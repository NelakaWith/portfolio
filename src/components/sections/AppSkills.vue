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

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group relative flex flex-col items-center justify-center p-6 bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/5 dark:shadow-none rounded-2xl hover:border-primary/30 transition-all duration-300"
        >
          <!-- Hover Glow -->
          <div
            class="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          ></div>

          <Icon
            :icon="skill.icon"
            class="w-10 h-10 mb-3 text-slate-400 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
          />
          <span
            class="text-sm font-medium text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors z-10"
            >{{ skill.name }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "devicon:css3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React.js", icon: "logos:react" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Astro", icon: "logos:astro-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Material UI", icon: "logos:material-ui" },
  { name: "Shadcn UI", icon: "simple-icons:shadcnui" },
  { name: "Quasar UI", icon: "vscode-icons:file-type-quasar" },
  { name: "Prime Vue", icon: "simple-icons:primevue" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "SCSS", icon: "vscode-icons:file-type-scss" },
  { name: "LESS", icon: "vscode-icons:file-type-less" },
  { name: "jQuery", icon: "simple-icons:jquery" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Vuex", icon: "material-icon-theme:vuex-store" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "simple-icons:express" },
  { name: "Nest.js", icon: "material-icon-theme:nest" },
  { name: "REST API", icon: "carbon:api" },
  { name: "GraphQL", icon: "logos:graphql" },
  { name: "MySQL", icon: "devicon:mysql" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub Actions", icon: "devicon-plain:githubactions" },
  { name: "Turborepo", icon: "vscode-icons:file-type-turbo" },
  { name: "Drone CI", icon: "logos:drone-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Nginx", icon: "logos:nginx" },
  { name: "Vite", icon: "devicon:vitejs" },
  { name: "Jest", icon: "vscode-icons:file-type-jest" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  { name: "Agile (Azure)", icon: "devicon:azuredevops" },
  { name: "Agile (Jira)", icon: "devicon:jiraalign" },
];
</script>
