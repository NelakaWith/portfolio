<template>
  <section class="relative overflow-hidden">
    <DigitalDust />
    <div
      class="relative z-10 min-h-[100vh] md:min-h-[105vh] lg:min-h-[102vh] max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row mt-20 lg:mt-0"
    >
      <div class="flex-1 flex flex-col lg:justify-center gap-8 text-center">
        <div class="flex flex-col">
          <h1
            class="text-3xl md:text-4xl lg:text-8xl font-bold text-slate-800 dark:text-white mb-8"
          >
            <span class="hero-primary-gradient">High-Velocity</span>
            Engineering.<br />
            Absolute <span class="hero-primary-gradient">Reliability</span>.
          </h1>
          <!-- <h3
            class="mb-4 text-lg lg:text-xl font-semibold text-slate-800 dark:text-white"
          >
            Senior Software Delivery Partner for High-Stakes Businesses and
            Agencies.
          </h3> -->
          <p
            class="text-md lg:text-xl font-light text-gray-700 dark:text-gray-200 leading-relaxed mb-8"
          >
            I help businesses launch custom applications in weeks, not months,
            by leveraging a
            <span class="font-semibold">proprietary headless engine</span> and
            <span class="font-semibold">AI-augmented delivery workflows</span>.
            Whether you need an architectural "Document-First" build or a
            senior-level extension for your agency, I provide high-integrity
            code at 2x market speed.
          </p>
          <p
            class="font-semibold ont-light text-gray-700 dark:text-gray-200 leading-relaxed"
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
      <!-- <div class="flex-1 flex justify-center items-center">
        <img
          class="w-auto md:w-1/2 lg:w-2/3"
          src="/company/person.png"
          alt=""
          srcset=""
        />
      </div> -->
    </div>
    <WaveBorder />
  </section>
</template>

<script setup lang="ts">
import WaveBorder from "./WaveBorder.vue";
import DigitalDust from "./DigitalDust.vue";

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
