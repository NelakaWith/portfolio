<template>
  <section id="skills" class="py-12">
    <h2 class="text-3xl font-bold text-dark dark:text-white mb-8">
      Key Skills
    </h2>
    <ul class="flex flex-wrap gap-4 justify-center">
      <li
        v-for="skill in sortedSkills"
        :key="skill.name"
        class="flex items-center gap-3 py-2 px-4 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition cursor-pointer shadow-sm"
      >
        <Icon
          :icon="skill.icon"
          class="w-6 h-6 text-primary dark:text-yellow-400"
        />
        <span class="text-lg text-dark dark:text-white">{{ skill.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "Javascript", icon: "logos:javascript" },
  { name: "Typescript", icon: "logos:typescript-icon" },
  { name: "React.js", icon: "logos:react" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Material UI", icon: "logos:material-ui" },
  { name: "Quasar UI", icon: "vscode-icons:file-type-quasar" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "SCSS", icon: "vscode-icons:file-type-scss" },
  { name: "LESS", icon: "vscode-icons:file-type-less" },
  { name: "jQuery", icon: "simple-icons:jquery" },
  { name: "GSAP", icon: "simple-icons:greensock" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Vuex", icon: "material-icon-theme:vuex-store" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "simple-icons:express" },
  { name: "REST API", icon: "carbon:api" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Webpack", icon: "logos:webpack" },
  { name: "Jest", icon: "vscode-icons:file-type-jest" },
  { name: "DevExtreme", icon: "simple-icons:devexpress" },
  { name: "Prime Vue", icon: "simple-icons:primevue" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  { name: "WordPress", icon: "logos:wordpress-icon" },
  { name: "Ionic", icon: "logos:ionic-icon" },
  { name: "Agile with Azure DevOps", icon: "devicon:azuredevops" },
  { name: "Agile with Jira", icon: "devicon:jiraalign" },
];

const sortedSkills = computed(() => {
  // Custom order: Frontend, State, Backend, Dev, Design, CMS, Agile
  const order = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "React.js",
    "Vue.js",
    "Bootstrap",
    "Material UI",
    "Quasar UI",
    "DevExtreme",
    "Prime Vue",
    "Tailwind CSS",
    "SCSS",
    "LESS",
    "jQuery",
    "GSAP",
    "Pinia",
    "Vuex",
    "Redux",
    "Node.js",
    "Express",
    "REST API",
    "Git",
    "Docker",
    "Webpack",
    "Jest",
    "Figma",
    "Adobe Photoshop",
    "Agile with Azure DevOps",
    "Agile with Jira",
    "WordPress",
    "Ionic",
  ];
  return [...skills].sort(
    (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
  );
});
</script>
