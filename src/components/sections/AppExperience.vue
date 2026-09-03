<template>
  <div id="experience" class="space-y-8">
    <div class="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule dark:border-rule-dark pb-4">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-1">
          Chronological Ledger
        </span>
        <h3 class="text-2xl sm:text-3xl font-heading font-normal text-ink dark:text-white">
          Professional Journey
        </h3>
      </div>
      <span class="text-xs font-mono text-ink-muted">
        9+ Years Enterprise Track Record
      </span>
    </div>

    <!-- Editorial Ledger Timeline -->
    <div class="border-l border-rule dark:border-rule-dark ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 relative">
      <article
        v-for="(job, index) in experience"
        :key="index"
        class="relative group space-y-3"
      >
        <!-- Ledger Anchor Marker -->
        <div
          class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full border border-rule dark:border-rule-dark bg-paper dark:bg-dark group-hover:border-primary group-hover:bg-primary transition-colors"
        ></div>

        <!-- Meta Header -->
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono">
          <span class="text-primary font-semibold uppercase tracking-wider">
            {{ job.duration }}
          </span>
          <span class="text-ink-muted">/</span>
          <span class="text-ink dark:text-white font-medium">{{ job.company }}</span>
          <span class="text-ink-muted">·</span>
          <span class="text-ink-2 dark:text-ink-dark-2">{{ job.location }}</span>
        </div>

        <!-- Role Title -->
        <h4 class="text-xl sm:text-2xl font-heading font-medium text-ink dark:text-white">
          {{ job.position }}
        </h4>

        <!-- Responsibilities -->
        <ul class="space-y-2.5 max-w-3xl pt-1">
          <li
            v-for="(responsibility, i) in job.responsibilities"
            :key="i"
            class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans flex items-start"
          >
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-rule dark:bg-rule-dark mt-2 mr-3 flex-shrink-0"></span>
            <span>{{ responsibility }}</span>
          </li>
        </ul>

        <!-- Technologies -->
        <div v-if="job.technologies" class="flex flex-wrap gap-1.5 pt-3">
          <span
            v-for="(tech, t) in job.technologies"
            :key="t"
            class="px-2 py-0.5 text-xs font-mono rounded bg-paper-2 dark:bg-dark-lighter border border-rule dark:border-rule-dark text-ink-2 dark:text-ink-dark-2"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    position: "Senior Product & Systems Engineer",
    company: "Independent Practice",
    location: "Remote",
    duration: "10/2024 — Present",
    responsibilities: [
      "Architected Saadhaka Interactive Logic Sandbox (ILS), an engine-driven educational platform for organic chemistry dynamic synthesis with rule-based state graphs.",
      "Engineered Ground-0, an automated news analysis pipeline integrating NestJS backend microservices, Python scrapers, and Nuxt analytical dashboards.",
      "Built Gloire Roadmap, a performance analytics platform for goal tracking and cohort attendance with high-density data views.",
      "Delivered full-stack system prototypes emphasizing test-driven architectures, CI/CD automation, and fast runtime evaluation.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Vue 3",
      "Nuxt 4",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    position: "Frontend Engineer (Contractor)",
    company: "Startup Steroid",
    location: "Los Angeles, CA (Remote)",
    duration: "05/2024 — 10/2024",
    responsibilities: [
      "Authored and optimized core workflow UI modules for Deal Flow investor relation platform.",
      "Built event coordination calendar subsystem with resilient client-state caching.",
      "Collaborated via Azure DevOps across sprint cadences with zero regression handoffs.",
    ],
    technologies: ["Vue.js", "JavaScript ES6", "CSS", "Azure DevOps"],
  },
  {
    position: "Senior Frontend Engineer",
    company: "Uptime",
    location: "Colombo, Sri Lanka",
    duration: "10/2022 — 04/2024",
    responsibilities: [
      "Led frontend engineering on Jiva AI zero-code machine learning workflow orchestrator using Vue 3 and TypeScript.",
      "Delivered model-fusion playground enabling non-technical operators to construct multi-modal pipeline topologies.",
      "Re-engineered NOC partner and incident management system with Quasar UI, slashing ticket response turnaround.",
    ],
    technologies: ["Vue 3", "TypeScript", "SCSS", "Pinia", "Quasar UI", "Vue Query"],
  },
  {
    position: "Senior Frontend Engineer",
    company: "IdeaHub",
    location: "Colombo, Sri Lanka",
    duration: "07/2019 — 10/2022",
    responsibilities: [
      "Contributed to digital banking applications (mobile wallet, merchant POS, banking portal) on the Symphony white-label fintech platform.",
      "Delivered cross-platform UI component library for Australian enterprise compliance platform (Tiks) with Vue and Ionic Capacitor.",
    ],
    technologies: ["React", "Vue.js", "TypeScript", "SCSS", "Material UI", "Ionic"],
  },
  {
    position: "Junior Software Engineer",
    company: "Eyepax IT Consulting",
    location: "Colombo, Sri Lanka",
    duration: "02/2017 — 04/2018",
    responsibilities: [
      "Constructed frontend booking campaign modules and promotional platforms for Expedia seasonal traffic loads.",
    ],
    technologies: ["HTML5", "JavaScript", "LESS", "Java", "Node.js"],
  },
  {
    position: "Junior Software Engineer",
    company: "Lily Digital",
    location: "Colombo, Sri Lanka",
    duration: "04/2015 — 01/2017",
    responsibilities: [
      "Contributed to OzoneDesk monolithic ERP interfaces, invoicing pipelines, and reporting tables.",
    ],
    technologies: ["PHP", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
  },
];
</script>
