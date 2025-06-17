<template>
  <section id="skills" class="skills-section py-12">
    <h2 class="skills-title text-3xl font-bold text-dark dark:text-white mb-8">
      Key Skills
    </h2>
    <ul class="skills-list flex flex-wrap gap-4 justify-center">
      <li
        v-for="skill in skills"
        :key="skill.name"
        class="skill-item flex items-center gap-3 py-2 px-4 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer shadow-sm"
      >
        <Icon
          :icon="skill.icon"
          class="skill-icon w-6 h-6 text-primary dark:text-gray-300"
        />
        <span class="skill-name text-lg text-dark dark:text-white">{{
          skill.name
        }}</span>
      </li>
    </ul>
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
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Material UI", icon: "logos:material-ui" },
  { name: "Quasar UI", icon: "vscode-icons:file-type-quasar" },
  { name: "DevExtreme", icon: "simple-icons:devexpress" },
  { name: "Prime Vue", icon: "simple-icons:primevue" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "SCSS", icon: "vscode-icons:file-type-scss" },
  { name: "LESS", icon: "vscode-icons:file-type-less" },
  { name: "jQuery", icon: "simple-icons:jquery" },
  // { name: "GSAP", icon: "simple-icons:greensock" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Vuex", icon: "material-icon-theme:vuex-store" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "simple-icons:express" },
  { name: "REST API", icon: "carbon:api" },
  { name: "MySQL", icon: "devicon:mysql" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Vite", icon: "devicon:vitejs" },
  { name: "Jest", icon: "vscode-icons:file-type-jest" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  { name: "Agile with Azure DevOps", icon: "devicon:azuredevops" },
  { name: "Agile with Jira", icon: "devicon:jiraalign" },
  // { name: "WordPress", icon: "dashicons:wordpress" },
  // { name: "Ionic", icon: "logos:ionic-icon" },
];
</script>
