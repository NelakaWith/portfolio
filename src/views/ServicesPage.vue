<template>
  <div class="bg-white dark:bg-gray-900">
    <main class="mx-auto py-8">
      <CompanyHero />
      <CompanyServices />
    </main>
  </div>
</template>

<script setup>
import CompanyHero from "../components/company/CompanyHero.vue";
import CompanyServices from "../components/company/CompanyServices.vue";
</script>
