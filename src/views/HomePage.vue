<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <main class="container mx-auto px-4 py-8">
      <About />
      <Skills />
      <Showcase />
      <Experience />
      <Projects />
      <Education />
    </main>
  </div>
</template>

<script setup>
import About from "../components/AppAbout.vue";
import Skills from "../components/AppSkills.vue";
import Experience from "../components/AppExperience.vue";
import Education from "../components/AppEducation.vue";
import Projects from "../components/AppProjects.vue";
import Showcase from "../components/AppShowcase.vue";
</script>
