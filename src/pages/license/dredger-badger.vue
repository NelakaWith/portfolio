<template>
  <div class="pt-32 pb-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12">
      <NuxtLink to="/products/dredger-badger" class="text-primary hover:underline flex items-center gap-2 mb-8">
        <Icon icon="ph:arrow-left" />
        Back to Product
      </NuxtLink>
      <h1 class="text-4xl md:text-5xl font-heading font-bold text-slate-700 dark:text-white mb-4">
        Dredger Badger Commercial License Agreement
      </h1>
      <p class="text-slate-500">Copyright (c) 2026 Nelaka. All rights reserved.</p>
    </div>

    <div class="prose prose-slate dark:prose-invert max-w-none">
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2">
          1. Grant of License
        </h2>
        <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
          By purchasing Dredger Badger, you are granted a non-exclusive, worldwide, perpetual license to use, modify, and integrate the source code into:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-4 text-slate-600 dark:text-gray-300">
          <li>Unlimited personal projects.</li>
          <li>Unlimited commercial projects and client work.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2">
          2. Permitted Use
        </h2>
        <p class="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
          You are encouraged to:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-gray-300">
          <li>Modify the source code to suit your application’s specific requirements.</li>
          <li>Integrate the scraping and orchestration logic into your own SaaS or internal tools.</li>
          <li>Deploy the code as part of a larger commercial offering.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2">
          3. Restrictions
        </h2>
        <p class="text-slate-600 dark:text-gray-300 mb-4">
          The following actions are strictly prohibited:
        </p>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
            <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
              <strong class="text-red-500">Redistribution:</strong> You may not redistribute, sub-license, or sell the source code (in its original or modified form) as a standalone template, boilerplate, or starter kit.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
            <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
              <strong class="text-red-500">Competing Products:</strong> You may not use this code to create a direct competitor to Dredger Badger (i.e., another scraping boilerplate).
            </p>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
            <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
              <strong class="text-red-500">Public Repositories:</strong> You must not host the source code in public GitHub/GitLab repositories.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2">
          4. No Warranty & Refunds
        </h2>
        <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
          The software is provided "as is," without warranty of any kind. Due to the digital nature of the asset, all sales are final. By downloading the source code, you waive the right to a refund.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2">
          5. Limitation of Liability
        </h2>
        <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
          In no event shall the author be liable for any claim, damages, or other liability arising from the use of the software.
        </p>
      </section>
    </div>

    <div class="mt-20 pt-8 border-t border-slate-200 dark:border-white/10 text-center text-sm text-slate-400">
      Last updated: May 14, 2026
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Dredger Badger Commercial License Agreement',
  description: 'Commercial license terms for the Dredger Badger scraping boilerplate.',
});
</script>

<style scoped>
.prose h2 {
  @apply mt-0;
}
</style>
