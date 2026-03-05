<template>
  <div class="pt-32 pb-20 min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Introduction section -->
      <section class="mb-20 text-center">
        <h1
          class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
        >
          The HVDC Philosophy
        </h1>
        <p
          class="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          High-Velocity Delivery Core (HVDC) isn't just a library; it's a
          methodology. Most document-driven systems fail because they treat
          every form, report, and workflow as a unique snowflake. HVDC treats
          them as data.
        </p>
      </section>

      <!-- Architecture/How it works -->
      <section class="mb-20">
        <h2
          class="text-3xl text-center font-heading font-bold text-slate-700 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4"
        >
          Metadata-Driven Architecture
        </h2>
        <p
          class="text-lg text-slate-600 dark:text-gray-300 mb-8 text-center sm:text-start"
        >
          By decoupling business logic from the UI, we move the 'source of
          truth' into metadata. This means:
        </p>

        <div class="space-y-6">
          <div
            class="p-6 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm flex gap-4 items-start hover:-translate-y-1 hover:shadow-md hover:border-slate-200 dark:hover:border-white/20 transition-all duration-300"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
            >
              <Icon
                icon="ph:rocket-launch-duotone"
                class="w-6 h-6 text-primary"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-700 dark:text-white mb-2">
                Zero-Deploy Updates
              </h3>
              <p class="text-slate-600 dark:text-gray-400">
                Change a validation rule or a field layout in JSON, and the app
                updates instantly.
              </p>
            </div>
          </div>

          <div
            class="p-6 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm flex gap-4 items-start hover:-translate-y-1 hover:shadow-md hover:border-slate-200 dark:hover:border-white/20 transition-all duration-300"
          >
            <div
              class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0"
            >
              <Icon
                icon="ph:bounding-box-duotone"
                class="w-6 h-6 text-secondary"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-700 dark:text-white mb-2">
                Primitive Focus
              </h3>
              <p class="text-slate-600 dark:text-gray-400">
                We stop building 'pages' and start building 'engines' that can
                render infinite variations of pages.
              </p>
            </div>
          </div>

          <div
            class="p-6 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm flex gap-4 items-start hover:-translate-y-1 hover:shadow-md hover:border-slate-200 dark:hover:border-white/20 transition-all duration-300"
          >
            <div
              class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0"
            >
              <Icon
                icon="ph:speaker-slash-duotone"
                class="w-6 h-6 text-blue-500"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-700 dark:text-white mb-2">
                Reduced Noise
              </h3>
              <p class="text-slate-600 dark:text-gray-400">
                The codebase stays lean because it only handles the *rendering*
                and *state*, not the specific business rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section>
        <h2
          class="text-3xl font-heading font-bold text-slate-700 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4 text-center"
        >
          Service Deep-Dives
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-gradient-to-br from-slate-50 to-white dark:from-white/10 dark:to-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
          >
            <h3 class="text-2xl font-bold text-slate-700 dark:text-white mb-4">
              MVP Acceleration
            </h3>
            <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
              Ideal for founders. We use pre-built HVDC primitives to get your
              core loop into the hands of users in weeks. We focus on the
              product, not the plumbing.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-slate-50 to-white dark:from-white/10 dark:to-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
          >
            <h3 class="text-2xl font-bold text-slate-700 dark:text-white mb-4">
              Architectural Audits
            </h3>
            <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
              For established teams. I dive into your Vue/Node stack, identify
              the bottlenecks causing 'sprint drag,' and implement abstraction
              layers to clear the path.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const title = "Velocity";
const description =
  "Detailing the HVDC system, philosophy, and architectural services.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>
