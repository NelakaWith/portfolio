<template>
  <div>
    <About />
    <Skills />
    <Showcase />
    <Experience />
    <Projects />
    <Education />
  </div>
</template>

<script setup>
import About from "../components/sections/AppAbout.vue";
import Skills from "../components/sections/AppSkills.vue";
import Experience from "../components/sections/AppExperience.vue";
import Education from "../components/sections/AppEducation.vue";
import Projects from "../components/sections/AppProjects.vue";
import Showcase from "../components/sections/AppShowcase.vue";

const title = "Nelaka Withanage - Software Engineer & Full-Stack Developer";
const description =
  "Welcome to the portfolio of Nelaka Withanage. I specialize in building modern, scalable web applications using Vue, Nuxt, Node.js, and Cloud technologies.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: 'https://nelaka.xyz/og_banner_02.png',
  twitterCard: 'summary_large_image',
  keywords: 'Software Engineer, Full-Stack Developer, Vue.js, Nuxt 3, Node.js, Web Development, Cloud Architecture, Sri Lanka, Nelaka Withanage',
});
</script>
