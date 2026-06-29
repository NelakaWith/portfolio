<template>
  <div class="pt-32 pb-20 min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <section class="mb-16 text-center">
        <h1
          class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
        >
          The <span class="title-highlight">Lab</span>
        </h1>
        <p
          class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
        >
          A streamlined look at commercial client systems and independent
          full-stack architectures built for scale, performance, and immediate
          reliability.
        </p>
      </section>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- <div class="mb-12 text-center">
        <h3
          class="text-3xl md:text-4xl font-heading font-bold text-slate-700 dark:text-white"
        >
          Deep Dives/ Core Architecture
        </h3>
      </div> -->
      <div class="grid md:grid-cols-1 gap-8">
        <template v-for="project in ownProjects" :key="project.id">
          <article
            v-if="project.active"
            class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div
              class="inline-block px-3 py-1 mb-6 rounded-full text-sm font-semibold tracking-wide"
              :class="project.badgeClass"
            >
              In The Oven
            </div>
            <div class="flex gap-2 items-center mb-6">
              <img
                :src="project.logo"
                :alt="project.title"
                class="w-16 h-auto"
              />
              <h2 class="text-3xl font-bold text-slate-700 dark:text-white">
                {{ project.title }}
              </h2>
            </div>

            <div class="prose prose-slate dark:prose-invert max-w-none">
              <p
                class="text-lg text-slate-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                "{{ project.description }}"
              </p>

              <div class="grid md:grid-cols-1 gap-8 mt-8">
                <div>
                  <h3
                    class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3"
                  >
                    <Icon
                      :icon="project.solutionIcon"
                      :class="project.solutionIconClass"
                    />
                    {{ project.solutionTitle }}
                  </h3>
                  <p class="text-slate-600 dark:text-gray-400">
                    {{ project.solutionDescription }}
                  </p>
                </div>

                <div>
                  <h3
                    class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3"
                  >
                    <Icon
                      :icon="project.impactIcon"
                      :class="project.impactIconClass"
                    />
                    {{ project.impactTitle }}
                  </h3>
                  <p class="text-slate-600 dark:text-gray-400">
                    {{ project.impactDescription }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Commercial Projects -->
      <section class="mt-20">
        <Projects />
      </section>
    </div>

    <!-- Passion Projects -->
    <section class="mt-20">
      <Showcase />
    </section>
  </div>
</template>

<script setup>
import Projects from "../components/sections/AppProjects.vue";
import Showcase from "../components/sections/AppShowcase.vue";

const title = "The Lab";
const description = "Case studies and deep dives into complex problem solving.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const ownProjects = [
  {
    id: "dredger-badger",
    active: false,
    logo: "",
    badgeClass: "bg-secondary/10 text-secondary",
    title: "Dredger Badger",
    description:
      'Raw, unstructured web data is too chaotic for Large Language Models (LLMs) to process efficiently. Most scrapers simply dump raw HTML into a database, resulting in high "token-heavy" costs and poor analysis accuracy due to the non-essential noise like ads and scripts.',
    solutionIcon: "fluent:people-queue-28-regular",
    solutionIconClass: "text-amber-600",
    solutionTitle: "Intelligent orchestration",
    solutionDescription:
      'Dredger Badger provides a production-ready orchestration engine that extracts, cleans, and structures raw web data into high-signal JSON before it ever hits an LLM. By handling the "messy middle" of data ingestion and queue management, it ensures architectural predictability while drastically reducing token costs and analysis errors.',
    impactIcon: "mdi:clock-fast",
    impactIconClass: "text-secondary",
    impactTitle: "Reduced Time to Insight",
    impactDescription:
      "Allows teams to bypass weeks of ingestion plumbing and focus immediately on the higher-value LLM analysis and visualization. By enforcing architectural predictability, it slashes token consumption and operational costs, transforming a fragile scraping script into a scalable, enterprise-ready data asset.",
  },
  {
    id: "saadhaka-ils",
    active: true,
    logo: "/products/saadhaka.svg",
    badgeClass: "bg-secondary/10 text-secondary",
    title: "Saadhaka ILS",
    description:
      "Bridging the gap between static chemistry textbooks and dynamic synthesis practice. Saadhaka maps the local G.C.E. Advanced Level Organic Chemistry syllabus into an interactive, graph-based learning ecosystem designed for local exam precision.",
    solutionIcon: "mdi:map-marker-path",
    solutionIconClass: "text-primary",
    solutionTitle: "Deterministic Rule-Based Graph Engine",
    solutionDescription:
      'Built on a strict, rule-based state machine that treats chemical compounds as functional nodes and syllabus-approved reagents as directed edges. By hardcoding exact exam-valid conditions (rather than relying on unpredictable AI generations for reactions), it completely eliminates "hallucinated" chemical paths and ensures 100% alignment with the official local Resource Book marking schemes.',
    impactIcon: "tabler:sandbox",
    impactIconClass: "text-pink-800/60",
    impactTitle: "The Sandbox Lab & Solver",
    impactDescription:
      'Features an interactive visual workspace where students can drag, drop, and chain reagents to discover organic synthesis pathways through guided experimentation. It includes a built-in "Solver Mode" that uses graph traversal to calculate and display the most efficient, exam-safe conversion routes between any two compounds.',
  },
];
</script>
