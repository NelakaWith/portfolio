<template>
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
      <div>
        <h1 class="text-3xl md:text-5xl font-semibold text-dark">
          Nelaka Withanage
        </h1>
        <h2 class="text-xl text-primary">Frontend Engineer</h2>
      </div>
      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6">
        <a
          href="#about"
          class="text-dark hover:text-primary transition"
          @click.prevent="$emit('menu-click', 'about')"
          >About</a
        >
        <a
          href="#skills"
          class="text-dark hover:text-primary transition"
          @click.prevent="$emit('menu-click', 'skills')"
          >Skills</a
        >
        <a
          href="#experience"
          class="text-dark hover:text-primary transition"
          @click.prevent="$emit('menu-click', 'experience')"
          >Experience</a
        >
        <a
          href="#projects"
          class="text-dark hover:text-primary transition"
          @click.prevent="$emit('menu-click', 'projects')"
          >Projects</a
        >
        <!-- <a
          href="#contact"
          class="text-dark hover:text-primary transition"
          @click.prevent="$emit('menu-click', 'contact')"
          >Contact</a
        > -->
      </nav>
      <!-- Mobile Nav Toggle -->
      <button
        class="md:hidden flex items-center px-3 py-2 text-dark border-gray-400 focus:outline-none"
        @click="showMobileMenu = !showMobileMenu"
        aria-label="Toggle menu"
      >
        <Icon icon="fxemoji:hamburger" class="h-8 w-8" />
      </button>
    </div>
    <!-- Mobile Nav Menu -->
    <transition name="fade">
      <nav
        v-if="showMobileMenu"
        class="md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold"
        @click.self="showMobileMenu = false"
      >
        <a
          href="#about"
          @click.prevent="
            $emit('menu-click', 'about');
            showMobileMenu = false;
          "
          >About</a
        >
        <a
          href="#skills"
          @click.prevent="
            $emit('menu-click', 'skills');
            showMobileMenu = false;
          "
          >Skills</a
        >
        <a
          href="#experience"
          @click.prevent="
            $emit('menu-click', 'experience');
            showMobileMenu = false;
          "
          >Experience</a
        >
        <a
          href="#projects"
          @click.prevent="
            $emit('menu-click', 'projects');
            showMobileMenu = false;
          "
          >Projects</a
        >
        <!-- <a href="#contact" @click.prevent="$emit('menu-click', 'contact'); showMobileMenu = false">Contact</a> -->
        <button
          class="mt-8 text-base text-gray-500"
          @click="showMobileMenu = false"
        >
          Close
        </button>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const showMobileMenu = ref(false);
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
