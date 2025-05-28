<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <!-- <Contact /> -->
    </main>
  </div>
</template>

<script setup>
import Header from "./components/AppHeader.vue";
import About from "./components/AppAbout.vue";
import Skills from "./components/AppSkills.vue";
import Experience from "./components/AppExperience.vue";
import Education from "./components/AppEducation.vue";
import Projects from "./components/AppProjects.vue";
// import Contact from "./components/AppContact.vue";
</script>

<style lang="scss"></style>
