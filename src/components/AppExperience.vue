<template>
  <section id="experience" class="py-12">
    <h2 class="text-3xl font-bold text-dark mb-8">Professional Experience</h2>

    <div class="space-y-8">
      <div
        v-for="(job, index) in experience"
        :key="index"
        class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold text-dark">{{ job.position }}</h3>
            <h4 class="text-lg text-primary">
              {{ job.company }}, {{ job.location }}
            </h4>
          </div>
          <span class="text-gray-500">{{ job.duration }}</span>
        </div>
        <ul class="mt-4 space-y-2 pl-5 list-disc">
          <li
            v-for="(responsibility, i) in job.responsibilities"
            :key="i"
            class="text-gray-700"
          >
            {{ responsibility }}
          </li>
        </ul>
        <div v-if="job.technologies" class="mt-4">
          <span class="text-sm font-medium text-gray-500">Technologies: </span>
          <span class="text-sm text-gray-700">{{ job.technologies }}</span>
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
    duration: "05/2024-10/2024",
    responsibilities: [
      "Responsible for creating and maintaining UI components and integrating them with the API for the company's web-based software products using VueJS (JavaScript ES6, CSS).",
      'Contributed by developing the "Calendar and Events" module of the product "Deal Flow".',
      "Used Azure DevOps for task and code management.",
    ],
  },
  {
    position: "Senior UI/UX Engineer (Senior Frontend Engineer)",
    company: "Uptime",
    location: "Colombo, Sri Lanka",
    duration: "10/2022-04/2024",
    responsibilities: [
      "Worked as an outsourced developer for Jiva.ai. I was responsible for the front-end aspect of their web platform that enables users to use the AI in a zero-code environment.",
      "I was responsible for developing and doing API integration for their portal application using VueJS (JavaScript ES6, CSS, Vue Query and Prime Vue).",
      "Worked on an internal project for Uptime. Contributed to a web app that is use for managing service partners internally (and externally by other parties).",
      "The app was built using VueJS (TypeScript, SCSS, Pini and Quasar UI). I was responsible for developing some of the features for the new version of the front end and adding API integration.",
    ],
    technologies: "VueJS, TypeScript, SCSS, Pini, Quasar UI, Jira, BitBucket",
  },
  // Add other experiences similarly
];
</script>
