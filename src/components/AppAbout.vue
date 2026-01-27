<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20"
    >
      <!-- Text Content -->
      <div class="order-2 lg:order-1 text-center lg:text-left">
        <h2
          class="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 tracking-wide"
        >
          Nelaka Withanage
        </h2>
        <h1
          class="text-5xl lg:text-7xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
        >
          Building
          <span
            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >Digital Excellence</span
          >
        </h1>
        <p
          class="text-lg text-slate-600 dark:text-gray-100 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0"
        >
          Senior software developer with 9+ years of experience crafting
          high-performance web applications. Specializing in React.js, Vue.js,
          and modern UI engineering.
        </p>

        <!-- Social Links (Glass) -->
        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            v-for="link in socialLinks"
            :key="link.icon"
            :href="link.href"
            target="_blank"
            class="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
          >
            <Icon
              :icon="link.icon"
              class="w-5 h-5 text-slate-500 dark:text-gray-300 group-hover:text-primary transition-colors"
            />
            <span
              class="text-sm font-medium text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white"
              >{{ link.text }}</span
            >
          </a>
        </div>
      </div>

      <!-- Hero Image / Visual -->
      <div
        class="order-1 lg:order-2 flex justify-center relative mt-12 lg:mt-0"
      >
        <!-- Aura Animation -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] -z-10 opacity-70 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <BackgroundSwirl />
        </div>

        <div class="relative w-72 h-72 md:w-96 md:h-96">
          <!-- Decorative Rings -->
          <div
            class="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"
          ></div>
          <div
            class="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"
          ></div>

          <!-- Image -->
          <img
            src="/bust.webp"
            alt="Nelaka Withanage"
            class="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-dark/50 shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackgroundSwirl from "./BackgroundSwirl.vue";

const socialLinks = [
  {
    icon: "ph:envelope-simple-bold",
    text: "Email",
    href: "mailto:nelakasnj@gmail.com",
  },
  {
    icon: "ph:linkedin-logo-bold",
    text: "LinkedIn",
    href: "https://linkedin.com/in/nelaka-withanage",
  },
  {
    icon: "ph:github-logo-bold",
    text: "GitHub",
    href: "https://github.com/NelakaWith",
  },
  { icon: "ph:phone-bold", text: "+94 714 694 244", href: "tel:+94714694244" },
];
</script>
