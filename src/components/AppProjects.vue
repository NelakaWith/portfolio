<template>
  <section id="projects" class="py-20 bg-slate-50/50 dark:bg-dark-lighter/50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-12">
        <h2 class="text-sm font-bold text-secondary tracking-widest uppercase mb-2">Portfolio</h2>
         <h3 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          Commercial Projects
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group bg-white border border-slate-200 dark:bg-dark dark:border-white/5 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden shadow-sm dark:shadow-none"
        >
          <!-- Decoration -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full -mr-16 -mt-16 transition-all group-hover:bg-secondary/20"></div>

          <h3 class="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 group-hover:text-secondary transition-colors">
            {{ project.name }}
          </h3>
          <p class="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed text-sm h-20">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="(tech, i) in project.technologies"
              :key="i"
              class="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/5 dark:text-gray-300 text-xs rounded-full group-hover:bg-secondary/10 group-hover:text-secondary transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: "Deal Flow - Calendar and Events",
    description:
      "Developed the Calendar and Events module for Startup Steroid's Deal Flow product.",
    technologies: ["VueJS", "JavaScript ES6", "CSS", "Azure DevOps"],
  },
  {
    name: "Jiva.ai Portal",
    description:
      "Front-end development for AI platform enabling zero-code environment.",
    technologies: ["VueJS", "JavaScript ES6", "CSS", "Vue Query", "Prime Vue"],
  },
  {
    name: "Digital Banking Solutions",
    description:
      "UI components for FinTech products including mobile banking app and digital wallet.",
    technologies: ["ReactJS", "JavaScript ES6", "SCSS", "Material UI"],
  },
  {
    name: "Tiks Compliance Management",
    description:
      "UI component collection for compliance management system web platform and hybrid mobile app.",
    technologies: [
      "VueJS",
      "TypeScript",
      "SCSS",
      "Vuex",
      "Ionic UI",
      "Ionic Capacitor",
    ],
  },
  {
    name: "Expedia Promotions",
    description:
      "Front-ends for Expedia's seasonal promotions and booking platforms.",
    technologies: ["HTML", "JavaScript", "LESS"],
  },
  {
    name: "OzoneDesk ERP",
    description: "UI development for monolithic ERP system.",
    technologies: ["PHP", "HTML", "jQuery", "CSS", "Bootstrap"],
  },
];
</script>
