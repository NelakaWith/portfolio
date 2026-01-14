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
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ service.description }}
              </p>
              <p
                v-if="service.note"
                class="text-sm italic text-gray-500 dark:text-gray-500 mt-3"
              >
                {{ service.note }}
              </p>
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
    title: "MVP Development for Startups",
    subtitle: "From idea to launch fast, focused, and production-ready.",
    description:
      "I help founders turn ideas into usable products, prioritising what matters most for validation and early growth.",
    features: [
      "Feature prioritization and technical guidance",
      "Clean, scalable front-end architecture",
      "API integration and core business logic",
      "A solid MVP you can confidently iterate on",
    ],
    image: "/company/service-mvp.svg",
  },
  {
    id: 2,
    title: "Custom Web Applications",
    subtitle: "Web applications tailored to real business workflows.",
    description:
      "Ideal for internal tools, dashboards, and customer-facing platforms that need to be reliable, secure, and easy to maintain.",
    features: [
      "Custom admin panels and dashboards",
      "Role-based access and secure flows",
      "Scalable, maintainable architecture",
      "Clear structure and clean, readable code",
    ],
    image: "/company/service-custom.svg",
  },
  {
    id: 3,
    title: "UI Implementation & Product Consistency",
    subtitle:
      "Clean, consistent user interfaces built as part of reliable web applications.",
    description:
      "I focus on usability and structure, ensuring interfaces remain consistent and easy to maintain as the product evolves.",
    features: [
      "Component-based UI implementation",
      "Consistent layouts, spacing, and interaction patterns",
      "Responsive behavior across devices",
      "UI decisions aligned with product and technical needs",
    ],
    note: "Design files are welcome but not required.",
    image: "/company/service-ui.svg",
  },
  {
    id: 4,
    title: "Product Improvement & Stabilization",
    subtitle:
      "Make your existing application faster, cleaner, and easier to work with.",
    description:
      "I help teams improve products that already exist without risky rewrites or breaking core functionality.",
    features: [
      "Refactoring with minimal disruption",
      "Performance and usability improvements",
      "Bug fixing and technical debt reduction",
      "A safer foundation for future features",
    ],
    image: "/company/service-improve.svg",
  },
  {
    id: 5,
    title: "Ongoing Development & Support",
    subtitle: "A reliable technical partner, not just a one-off developer.",
    description:
      "For teams that need consistent development support without hiring full-time.",
    features: [
      "Monthly development or support plans",
      "Feature updates and incremental improvements",
      "Faster turnaround and continuity",
      "Clear communication and predictable workflow",
    ],
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
  align-items: start;
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
