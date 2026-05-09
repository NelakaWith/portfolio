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
          Case studies and deep dives into High-Velocity architectures and
          complex problem solving.
        </p>
      </section>

      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="(study, index) in caseStudies"
          :key="study.id"
          class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div
            class="inline-block px-3 py-1 mb-6 rounded-full text-sm font-semibold tracking-wide"
            :class="study.badgeClass"
          >
            Case Study {{ index + 1 }}
          </div>
          <h2 class="text-3xl font-bold text-slate-700 dark:text-white mb-6">
            {{ study.title }}
          </h2>

          <div class="prose prose-slate dark:prose-invert max-w-none">
            <p
              class="text-lg text-slate-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              "{{ study.description }}"
            </p>

            <div class="grid md:grid-cols-1 gap-8 mt-8">
              <div>
                <h3
                  class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3"
                >
                  <Icon
                    :icon="study.solutionIcon"
                    :class="study.solutionIconClass"
                  />
                  {{ study.solutionTitle }}
                </h3>
                <p class="text-slate-600 dark:text-gray-400">
                  {{ study.solutionDescription }}
                </p>
              </div>

              <div>
                <h3
                  class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3"
                >
                  <Icon
                    :icon="study.impactIcon"
                    :class="study.impactIconClass"
                  />
                  {{ study.impactTitle }}
                </h3>
                <p class="text-slate-600 dark:text-gray-400">
                  {{ study.impactDescription }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Passion Projects -->
    <section class="mt-20">
      <Showcase />
    </section>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Commercial Projects -->
      <section class="mt-20">
        <Projects />
      </section>
    </div>
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

const caseStudies = [
  {
    id: "craw-lore-core",
    badgeClass: "bg-secondary/10 text-secondary",
    title: "Craw-Lore Core",
    description:
      'Raw, unstructured web data is too chaotic for Large Language Models (LLMs) to process efficiently. Most scrapers simply dump raw HTML into a database, resulting in high "token-heavy" costs and poor analysis accuracy due to the non-essential noise like ads and scripts.',
    solutionIcon: "fluent:people-queue-28-regular",
    solutionIconClass: "text-amber-600",
    solutionTitle: "Intelligent orchestration",
    solutionDescription:
      'Craw-Lore provides a production-ready orchestration engine that extracts, cleans, and structures raw web data into high-signal JSON before it ever hits an LLM. By handling the "messy middle" of data ingestion and queue management, it ensures architectural predictability while drastically reducing token costs and analysis errors.',
    impactIcon: "mdi:clock-fast",
    impactIconClass: "text-secondary",
    impactTitle: "Reduced Time to Insight",
    impactDescription:
      "Allows teams to bypass weeks of ingestion plumbing and focus immediately on the higher-value LLM analysis and visualization. By enforcing architectural predictability, it slashes token consumption and operational costs, transforming a fragile scraping script into a scalable, enterprise-ready data asset.",
  },
  {
    id: "saadhaka-ils",
    badgeClass: "bg-secondary/10 text-secondary",
    title: "Saadhaka ILS",
    description:
      "We need to bridge the gap between static textbook knowledge and dynamic synthesis simulations. It maps the locale chemistry (in MVP, organics) syllabus into a navigable Knowledge Graph.",
    solutionIcon: "ix:ai",
    solutionIconClass: "text-primary",
    solutionTitle: "Hybrid AI Engine",
    solutionDescription:
      "Built a dual-layer system combining a hard-coded Knowledge Graph for syllabus accuracy with an AI/RAG layer for real-time reactivity predictions and molecular insights.",
    impactIcon: "ph:brain-duotone",
    impactIconClass: "text-pink-600",
    impactTitle: "Interactive Discovery",
    impactDescription:
      "Enabled automated generation of complex conversion challenges and a 'Lab Playground' where students discover synthesis routes through guided experimentation.",
  },
];
</script>
