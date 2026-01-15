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
            class="text-5xl md:text-6xl font-semibold text-slate-800 dark:text-white"
          >
            Building <span class="hero-primary-gradient">reliable</span> web
            applications for businesses that plan to grow.
          </h1>
          <p
            class="text-xl font-light text-gray-700 dark:text-gray-200 leading-relaxed mt-4"
          >
            I help founders and small teams build, improve, and maintain web
            products and fast, easy-to-manage websites. Using
            <span class="font-semibold">lightweight CMS solutions</span> and
            <span class="font-semibold">AI-assisted workflows</span>. I deliver
            practical, scalable software ready for real-world use. 9+ years of
            experience turning complex ideas into clean, functional products.
            Clear communication. Solid engineering. Business-first thinking.
          </p>
        </div>
        <div>
          <button
            class="hero-button bg-slate-800 dark:bg-slate-700"
            @click="scrollToContact"
          >
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

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
