<template>
  <section class="relative">
    <div
      class="min-h-[90vh] container mx-auto px-4 py-8 flex flex-col md:flex-row"
    >
      <div
        class="flex-1 flex flex-col justify-center gap-8 pr-8 text-center md:text-start"
      >
        <div class="flex flex-col">
          <h1
            class="text-5xl md:text-6xl font-semibold text-slate-800 dark:text-white"
          >
            <span class="hero-primary-gradient">Reliable</span> web
            applications, built with care
          </h1>
          <p
            class="text-xl font-light text-gray-700 dark:text-gray-200 leading-relaxed mt-4"
          >
            I help businesses, founders, and dev teams build, improve, and
            maintain web products that are practical, scalable, and ready for
            real-world use. Clear communication, solid engineering, and
            long-term thinking without unnecessary complexity.
          </p>
        </div>
        <div>
          <button class="hero-button bg-slate-800 dark:bg-slate-700">
            <span class="hero-primary-gradient">Get in Touch</span>
          </button>
        </div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img
          class="w-auto md:w-1/2"
          src="/company/person.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <WaveBorder />
  </section>
</template>

<script setup lang="ts">
import WaveBorder from "./WaveBorder.vue";
</script>
