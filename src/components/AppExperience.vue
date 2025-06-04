<template>
  <section id="experience" class="py-12">
    <h2 class="text-3xl font-bold text-dark dark:text-white mb-8">
      Professional Experience
    </h2>

    <div class="space-y-8">
      <div
        v-for="(job, index) in experience"
        :key="index"
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold text-dark dark:text-white">
              {{ job.position }}
            </h3>
            <h4 class="text-lg text-primary dark:text-yellow-400">
              {{ job.company }}, {{ job.location }}
            </h4>
          </div>
          <span class="text-gray-500 dark:text-gray-300">{{
            job.duration
          }}</span>
        </div>
        <ul class="mt-4 space-y-2 pl-5 list-disc">
          <li
            v-for="(responsibility, i) in job.responsibilities"
            :key="i"
            class="text-gray-700 dark:text-gray-200"
          >
            {{ responsibility }}
          </li>
        </ul>
        <div v-if="job.technologies" class="mt-4">
          <span class="text-sm font-medium text-gray-500 dark:text-gray-300"
            >Technologies:
          </span>
          <span class="text-sm text-gray-700 dark:text-gray-200">{{
            job.technologies.join(", ")
          }}</span>
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
    technologies: ["VueJS", "JavaScript ES6", "CSS", "Azure DevOps"],
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
    technologies: [
      "VueJS",
      "TypeScript",
      "SCSS",
      "Pini",
      "Quasar UI",
      "Vue Query",
      "Prime Vue",
      "Jira",
      "BitBucket",
    ],
  },
  {
    position: "Senior UI Engineer (Frontend Engineer)",
    company: "IdeaHub",
    location: "Colombo, Sri Lanka",
    duration: "07/2019-10/2022",
    responsibilities: [
      "IdeaHub is a company that develops digital finance solutions using their own Symphony Platform.",
      "I was responsible for developing UI components for the FinTech products (web and Android mobile) and integrating them with the API using React JS (JavaScript ES6, SCSS and Material UI).",
      "Contributed to developing the digital layer of a leading bank in Sri Lanka. Worked on their mobile banking app, digital Wallet, digital banking web portal, bank management web solution and POS app projects.",
      "Contributed to another company product, Spide Craft; it is a digital automation platform that could be used as an enabler for various digital transformation initiatives in an enterprise.",
      'Worked on a client project for an Australian company, "Tiks". A compliance management system.',
      "With Tiks, I was responsible for developing a UI component collection to use in their web platform and hybrid mobile app using VueJS and Ionic Capacitor and integrating them with the API using VueJS (TypeScript, SCSS, Vuex and Ionic UI).",
    ],
    technologies: [
      "ReactJS",
      "VueJS",
      "TypeScript",
      "SCSS",
      "Material UI",
      "Ionic UI",
      "Ionic Capacitor",
      "Vuex",
      "Jira",
      "BitBucket/GitHub",
    ],
  },
  {
    position: "Junior Software Engineer",
    company: "Eyepax IT Consulting (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    duration: "02/2017-04/2018",
    responsibilities: [
      "In Eyepax, I was responsible for developing UIs for Expedia Group as an outsourced developer.",
      "I created front-ends using HTML, JS, and LESS for Expedia's seasonal promotions and booking platforms.",
      "Expedia has their own component libraries and templating systems powered by Java and Node.js with LESS.",
    ],
    technologies: [
      "HTML",
      "JavaScript",
      "LESS",
      "Java",
      "Node.js",
      "Jira",
      "Mercurial SCM/GitHub",
    ],
  },
  {
    position: "UI Developer",
    company: "Lily Digital (Pvt) Ltd. oZoneDesk",
    location: "Colombo, Sri Lanka",
    duration: "04/2015-01/2017",
    responsibilities: [
      "I was a contributor to their ERP system, OzoneDesk, as a UI developer and participated in several side projects.",
      "It was a monolithic system powered by PHP and pure HTML (jQuery) and CSS with Bootstrap at the time.",
      "I also worked on a PHP-based website. It was a job platform.",
    ],
    technologies: ["PHP", "HTML", "jQuery", "CSS", "Bootstrap"],
  },
];
</script>

<style scoped>
/* Additional styling if needed */
</style>
