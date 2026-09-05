<template>
  <div class="max-w-6xl mx-auto px-6 pt-8 pb-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <!-- Left Column: Editorial Statement -->
      <div class="lg:col-span-8 space-y-6">
        <div
          class="inline-flex items-center gap-2.5 px-3 py-1 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-xs font-mono uppercase tracking-widest text-ink-2 dark:text-ink-dark-2"
        >
          <span
            class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse"
          ></span>
          <span>Open for Architecture & Product Engineering</span>
        </div>

        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-heading font-normal text-ink dark:text-white leading-[1.08] tracking-tight"
        >
          Software at the <br />
          <span class="text-primary">Speed of Thought.</span>
        </h1>

        <p class="text-lg sm:text-xl text-ink-2 dark:text-ink-dark-2 font-normal leading-relaxed max-w-2xl">
          I help founders and teams turn ambitious ideas into fast, dependable software. 9+ years building clean web products that launch quickly, work reliably, and scale smoothly as your business grows.
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#the-lab" @click="handleAnchorClick" class="hero-button">
            <span>Explore Engineering Lab</span>
            <Icon icon="ph:arrow-down-bold" class="w-4 h-4 ml-2" />
          </a>

          <a
            href="#contact"
            @click="handleAnchorClick"
            class="inline-flex items-center justify-center px-5 py-3 text-sm font-mono uppercase tracking-wider rounded border border-rule dark:border-rule-dark hover:border-ink dark:hover:border-white text-ink dark:text-white transition-colors"
          >
            Direct Dispatch
          </a>

          <div class="flex items-center gap-2 ml-auto sm:ml-0">
            <a
              href="https://github.com/NelakaWith"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded border border-rule dark:border-rule-dark bg-paper dark:bg-dark-lighter hover:border-ink dark:hover:border-white text-ink-2 dark:text-ink-dark-2 hover:text-ink dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Icon icon="ph:github-logo-bold" class="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nelaka-withanage/"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded border border-rule dark:border-rule-dark bg-paper dark:bg-dark-lighter hover:border-ink dark:hover:border-white text-ink-2 dark:text-ink-dark-2 hover:text-ink dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Icon icon="ph:linkedin-logo-bold" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Workbench Specimen Card -->
      <div
        class="lg:col-span-4 border border-rule dark:border-rule-dark rounded-md bg-paper-2 dark:bg-dark-lighter p-6 space-y-6"
      >
        <div
          class="flex items-center justify-between border-b border-rule dark:border-rule-dark pb-3"
        >
          <span
            class="text-xs font-mono uppercase tracking-widest text-ink dark:text-white font-semibold"
          >
            System Manifest
          </span>
          <span class="text-xs font-mono text-primary font-semibold">
            01 / SPEC
          </span>
        </div>

        <div class="space-y-4 text-xs font-mono">
          <div>
            <span class="text-ink-muted block mb-1 uppercase tracking-wider"
              >Discipline</span
            >
            <p class="text-ink dark:text-white font-sans text-sm">
              Deterministic state machines, graph engines, compiler tooling,
              full-stack web.
            </p>
          </div>

          <div class="border-t border-rule dark:border-rule-dark pt-3">
            <span class="text-ink-muted block mb-1 uppercase tracking-wider"
              >Primary Stack</span
            >
            <p
              class="text-ink dark:text-white font-mono text-xs leading-relaxed"
            >
              TypeScript · Vue/Nuxt · React/Next · Node/Nest · PostgreSQL ·
              Tailwind
            </p>
          </div>

          <div class="border-t border-rule dark:border-rule-dark pt-3">
            <span class="text-ink-muted block mb-1 uppercase tracking-wider"
              >Flagship Focus</span
            >
            <p class="text-ink dark:text-white font-sans text-sm">
              <strong class="text-primary font-medium">Saadhaka ILS:</strong>
              Rule-based graph state engine for organic chemistry synthesis
              paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

function handleAnchorClick(event) {
  const hash = event.currentTarget.getAttribute("href");
  const el = document.querySelector(hash);
  if (el) {
    event.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(el, {
        offset: 0,
        duration: 1.0,
      });
      history.pushState(null, "", hash);
    }
  }
}
</script>
