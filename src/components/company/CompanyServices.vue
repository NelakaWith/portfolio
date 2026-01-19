<template>
  <section class="py-16 px-4 mt-16">
    <div class="container mx-auto">
      <div class="space-y-4">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="service-container"
        >
          <div
            class="service-wrapper"
            :class="{ 'service-reverse': index % 2 !== 0 }"
          >
            <div class="service-content">
              <div class="mb-4">
                <h2
                  class="text-5xl font-semibold text-slate-600 dark:text-white"
                >
                  {{ service.title }}
                </h2>
              </div>
              <p
                class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                {{ service.subtitle }}
              </p>
              <p
                class="text-gray-600 dark:text-gray-400 mb-4"
                v-html="service.description"
              ></p>

              <div class="service-features-bottom">
                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4
                    class="font-semibold text-slate-800 dark:text-white mb-4 text-lg"
                  >
                    What you get
                  </h4>
                  <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                    <li
                      v-for="(item, idx) in service.features"
                      :key="idx"
                      class="flex items-start gap-2"
                    >
                      <span class="text-primary dark:text-yellow-400 mt-1"
                        >•</span
                      >
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="service-spacer">
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    id: 1,
    title: 'High-Velocity "Document-First" Launch',
    subtitle:
      "Custom Headless CMS architectures that outperform off-the-shelf solutions.",
    description:
      "Ideal for SaaS, Knowledge Bases, and Content-Heavy Apps. Using my internal <strong>Headless Core</strong>, I scaffold Auth, DB, and API structures instantly.",
    features: ["A polished MVP delivered at 2x market speed."],
    image: "/company/service-improve.svg",
  },
  {
    id: 2,
    title: "AI-Augmented Agency Support",
    subtitle: "Seamless integration into your Slack, Jira, and Git workflows.",
    description:
      "Scale your agency's output without the overhead of new hires. I use AI-augmented engineering to accelerate frontend builds and unit testing, ensuring pixel-perfect delivery under your brand.",
    features: [
      "Zero-friction technical capacity that mirrors your internal standards.",
    ],
    image: "/company/service-custom.svg",
  },
  {
    id: 3,
    title: "AI Integration & Modernization",
    subtitle: 'Turning "static" data into interactive AI-driven insights.',
    description:
      'I don\'t just "use" AI; I build it into your product. I specialise in refactoring legacy systems into modern architectures and integrating LLM features (RAG, automated reporting) into existing workflows.',
    features: ["A modernised, future-proofed application."],
    image: "/company/service-support.svg",
  },
];
</script>

<style scoped>
.service-container {
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
}

.service-container:hover {
  transform: translateY(-4px);
}

.service-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 2rem;
}

.service-reverse {
  direction: rtl;
}

.service-reverse > * {
  direction: ltr;
}

.service-content {
  padding-right: 1rem;
}

.service-spacer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-features-bottom {
  width: 100%;
}

@media (max-width: 1024px) {
  .service-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-reverse {
    direction: ltr;
  }

  .service-container {
    padding: 1.5rem;
  }
}
</style>
