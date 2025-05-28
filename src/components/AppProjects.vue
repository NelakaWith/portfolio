<template>
  <section id="projects" class="py-12 bg-white rounded-lg shadow-sm p-6">
    <h2 class="text-3xl font-bold text-dark mb-8">Contributions</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
      >
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Project Image</span>
        </div>
        <div class="p-4">
          <h3 class="text-xl font-bold text-dark mb-2">{{ project.name }}</h3>
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, i) in project.technologies"
              :key="i"
              class="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full"
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
