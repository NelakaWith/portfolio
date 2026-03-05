<template>
  <div>
    <CompanyHero />
    <CompanyWhoIHelp />
    <CompanyServices />
    <CompanyExpertise />
    <CompanyAdvantages />
    <CompanyProcess />
    <CompanyWhoAmI />
  </div>
</template>

<script setup>
import CompanyHero from "../components/company/CompanyHero.vue";
import CompanyServices from "../components/company/CompanyServices.vue";
import CompanyWhoAmI from "../components/company/CompanyWhoAmI.vue";
import CompanyWhoIHelp from "../components/company/CompanyWhoIHelp.vue";
import CompanyExpertise from "../components/company/CompanyExpertise.vue";
import CompanyAdvantages from "../components/company/CompanyAdvantages.vue";
import CompanyProcess from "../components/company/CompanyProcess.vue";

const title = "Services";
const description =
  "Explore my software development services including Web Development, Cloud Infrastructure, and Full-Stack Engineering to elevate your business.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: 'https://nelaka.xyz/og_banner_02.png',
  twitterCard: 'summary_large_image',
  keywords: 'Web Development Services, Cloud Architecture, Full-Stack Development, Software Engineering Consulting, Custom Web Apps, Nelaka Withanage',
});
</script>
