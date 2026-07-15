<template>
  <div class="grid md:grid-cols-1 gap-8 mb-20 px-6">
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
            v-if="project.logo"
            :src="project.logo"
            :alt="project.title"
            class="w-16 h-auto"
          />
          <h3 class="text-3xl font-bold text-slate-700 dark:text-white">
            {{ project.title }}
          </h3>
        </div>

        <div class="prose prose-slate dark:prose-invert max-w-none">
          <p
            class="text-lg text-slate-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            "{{ project.description }}"
          </p>

          <div class="grid md:grid-cols-1 gap-8 mt-8">
            <div>
              <h4
                class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3"
              >
                <Icon
                  :icon="project.solutionIcon"
                  :class="project.solutionIconClass"
                />
                {{ project.solutionTitle }}
              </h4>
              <p class="text-slate-600 dark:text-gray-400">
                {{ project.solutionDescription }}
              </p>
            </div>

            <div>
              <h4
                class="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-white mb-3"
              >
                <Icon
                  :icon="project.impactIcon"
                  :class="project.impactIconClass"
                />
                {{ project.impactTitle }}
              </h4>
              <p class="text-slate-600 dark:text-gray-400">
                {{ project.impactDescription }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<script setup>
const ownProjects = [
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
      "Built on a strict, rule-based state machine that treats chemical compounds as functional nodes and syllabus-approved reagents as directed edges. By hardcoding exact exam-valid conditions (rather than relying on unpredictable AI generations for reactions), it completely eliminates 'hallucinated' chemical paths and ensures 100% alignment with the official local Resource Book marking schemes.",
    impactIcon: "tabler:sandbox",
    impactIconClass: "text-pink-800/60",
    impactTitle: "The Sandbox Lab & Solver",
    impactDescription:
      "Features an interactive visual workspace where students can drag, drop, and chain reagents to discover organic synthesis pathways through guided experimentation. It includes a built-in 'Solver Mode' that uses graph traversal to calculate and display the most efficient, exam-safe conversion routes between any two compounds.",
  },
];
</script>
