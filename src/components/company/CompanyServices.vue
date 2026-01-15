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
                class="text-sm italic text-gray-500 dark:text-gray-500 my-3"
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
    title: "From Idea to Launch",
    subtitle: "From idea to launch fast, focused, and production-ready.",
    description:
      'Turn your vision into a production-ready product without the bloat.I help you identify the "must-have" features to get you to market quickly, ensuring your first version is a solid foundation—not a prototype you’ll have to throw away later.',
    features: [
      "Feature roadmap, a polished user interface, and a fully functional app ready for your first customers",
    ],
    image: "/company/service-mvp.svg",
  },
  {
    id: 2,
    title: " Custom Business Tools & Dashboards",
    subtitle: "Web applications tailored to real business workflows.",
    description:
      "Software tailored to how you actually work.Ideal for internal tools, customer portals, and management dashboards that need to be secure, fast, and easy for your team to use.",
    features: [
      "Secure user logins, automated workflows, and a clean interface that makes complex data easy to understand",
    ],
    image: "/company/service-custom.svg",
  },
  {
    id: 3,
    title: "Product Rescue & Modernization",
    subtitle:
      "Make your existing application faster, cleaner, and easier to work with.",
    description:
      "Make your existing application faster and easier to manage.If your current app feels 'heavy', buggy, or slow to update, I help clean up the engine. I fix technical issues and improve performance without breaking what already works.",
    features: [
      "Faster load times, fewer bugs, and a codebase that is much cheaper and easier to update in the future.",
    ],
    note: "Design files are welcome but not required.",
    image: "/company/service-ui.svg",
  },
  {
    id: 4,
    title: "Your On-Call Technical Partner",
    subtitle: "A reliable technical partner, not just a one-off developer.",
    description:
      "Consistent development support without the full-time overhead.For teams that need a reliable developer to handle ongoing updates, new features, and monthly maintenance.",
    features: [
      "Predictable monthly progress, fast responses, and a partner who knows your system inside and out.",
    ],
    image: "/company/service-improve.svg",
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
