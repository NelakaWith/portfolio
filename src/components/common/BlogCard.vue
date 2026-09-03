<template>
  <article
    class="border border-rule dark:border-rule-dark bg-paper dark:bg-dark rounded-md p-6 flex flex-col justify-between hover:border-ink/40 dark:hover:border-white/30 transition-colors h-full"
  >
    <div v-if="post.feature_image" class="mb-5 overflow-hidden rounded border border-rule dark:border-rule-dark h-48 bg-paper-2 dark:bg-dark-lighter">
      <img
        :src="post.feature_image"
        :alt="post.title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div class="flex-grow space-y-3">
      <div class="flex items-center justify-between text-xs font-mono">
        <span
          v-if="post.primary_tag"
          class="text-primary font-semibold uppercase tracking-wider"
        >
          {{ post.primary_tag.name }}
        </span>
        <span class="text-ink-muted">
          {{ formatDate(post.published_at) }}
        </span>
      </div>

      <h3
        class="text-xl font-heading font-medium text-ink dark:text-white line-clamp-2"
      >
        {{ post.title }}
      </h3>

      <p
        class="text-sm text-ink-2 dark:text-ink-dark-2 leading-relaxed font-sans line-clamp-3"
      >
        {{ post.custom_excerpt || post.excerpt }}
      </p>
    </div>

    <div class="pt-5 mt-5 border-t border-rule/50 dark:border-rule-dark/50">
      <a
        :href="post.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-ink dark:hover:text-white transition-colors"
      >
        <span>Read Journal Entry</span>
        <Icon
          icon="ph:arrow-right-bold"
          class="w-3.5 h-3.5"
        />
      </a>
    </div>
  </article>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
</script>
