```
<template>
  <section
    id="experience"
    class="py-20 bg-slate-50/30 dark:bg-dark-lighter/30 rounded-xl"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-heading font-bold text-slate-700 dark:text-white mb-4"
        >
          Professional Journey
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
        ></div>
      </div>

      <div
        class="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10 before:-translate-x-px"
      >
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="relative flex flex-col md:flex-row gap-8 items-start group"
          :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
        >
          <!-- Timeline Dot -->
          <div
            class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-dark border-2 border-primary group-hover:scale-125 group-hover:border-secondary transition-transform duration-300 z-10 top-8"
          ></div>

          <!-- Content Card -->
          <div
            class="ml-12 md:ml-0 md:w-[calc(50%-2rem)] bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/5 dark:shadow-glass p-8 rounded-2xl hover:border-primary/30 dark:hover:bg-white/10 dark:hover:border-white/10 transition-all duration-300 relative group-hover:-translate-y-1"
          >
            <span
              class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full"
            >
              {{ job.duration }}
            </span>

            <h3 class="text-xl font-bold text-slate-700 dark:text-white mb-1">
              {{ job.position }}
            </h3>
            <h4 class="text-lg text-primary mb-4 font-heading">
              {{ job.company }}
              <span
                class="text-slate-400 dark:text-gray-500 text-sm font-sans mx-2"
                >|</span
              >
              <span class="text-slate-500 dark:text-gray-400 text-sm">{{
                job.location
              }}</span>
            </h4>

            <ul class="space-y-3 mb-6">
              <li
                v-for="(responsibility, i) in job.responsibilities"
                :key="i"
                class="flex items-start text-slate-600 dark:text-gray-300 text-sm leading-relaxed"
              >
                <span
                  class="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                ></span>
                {{ responsibility }}
              </li>
            </ul>

            <div
              v-if="job.technologies"
              class="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2"
            >
              <span
                v-for="(tech, t) in job.technologies"
                :key="t"
                class="text-xs text-slate-500 dark:text-gray-400 font-mono"
              >
                #{{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    position: "Lead Software Engineer / Architect",
    company: "Freelancer",
    location: "Remote",
    duration: "10/2024 - Present",
    responsibilities: [
      "Architected Saadhaka, an Interactive Logic Sandbox (ILS) built for chemistry education, featuring an engine-driven curriculum, challenge-based progress tracking, and interactive sandboxes. It comprises a NestJS API for back-end intelligence, a React-based client for core user functionality, and a Nuxt-powered web application for public-facing information. The system leverages a knowledge graph to structure learning paths, providing a personalized and gamified experience for mastering complex chemical concepts.",
      "Architected Ground-0, a platform for news discovery and analysis that utilizes a NestJS API for backend orchestration, a Python-based crawler for automated web ingestion, and a Nuxt frontend for visualizing sentiment and bias data.",
      "Architected Gloire Roadmap, an application that provides a centralized platform for managing student data, attendance, and progress tracking. It features a Vue.js frontend for interactive analytics and a Node.js backend that handles goal-orientated performance metrics. The system is designed to streamline classroom management and provide data-driven insights through various specialised modules.",
      "Providing full-stack software engineering services focusing on the JavaScript ecosystem with MySQL and PostgreSQL.",
      "Implementing TDD and CI/CD best practices for high-performance internal technical prototypes",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    position: "Frontend Engineer (Contractor)",
    company: "Startup Steroid",
    location: "Los Angeles, California",
    duration: "05/2024 - 10/2024",
    responsibilities: [
      "Responsible for creating and maintaining UI components and integrating them with the API for the company's web-based software products using VueJS (JavaScript ES6, CSS).",
      'Contributed by developing the "Calendar and Events" module of the product "Deal Flow".',
      "Used Azure DevOps for task and code management.",
    ],
    technologies: ["VueJS", "JavaScript ES6", "CSS", "Azure DevOps"],
  },
  {
    position: "Senior Frontend Engineer",
    company: "Uptime",
    location: "Colombo, Sri Lanka",
    duration: "10/2022 - 04/2024",
    responsibilities: [
      "Led the frontend development for a zero-code AI platform frontend with Vue 3, TypeScript, and Tailwind. It uses a playground-style interface to build AI workflows. Jiva AI uses a model-fusion-first approach to machine learning to provide a sophisticated platform that enables multimodal AI. Allowing non-technical users to iteratively grow, evolve and deploy models based on their data for real-world use.",
      "Part of the team that did the re-engineering of the partner management system with Quasar UI, improving the efficiency of vendor workflows. It is a one-stop shop for all things partner management for NOC operations. including a sophisticated ticket management system.",
    ],
    technologies: [
      "VueJS",
      "TypeScript",
      "SCSS",
      "Pinia",
      "Quasar UI",
      "Vue Query",
    ],
  },
  {
    position: "Senior Frontend Engineer",
    company: "IdeaHub",
    location: "Colombo, Sri Lanka",
    duration: "07/2019 - 10/2022",
    responsibilities: [
      "Contributed to the development of digital banking platforms (mobile banking, wallet, and POS apps) using React. All the apps are based on the flagship platform 'Symphony', which is built from the ground up for financial services organizations and telcos who are looking for their own branded digital payment platform and fully immersive 'life' tech.",
      "Responsible for delivering the UI library for the Australian compliance system (Tiks) with Vue + Ionic Capacitor. It’s Workforce Safety’s Enterprise Protection Platform, originally built by TIKS and currently owned by Damstra Technology.",
    ],
    technologies: [
      "ReactJS",
      "VueJS",
      "TypeScript",
      "SCSS",
      "Material UI",
      "Ionic",
    ],
  },
  {
    position: "Junior Software Engineer",
    company: "Eyepax IT Consulting (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    duration: "02/2017 - 04/2018",
    responsibilities: [
      "Built frontend for Expedia’s seasonal promotions and booking platforms internal templating systems with HTML, JS, and LESS. Supported high-traffic travel platforms with a global user base.",
    ],
    technologies: ["HTML", "JavaScript", "LESS", "Java", "Node.js"],
  },
  {
    position: "Junior Software Engineer",
    company: "Lily Digital (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    duration: "04/2015 - 01/2017",
    responsibilities: [
      "Contributor to OzoneDesk ERP system UI.",
      "Worked on monolithic PHP/HTML/Bootstrap systems.",
    ],
    technologies: ["PHP", "HTML", "jQuery", "CSS", "Bootstrap"],
  },
];
</script>

<style scoped>
/* Additional styling if needed */
</style>
