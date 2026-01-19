<template>
  <div class="bg-white dark:bg-gray-900">
    <main class="mx-auto py-8">
      <CompanyHero />
      <CompanyWhoIHelp />
      <CompanyServices />
      <CompanyExpertise />
      <CompanyAdvantages />
      <CompanyProcess />
      <CompanyWhoAmI />
    </main>
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
</script>
