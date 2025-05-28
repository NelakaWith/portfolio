<template>
  <section id="skills" class="py-12 bg-white rounded-lg shadow-sm p-6">
    <h2 class="text-3xl font-bold text-dark mb-8">Key Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <h3 class="font-medium text-dark">{{ skill }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Figma",
  "Progressive web apps",
  "Bootstrap",
  "JQuery",
  "Material UI",
  "Quasar UI",
  "DevExtreme",
  "Tailwind CSS",
  "React.js",
  "Vue.js (Vue 3)",
  "Node.js (Express)",
  "Pini",
  "Redux",
  "Typescript",
  "SCSS",
  "LESS",
  "REST API",
  "Git",
  "Adobe Photoshop",
  "GSAP",
  "Wordpress",
  "Docker",
  "Agile Software Development",
  "Webpack",
  "Jest",
  "Ionic Capacitor",
];
</script>
