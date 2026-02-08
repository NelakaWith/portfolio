```
<template>
  <section id="experience" class="py-20 bg-slate-50/30 dark:bg-dark-lighter/30">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
         <h2 class="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
           Professional Journey
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div class="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10 before:-translate-x-px">
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="relative flex flex-col md:flex-row gap-8 items-start group"
          :class="{'md:flex-row-reverse': index % 2 !== 0}"
        >
          <!-- Timeline Dot -->
          <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-dark border-2 border-primary group-hover:scale-125 group-hover:border-secondary transition-transform duration-300 z-10 top-8"></div>

          <!-- Content Card -->
          <div class="ml-12 md:ml-0 md:w-[calc(50%-2rem)] bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/5 dark:shadow-glass p-8 rounded-2xl hover:border-primary/30 dark:hover:bg-white/10 dark:hover:border-white/10 transition-all duration-300 relative group-hover:-translate-y-1">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
              {{ job.duration }}
            </span>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {{ job.position }}
            </h3>
            <h4 class="text-lg text-primary mb-4 font-heading">
              {{ job.company }} <span class="text-slate-400 dark:text-gray-500 text-sm font-sans mx-2">|</span> <span class="text-slate-500 dark:text-gray-400 text-sm">{{ job.location }}</span>
            </h4>

            <ul class="space-y-3 mb-6">
               <li
                v-for="(responsibility, i) in job.responsibilities"
                :key="i"
                class="flex items-start text-slate-600 dark:text-gray-300 text-sm leading-relaxed"
              >
                <span class="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                {{ responsibility }}
              </li>
            </ul>

            <div v-if="job.technologies" class="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
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
    position: "Senior UI/UX Engineer",
    company: "Uptime",
    location: "Colombo, Sri Lanka",
    duration: "10/2022 - 04/2024",
    responsibilities: [
      "Frontend lead for Jiva.ai platform enabling zero-code AI environments.",
      "Developed and integrated APIs for internal portal applications using VueQuery and PrimeVue.",
      "Contributed to service partner management web apps using Quasar UI.",
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
    position: "Senior UI Engineer",
    company: "IdeaHub",
    location: "Colombo, Sri Lanka",
    duration: "07/2019 - 10/2022",
    responsibilities: [
      "Developed digital finance solutions on the Symphony Platform.",
      "Created UI components for FinTech products (web/mobile) using ReactJS and Material UI.",
      "Contributed to mobile banking apps and digital wallets for leading banks.",
      "Built component libraries for compliance systems (Tiks) using Ionic and Vue.",
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
      "Developed UIs for Expedia Group seasonal promotions.",
      "Built front-ends using internal templating systems with HTML, JS, and LESS.",
    ],
    technologies: [
      "HTML",
      "JavaScript",
      "LESS",
      "Java",
      "Node.js",
    ],
  },
  {
    position: "UI Developer",
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
