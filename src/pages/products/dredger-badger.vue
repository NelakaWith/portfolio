<template>
  <div class="pt-32 pb-20 overflow-x-hidden">
    <!-- Hero Section -->
    <section class="px-6 max-w-7xl mx-auto text-center mb-24">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 animate-fade-in"
      >
        <Icon icon="ph:sparkle-fill" class="w-4 h-4" />
        <span>V1.0.0 Now Available</span>
      </div>
      <h1
        class="text-5xl md:text-7xl font-heading font-bold text-slate-700 dark:text-white leading-tight mb-8"
      >
        Dredger Badger: The Ultimate <br />
        <span class="title-highlight">AI-First Scraping</span> Boilerplate.
      </h1>
      <p
        class="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-medium"
      >
        Stop building scrapers from scratch. Deploy a production-ready,
        distributed infrastructure powered by NestJS, BullMQ, and LLMs in
        minutes.
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href="#"
          class="hero-button bg-slate-800 dark:bg-slate-700 group flex items-center justify-center gap-2 px-8 py-4 text-lg"
        >
          <span class="hero-primary-gradient">Get Lifetime Access – $149</span>
          <Icon
            icon="ph:arrow-right-bold"
            class="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary"
          />
        </a>
      </div>
    </section>

    <!-- The Problem/Solution -->
    <section class="bg-slate-100 dark:bg-white/5 py-24 px-6">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div
          class="p-8 rounded-3xl bg-white dark:bg-dark border border-slate-200 dark:border-white/10 shadow-lg"
        >
          <div
            class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500"
          >
            <Icon icon="ph:warning-circle-duotone" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold mb-4 text-slate-700 dark:text-white">
            The Problem
          </h3>
          <p class="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
            Traditional scraping is fragile. It requires manual selector
            maintenance, complex retry logic, and hours of post-processing. Most
            scrapers simply dump raw HTML, resulting in "token-heavy" costs and
            poor analysis accuracy.
          </p>
        </div>
        <div
          class="p-8 rounded-3xl bg-white dark:bg-dark border border-primary/20 shadow-lg relative overflow-hidden"
        >
          <div
            class="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          ></div>
          <div
            class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary"
          >
            <Icon icon="ph:check-circle-duotone" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold mb-4 text-slate-700 dark:text-white">
            The Solution
          </h3>
          <p class="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
            Dredger Badger provides a
            <strong>"Double-Pass LLM Pipeline"</strong> that transforms raw HTML
            into structured JSON based on your specific schema. We handle the
            messy middle so you can focus on the insights.
          </p>
        </div>
      </div>
    </section>

    <!-- The Proof -->
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-heading font-bold mb-4 text-slate-700 dark:text-white"
        >
          The Proof
        </h2>
        <p class="text-slate-500">Visualizing the Double-Pass Extraction</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-stretch">
        <!-- Before -->
        <div class="flex flex-col">
          <span
            class="text-sm font-bold text-slate-400 mb-2 px-4 uppercase tracking-widest"
            >Before (Raw HTML)</span
          >
          <div
            class="flex-grow p-6 rounded-3xl bg-slate-900 text-slate-300 font-mono text-sm border border-slate-800 overflow-hidden shadow-2xl"
          >
            <pre><code>{{ `<div class="ad-wrapper">...</div>
<script src="tracking.js"></script>
<nav>...</nav>
<article>
  <h1>The Real Content</h1>
  <p>Nested inside thousands of lines of noise...</p>
</article>` }}</code></pre>
          </div>
        </div>

        <!-- After -->
        <div class="flex flex-col">
          <span
            class="text-sm font-bold text-primary mb-2 px-4 uppercase tracking-widest"
            >After (Structured JSON)</span
          >
          <div
            class="flex-grow p-6 rounded-3xl bg-slate-900 text-primary border-2 border-primary/30 font-mono text-sm overflow-hidden shadow-2xl relative"
          >
            <div class="absolute top-4 right-4 animate-pulse">
              <Icon icon="ph:magic-wand-duotone" class="w-6 h-6" />
            </div>
            <pre><code>{{ `{
  "title": "The Real Content",
  "content": "Cleaned, high-signal text extracted
              via Groq inference.",
  "metadata": {
    "author": "Nelaka",
    "token_reduction": "85%",
    "vector_status": "Indexed"
  }
}` }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Features -->
    <section class="py-24 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-5xl font-heading font-bold mb-4 text-slate-700 dark:text-white"
          >
            The Factory
          </h2>
          <p class="text-slate-500">
            Enterprise-grade architectural primitives
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="p-8 rounded-3xl bg-white dark:bg-dark border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all"
          >
            <div
              class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary"
            >
              <Icon :icon="feature.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-700 dark:text-white">
              {{ feature.title }}
            </h3>
            <p class="text-slate-600 dark:text-gray-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What's Inside -->
    <section class="py-24 px-6 max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-700 dark:text-white"
          >
            What’s Inside the Box?
          </h2>
          <p class="text-lg text-slate-600 dark:text-gray-400 mb-8">
            Upon purchase, you receive the full source code for the engine,
            ready for deployment.
          </p>
          <ul class="space-y-4">
            <li
              v-for="item in insideBox"
              :key="item"
              class="flex items-start gap-3"
            >
              <Icon
                icon="ph:check-circle-fill"
                class="w-6 h-6 text-primary shrink-0"
              />
              <span class="text-slate-700 dark:text-gray-300 font-medium">{{
                item
              }}</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <div
            class="aspect-square rounded-3xl bg-gradient-to-br from-primary to-secondary p-1"
          >
            <div
              class="w-full h-full bg-dark rounded-[calc(1.5rem-1px)] flex items-center justify-center relative overflow-hidden"
            >
              <Icon
                icon="ph:package-duotone"
                class="w-32 h-32 text-primary/20 absolute -bottom-8 -right-8"
              />
              <div class="text-center p-8">
                <Icon
                  icon="ph:terminal-window-duotone"
                  class="w-16 h-16 text-primary mx-auto mb-4"
                />
                <div class="text-primary font-mono text-sm">npm run dev</div>
                <div class="text-slate-500 mt-4 font-mono text-xs">
                  Waiting for jobs...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-24 px-6 bg-primary/5">
      <div class="max-w-3xl mx-auto text-center">
        <h2
          class="text-3xl md:text-5xl font-heading font-bold mb-12 text-slate-700 dark:text-white"
        >
          One Price. Forever Access.
        </h2>

        <div
          class="p-12 rounded-[2.5rem] bg-white dark:bg-dark border-4 border-primary shadow-2xl relative"
        >
          <div
            class="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest"
          >
            Best Value
          </div>
          <div class="mb-8">
            <span
              class="text-6xl font-heading font-bold text-slate-700 dark:text-white"
              >$149</span
            >
            <span class="text-slate-500">/ one-time</span>
          </div>
          <ul class="text-left space-y-4 mb-12 max-w-md mx-auto">
            <li
              class="flex items-center gap-3 text-slate-600 dark:text-gray-300"
            >
              <Icon icon="ph:check-bold" class="text-primary" />
              <span>Full Source Code Access</span>
            </li>
            <li
              class="flex items-center gap-3 text-slate-600 dark:text-gray-300"
            >
              <Icon icon="ph:check-bold" class="text-primary" />
              <span>Lifetime V1.x Updates</span>
            </li>
            <li
              class="flex items-center gap-3 text-slate-600 dark:text-gray-300"
            >
              <Icon icon="ph:check-bold" class="text-primary" />
              <span>Unlimited Commercial Projects</span>
            </li>
            <li
              class="flex items-center gap-3 text-slate-600 dark:text-gray-300"
            >
              <Icon icon="ph:check-bold" class="text-primary" />
              <span>Private Support Channel</span>
            </li>
          </ul>
          <a
            href="#"
            class="w-full block py-5 rounded-2xl bg-primary hover:bg-primary-dark text-white text-xl font-bold transition-all shadow-lg shadow-primary/30"
          >
            Get Instant Access
          </a>
          <p class="mt-6 text-sm text-slate-400">
            LemonSqueezy Secure Checkout
          </p>
        </div>
      </div>
    </section>

    <!-- Disclaimer -->
    <section class="py-12 px-6 max-w-4xl mx-auto text-center">
      <div
        class="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-sm italic"
      >
        <strong>Technical Disclaimer:</strong> Dredger Badger is a headless
        architectural asset intended for experienced developers. It provides the
        high-performance ingestion engine and API structure, but does not
        include a graphical user interface (GUI).
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    title: "Distributed Architecture",
    description:
      "A scalable BullMQ worker system for handling thousands of jobs in parallel without dropping tasks.",
    icon: "ph:circles-three-plus-duotone",
  },
  {
    title: "AI-Powered Extraction",
    description:
      "Leverages Groq for high-speed inference to transform raw data into user-defined JSON schemas.",
    icon: "ph:brain-duotone",
  },
  {
    title: "Analytical Layer",
    description:
      "Integrated DuckDB for near-instantaneous tracking of scraping metrics and data trends.",
    icon: "ph:chart-line-up-duotone",
  },
  {
    title: "Persistence Layer",
    description:
      "PostgreSQL with pgvector for semantic search and flexible, vector-ready metadata storage.",
    icon: "ph:database-duotone",
  },
  {
    title: "Anti-Detection",
    description:
      "Integrated Playwright engine designed to retrieve clean content from tough, WAF-protected targets.",
    icon: "ph:shield-checkered-duotone",
  },
  {
    title: "Professional Monorepo",
    description:
      "Professionally structured NestJS codebase using Turborepo for maximum developer efficiency.",
    icon: "ph:folders-duotone",
  },
];

const insideBox = [
  "Complete NestJS Monorepo (Turborepo)",
  "Three-Stage Automated Pipeline",
  "Ready-to-use REST API Endpoints",
  "Dockerized Deployment Setup",
  "Deep Technical Documentation",
  "Custom Extraction Prompts",
];

useSeoMeta({
  title: "Dredger Badger - AI-First Scraping Boilerplate",
  description:
    "Deploy a production-ready, distributed scraping infrastructure in minutes.",
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
