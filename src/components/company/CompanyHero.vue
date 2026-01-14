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

<style scoped>
.hero-primary-gradient {
  background: linear-gradient(
    90deg,
    #ff7e5f 0%,
    #feb47b 25%,
    #86a8e7 50%,
    #91eae4 75%,
    #7f7fd5 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
}

.hero-button {
  padding: 0.75rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.hero-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
