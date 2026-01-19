<template>
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Text Content -->
        <div class="flex-1">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Operational Advantage: Trust by Design
          </h2>
          <h3 class="text-2xl font-semibold text-slate-700 dark:text-gray-200 mb-6">
            Remote Engineering. Local Reliability.
          </h3>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Based in Sri Lanka, I’ve engineered my workspace to exceed global uptime standards. I eliminate the "regional risk" so you can focus on the results.
          </p>

          <div class="space-y-6">
            <!-- Continuity -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-slate-800 dark:text-white">Continuity</h4>
                <p class="text-gray-600 dark:text-gray-400">UPS and Inverter-backed workspace for zero downtime during grid outages.</p>
              </div>
            </div>

            <!-- Connectivity -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-slate-800 dark:text-white">Connectivity</h4>
                <p class="text-gray-600 dark:text-gray-400">Dual-ISP (fibre + 4G Backup) for constant availability.</p>
              </div>
            </div>

            <!-- Transparency -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-slate-800 dark:text-white">Transparency</h4>
                <p class="text-gray-600 dark:text-gray-400">An Async-first culture with proactive documentation and Loom video walkthroughs.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual/Image Side -->
        <div class="flex-1 w-full max-w-md lg:max-w-full">
            <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <!-- Abstract visual representation or map could go here. For now, a clean typographic or icon layout -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-center">
                        <span class="block text-2xl font-bold text-green-500 mb-1">99.9%</span>
                        <span class="text-xs text-gray-500 uppercase tracking-wider">Uptime</span>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-center">
                        <span class="block text-2xl font-bold text-blue-500 mb-1">2</span>
                        <span class="text-xs text-gray-500 uppercase tracking-wider">ISPs</span>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-center">
                        <span class="block text-2xl font-bold text-amber-500 mb-1">24/7</span>
                        <span class="text-xs text-gray-500 uppercase tracking-wider">Power</span>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-center">
                        <span class="block text-2xl font-bold text-purple-500 mb-1">Async</span>
                        <span class="text-xs text-gray-500 uppercase tracking-wider">Workflow</span>
                    </div>
                </div>
                <div class="mt-8 text-center">
                     <p class="text-sm text-gray-400 italic">"Designed for reliability, regardless of location."</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static content
</script>
