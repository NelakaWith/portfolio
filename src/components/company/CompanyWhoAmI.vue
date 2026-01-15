<template>
  <section class="py-10 px-4 mt-16 bg-gray-50 dark:bg-gray-800">
    <div class="mx-auto container">
      <!-- How I Work -->
      <div class="mb-16">
        <h2
          class="text-4xl font-semibold text-slate-600 dark:text-white text-center mb-8"
        >
          Work flow
        </h2>
        <div class="workflow-flow">
          <div
            v-for="(step, index) in workflowSteps"
            :key="step.title"
            class="flow-item"
          >
            <div class="step-index">0{{ index + 1 }}</div>
            <div class="step-card">
              <h3 class="text-xl font-semibold text-slate-800 dark:text-white">
                {{ step.title }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                {{ step.description }}
              </p>
            </div>
            <div
              v-if="index !== workflowSteps.length - 1"
              class="flow-connector"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <p
          class="mt-8 mx-auto max-w-xl text-gray-600 dark:text-gray-400 italic text-xl font-light text-center"
        >
          "I write code that is documented and organized, so if you ever hire an
          in-house team, they can take over the project with ease. No 'black
          box' development. No over engineering. No unnecessary tools. Just
          steady progress."
        </p>
      </div>

      <hr class="border-gray-300 dark:border-gray-600 my-12" />

      <!-- Experience -->
      <div class="mb-16">
        <h2
          class="text-3xl font-semibold text-slate-600 dark:text-white text-center mb-8"
        >
          Who am I...
        </h2>
        <p
          class="text-xl font-light text-gray-700 dark:text-gray-300 leading-relaxed text-center"
        >
          I’ve worked on production web applications, including internal
          dashboards, workflow tools, and customer-facing systems used by real
          users. My focus has been on stability, maintainability, and ensuring
          the codebase remains understandable and reliable as requirements
          change.
        </p>
      </div>

      <hr class="border-gray-300 dark:border-gray-600 my-12" />

      <!-- Tech Stack -->
      <div class="mb-16">
        <h2
          class="text-3xl font-semibold text-slate-600 dark:text-white text-center mb-8"
        >
          Tech Stack
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 text-center">
          Vue 3 · TypeScript · Node/NestJS · PostgreSQL · REST APIs
        </p>
      </div>

      <hr class="border-gray-300 dark:border-gray-600 my-12" />

      <!-- Let's Work Together -->
      <div id="contact" class="text-center scroll-mt-24">
        <h2
          class="text-3xl font-semibold text-slate-600 dark:text-white text-center mb-8"
        >
          Let's Work Together
        </h2>
        <p
          class="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Whether you're starting from an idea or improving an existing product,
          I can help you move forward with confidence.
        </p>
        <!-- form here -->
        <CompanyContact />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CompanyContact from "./CompanyContact.vue";

const workflowSteps = [
  {
    title: "Clarify the scope",
    description:
      "Start by aligning on goals, constraints, and success metrics so everyone knows what we are building.",
  },
  {
    title: "Decide with context",
    description:
      "Make technical choices that serve the business today while keeping future growth in mind.",
  },
  {
    title: "Build with care",
    description:
      "Ship clean, maintainable implementations that are easy to extend and hand over.",
  },
  {
    title: "Stay transparent",
    description:
      "Communicate progress, risks, and trade-offs openly so there are no surprises.",
  },
];
</script>

<style scoped>
.workflow-flow {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.flow-item {
  position: relative;
  padding-left: 3.5rem;
}

.step-index {
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 10;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #b65942 0%, #b88258 100%);
  box-shadow: 0 10px 25px rgba(207, 41, 26, 0.25);
}

.step-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
}

.dark .step-card {
  background: rgba(15, 23, 42, 0.65);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

.flow-connector {
  position: absolute;
  left: 1.25rem;
  top: 3rem;
  width: 2px;
  height: 100%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #cf886c 0%, #cf291a 100%);
  opacity: 0.4;
  z-index: 0;
}

@media (min-width: 900px) {
  .workflow-flow {
    flex-direction: row;
    gap: 3rem;
  }

  .flow-item {
    flex: 1;
    padding-left: 0;
    padding-top: 3.75rem;
    display: flex;
    flex-direction: column;
  }

  .step-index {
    left: 50%;
    transform: translateX(-50%);
  }

  .step-card {
    text-align: center;
    flex: 1;
    width: 100%;
  }

  .flow-connector {
    left: 50%;
    top: 1.75rem;
    width: calc(100% + 3rem);
    height: 2px;
    transform: none;
    background: linear-gradient(90deg, #cf886c 0%, #cf291a 100%);
  }
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.75rem;
  background: #cf886c;
  background: -webkit-linear-gradient(
    to bottom right,
    #cf886c 0%,
    #cf291a 100%
  );
  background: -moz-linear-gradient(to bottom right, #cf886c 0%, #cf291a 100%);
  background: linear-gradient(to bottom right, #cf886c 0%, #cf291a 100%);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
