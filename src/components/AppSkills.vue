<template>
  <section id="skills" class="py-12">
    <h2 class="text-3xl font-bold text-dark mb-8">Key Skills</h2>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white rounded-lg shadow-sm p-6"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center cursor-pointer"
      >
        <Icon :icon="skill.icon" class="w-6 h-6 mr-3 text-primary" />
        <h3 class="font-medium text-dark">{{ skill.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React.js", icon: "logos:react" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "simple-icons:express" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Material UI", icon: "logos:material-ui" },
  { name: "Quasar UI", icon: "vscode-icons:file-type-quasar" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Webpack", icon: "logos:webpack" },
  { name: "Jest", icon: "vscode-icons:file-type-jest" },
  { name: "REST API", icon: "carbon:api" },
  { name: "SCSS", icon: "vscode-icons:file-type-scss" },
  { name: "LESS", icon: "vscode-icons:file-type-less" },
  { name: "jQuery", icon: "simple-icons:jquery" },
  { name: "GSAP", icon: "simple-icons:greensock" },
  { name: "WordPress", icon: "logos:wordpress-icon" },
  { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  { name: "Ionic", icon: "logos:ionic-icon" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Vuex", icon: "material-icon-theme:vuex-store" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Agile with Jira", icon: "devicon:jiraalign" },
  { name: "DevExtreme", icon: "simple-icons:devexpress" },
  { name: "Prime Vue", icon: "simple-icons:primevue" },
  { name: "Azure DevOps", icon: "devicon:azuredevops" },
];
</script>
