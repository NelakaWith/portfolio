<template>
  <div class="bg-white dark:bg-gray-900">
    <main class="mx-auto py-8">
      <CompanyHero />
      <CompanyServices />
      <CompanyWhoAmI />
    </main>
  </div>
</template>

<script setup>
import CompanyHero from "../components/company/CompanyHero.vue";
import CompanyServices from "../components/company/CompanyServices.vue";
import CompanyWhoAmI from "../components/company/CompanyWhoAmI.vue";
</script>
