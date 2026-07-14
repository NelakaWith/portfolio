<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section
      id="home"
      class="pt-32 pb-24 flex flex-col items-center justify-center relative overflow-hidden min-h-[90vh]"
    >
      <div class="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <h1
          class="text-5xl lg:text-7xl font-heading font-bold text-slate-700 dark:text-white leading-tight my-6"
        >
          Software at the <br />
          <span class="title-highlight">Speed of Thought.</span>
        </h1>
        <p
          class="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium"
        >
          I help teams eliminate architectural noise and restore momentum through
          High-Velocity primitives. Senior Software Engineer & Systems Architect.
        </p>

        <div
          class="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 mb-12"
        >
          <a
            href="#contact"
            @click="handleAnchorClick"
            class="hero-button bg-slate-800 dark:bg-slate-700 group flex items-center justify-center gap-2"
          >
            <span class="hero-primary-gradient">Get in Touch</span>
            <Icon
              icon="ph:arrow-right-bold"
              class="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary"
            />
          </a>
          <div class="flex justify-center items-center flex-wrap gap-4">
            <a
              href="https://github.com/NelakaWith"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 md:p-3.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center"
              aria-label="GitHub Profile"
            >
              <Icon icon="mdi:github" class="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nelakawith"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 md:p-3.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
              aria-label="LinkedIn Profile"
            >
              <Icon icon="mdi:linkedin" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div class="grid md:grid-cols-1 gap-12 text-left mt-16">
          <div
            class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none"
          >
            <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4">
              The Specialist
            </h2>
            <p class="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
              <strong
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >I’m Nelaka.</strong
              >
              My journey started in traditional engineering, but it evolved
              through the crucible of independent product development. After
              seeing how 'standard' architectures stall under their own weight, I
              moved toward a philosophy of abstraction. I don't just write code; I
              build engines that allow businesses to pivot as fast as they think.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Lab Section -->
    <section
      id="the-lab"
      class="py-24 border-t border-slate-200 dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 text-center">
          <h2
            class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
          >
            The <span class="title-highlight">Lab</span>
          </h2>
          <p
            class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            A streamlined look at commercial client systems and independent
            full-stack architectures built for scale, performance, and immediate
            reliability.
          </p>
        </div>

        <div class="grid md:grid-cols-1 gap-8 mb-20">
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

        <!-- Commercial Projects -->
        <div>
          <Projects />
        </div>

        <!-- Passion Projects -->
        <div class="mt-20">
          <Showcase />
        </div>
      </div>
    </section>

    <!-- Proof Section -->
    <section
      id="proof"
      class="py-24 border-t border-slate-200 dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 text-center">
          <h2
            class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
          >
            Professional <span class="title-highlight">Validation</span>
          </h2>
          <p
            class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Senior Software Engineer with 9+ years of commercial and solo experience
            specializing in the Javascript ecosystem. Proven track record of leading
            architectural migrations and optimizing delivery pipelines for speed and
            maintainability.
          </p>
        </div>

        <!-- Experience Component -->
        <div>
          <Experience />
        </div>

        <!-- Technical Arsenal Component -->
        <div class="mt-20">
          <Skills />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-24 border-t border-slate-200 dark:border-white/10"
    >
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
          >
            Ready to <span class="title-highlight">eliminate the noise?</span>
          </h2>
          <p
            class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Whether you're looking for an MVP build, a technical audit, or a
            senior engineer to join your ranks, let's talk about velocity.
          </p>

          <div class="flex flex-wrap gap-4 justify-center items-center mb-16">
            <a
              href="mailto:nelakasnj@gmail.com"
              class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
            >
              <Icon icon="ph:envelope-simple-bold" class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium text-slate-700 dark:text-white"
                >Email Me</span
              >
            </a>
            <a
              href="https://linkedin.com/in/nelaka-withanage"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
            >
              <Icon icon="ph:linkedin-logo-bold" class="w-5 h-5 text-[#0A66C2]" />
              <span class="text-sm font-medium text-slate-700 dark:text-white"
                >LinkedIn</span
              >
            </a>
            <a
              href="https://github.com/NelakaWith"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
            >
              <Icon
                icon="ph:github-logo-bold"
                class="w-5 h-5 text-slate-700 dark:text-gray-300"
              />
              <span class="text-sm font-medium text-slate-700 dark:text-white"
                >GitHub</span
              >
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto">
          <div
            class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <CompanyContact />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLenis } from "#imports";
import Projects from "../components/sections/AppProjects.vue";
import Showcase from "../components/sections/AppShowcase.vue";
import Experience from "../components/sections/AppExperience.vue";
import Skills from "../components/sections/AppSkills.vue";
import CompanyContact from "../components/company/CompanyContact.vue";

const title = "Software at the Speed of Thought";
const description =
  "I help teams eliminate architectural noise and restore momentum through High-Velocity primitives. Senior Fullstack Engineer & Systems Architect.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "https://nelaka.xyz/og_banner_02.png",
  twitterCard: "summary_large_image",
});

function handleAnchorClick(event) {
  const hash = event.currentTarget.getAttribute("href");
  const el = document.querySelector(hash);
  if (el) {
    event.preventDefault();
    const lenis = useLenis();
    if (lenis) {
      lenis.scrollTo(el, {
        offset: 0,
        duration: 1.2,
      });
      history.pushState(null, "", hash);
    }
  }
}

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
