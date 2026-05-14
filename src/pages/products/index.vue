<template>
  <div class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6">
        Architectural <span class="title-highlight">Assets.</span>
      </h1>
      <p class="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
        Production-ready engines and primitives designed to accelerate your development and eliminate repetitive architectural noise.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Dredger Badger Card -->
      <div class="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-xl dark:shadow-none">
        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon icon="ph:sketch-logo-duotone" class="w-32 h-32" />
        </div>
        
        <div class="relative z-10">
          <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
            <Icon icon="ph:badger-duotone" class="w-8 h-8" />
          </div>
          
          <h2 class="text-2xl font-bold text-slate-700 dark:text-white mb-3">Dredger Badger</h2>
          <p class="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
            The Ultimate AI-First Scraping & Intelligence Boilerplate. Transform raw HTML into structured JSON with a Double-Pass LLM Pipeline.
          </p>
          
          <div class="flex items-center gap-4 mb-8">
            <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold text-slate-500 dark:text-gray-400">NestJS</span>
            <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold text-slate-500 dark:text-gray-400">BullMQ</span>
            <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold text-slate-500 dark:text-gray-400">LLM</span>
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-slate-700 dark:text-white">$149</span>
            <NuxtLink 
              to="/products/dredger-badger" 
              class="px-6 py-2 rounded-full bg-slate-800 dark:bg-white/10 hover:bg-primary hover:text-white transition-all text-sm font-bold text-white"
            >
              View Asset
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Placeholder for future products -->
      <div class="p-8 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/5 flex flex-col items-center justify-center text-center opacity-50">
        <Icon icon="ph:plus-circle" class="w-12 h-12 text-slate-400 mb-4" />
        <h3 class="font-bold text-slate-500">More Assets Coming Soon</h3>
        <p class="text-sm text-slate-400 mt-2">I'm polishing more high-velocity primitives for release.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Architectural Assets',
  description: 'Production-ready engines and primitives to accelerate your development.',
})
</script>
