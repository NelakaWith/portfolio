<template>
  <div
    class="pt-24 min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-6 relative z-20 text-center">
      <h1
        class="text-5xl lg:text-7xl font-heading font-bold text-slate-700 dark:text-white leading-tight mb-6"
      >
        Software at the <br />
        <span
          class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >Speed of Thought.</span
        >
      </h1>
      <p
        class="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium"
      >
        I help teams eliminate architectural noise and restore momentum through
        High-Velocity primitives. Senior Software Engineer & Systems Architect.
      </p>

      <div
        class="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 mb-12"
      >
        <NuxtLink
          to="/contact"
          class="hero-button bg-slate-800 dark:bg-slate-700 group flex items-center justify-center gap-2"
        >
          <span class="hero-primary-gradient">Get in Touch</span>
          <Icon
            icon="ph:arrow-right-bold"
            class="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary"
          />
        </NuxtLink>
        <div class="flex justify-center items-center flex-wrap gap-4">
          <a
            href="https://github.com/NelakaWith"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 md:p-3.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center"
            aria-label="GitHub Profile"
          >
            <Icon icon="mdi:github" class="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/nelakawith"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 md:p-3.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
            aria-label="LinkedIn Profile"
          >
            <Icon icon="mdi:linkedin" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 text-left mt-16">
        <div
          class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none"
        >
          <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4">
            The Delivery Tax
          </h2>
          <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
            In modern software development, we’ve traded agility for complexity.
            Between boilerplate setup, fragmented state management, and
            hard-coded business logic, most teams are paying a 'Delivery Tax'
            losing nearly half their momentum before they even ship a feature. I
            build the primitives that reclaim that time.
          </p>
        </div>
        <div
          class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none"
        >
          <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4">
            The Specialist
          </h2>
          <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
            <strong>I’m Nelaka.</strong> My journey started in traditional
            engineering, but it evolved through the crucible of independent
            product development. After seeing how 'standard' architectures stall
            under their own weight, I moved toward a philosophy of abstraction.
            I don't just write code; I build engines that allow businesses to
            pivot as fast as they think.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Nelaka Withanage - Software at the Speed of Thought";
const description =
  "I help teams eliminate architectural noise and restore momentum through High-Velocity primitives. Senior Fullstack Engineer & Systems Architect.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "https://nelaka.xyz/og_banner_02.png",
  twitterCard: "summary_large_image",
});
</script>
