<template>
  <section class="relative">
    <div
      class="min-h-[90vh] container mx-auto px-4 py-8 flex flex-col md:flex-row"
    >
      <div
        class="flex-1 flex flex-col justify-start gap-8 pr-8 text-center md:text-start"
      >
        <div class="flex flex-col">
          <h1
            class="text-5xl md:text-6xl font-semibold text-slate-800 dark:text-white mb-4"
          >
            <span class="hero-primary-gradient">High-Velocity</span>
            Engineering. Absolute
            <span class="hero-primary-gradient">Reliability</span>.
          </h1>
          <h3 class="mb-4 text-xl font-semibold text-slate-800 dark:text-white">
            Senior Software Delivery Partner for High-Stakes Businesses and
            Agencies.
          </h3>
          <p
            class="max-w-[36rem] text-xl font-light text-gray-700 dark:text-gray-200 leading-relaxed mb-4"
          >
            I help businesses launch custom applications in weeks using a
            <span class="hero-primary-gradient"
              >proprietary headless engine</span
            >, and I provide agencies with an invisible,
            <span class="hero-primary-gradient">AI-augmented development</span>
            to scale their delivery capacity.
          </p>
          <p
            class="text-xl font-light text-gray-700 dark:text-gray-200 leading-relaxed mb-4"
          >
            9+ Years Experience | High-Velocity Headless Core | AI-Augmented
            Workflows
          </p>
        </div>
        <div>
          <button
            class="hero-button bg-slate-800 dark:bg-slate-700"
            @click="scrollToContact"
          >
            <span class="hero-primary-gradient">Book a Brief Intro Call</span>
          </button>
        </div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img
          class="w-auto lg:w-1/2"
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

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
