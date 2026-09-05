<template>
  <div class="pt-32 pb-24 min-h-screen bg-paper dark:bg-dark">
    <div class="max-w-6xl mx-auto px-6 space-y-12">
      <!-- Editorial Header -->
      <div
        class="space-y-4 max-w-2xl border-b border-rule dark:border-rule-dark pb-8"
      >
        <span
          class="text-xs font-mono uppercase tracking-widest text-primary font-semibold block"
        >
          Field Notes & Essays
        </span>
        <h1
          class="text-4xl sm:text-6xl font-heading font-normal text-ink dark:text-white"
        >
          The Quiet Console
        </h1>
        <p
          class="text-base sm:text-lg text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans"
        >
          Technical dispatches on systems architecture, deterministic state
          machines, and modern full-stack workflows.
        </p>
      </div>

      <!-- Loading State -->
      <div
        v-if="pending"
        class="flex flex-col items-center justify-center py-24 space-y-4"
      >
        <Icon
          icon="ph:spinner-gap-bold"
          class="w-8 h-8 text-primary animate-spin"
        />
        <p class="text-xs font-mono uppercase tracking-widest text-ink-muted">
          Loading journal entries...
        </p>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="text-center py-16 px-6 border border-rule dark:border-rule-dark rounded-md bg-paper-2 dark:bg-dark-lighter max-w-lg mx-auto"
      >
        <Icon
          icon="ph:warning-circle-bold"
          class="w-10 h-10 text-primary mx-auto mb-3"
        />
        <h3
          class="text-lg font-heading font-medium text-ink dark:text-white mb-2"
        >
          Unable to synchronize journal
        </h3>
        <p class="text-sm text-ink-2 dark:text-ink-dark-2 font-sans mb-5">
          Failed to fetch remote articles from publication endpoint.
        </p>
        <button @click="refresh" class="hero-button">Retry Fetch</button>
      </div>

      <!-- Posts Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />

        <!-- Empty State -->
        <div
          v-if="posts.length === 0"
          class="col-span-full text-center py-20 border border-rule dark:border-rule-dark rounded-md bg-paper-2/50 dark:bg-dark-lighter/50 space-y-3"
        >
          <Icon
            icon="ph:newspaper-clipping-bold"
            class="w-10 h-10 text-ink-muted mx-auto"
          />
          <h4
            class="text-base font-heading font-medium text-ink dark:text-white"
          >
            No entries found
          </h4>
          <p class="text-sm font-mono text-ink-2 dark:text-ink-dark-2">
            No journal entries published currently. Check back soon.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import BlogCard from "~/components/common/BlogCard.vue";

const config = useRuntimeConfig();
const { ghostApiKey, ghostApiUrl } = config.public;

const {
  data: postsData,
  pending,
  error,
  refresh,
} = useLazyAsyncData(
  "ghost-posts",
  () => {
    if (!ghostApiUrl || !ghostApiKey) {
      return Promise.resolve({ posts: [] });
    }

    const url = `${ghostApiUrl}/ghost/api/content/posts/?key=${ghostApiKey}&limit=50&include=tags,authors`;
    return $fetch(url);
  },
  {
    server: true,
  },
);

const posts = computed(() => postsData.value?.posts || []);

useSeoMeta({
  title: "Blog — Nelaka Withanage",
  description:
    "Technical essays and architecture notes by Senior Systems Architect Nelaka Withanage.",
  ogTitle: "Blog — Nelaka Withanage",
  ogDescription:
    "Technical essays and architecture notes by Senior Systems Architect Nelaka Withanage.",
});
</script>
