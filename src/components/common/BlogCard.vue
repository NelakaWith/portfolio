<template>
  <div
    class="group bg-white border border-slate-200 dark:bg-dark dark:border-white/5 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden shadow-sm dark:shadow-none h-full flex flex-col"
  >
    <!-- Decoration -->
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full -mr-16 -mt-16 transition-all group-hover:bg-primary/20"
    ></div>

    <div v-if="post.feature_image" class="mb-5 overflow-hidden rounded-xl h-48">
      <img
        :src="post.feature_image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div class="flex-grow">
      <div class="flex items-center gap-2 mb-3">
        <span
          v-if="post.primary_tag"
          class="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full"
        >
          {{ post.primary_tag.name }}
        </span>
        <span class="text-slate-400 dark:text-gray-500 text-xs">
          {{ formatDate(post.published_at) }}
        </span>
      </div>

      <h3
        class="text-xl font-heading font-bold text-slate-700 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2"
      >
        {{ post.title }}
      </h3>

      <p
        class="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed text-sm line-clamp-3"
      >
        {{ post.custom_excerpt || post.excerpt }}
      </p>
    </div>

    <a
      :href="post.url"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-auto inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
    >
      Read Full Post
      <Icon
        icon="ph:arrow-right-bold"
        class="w-4 h-4 transition-transform group-hover/link:translate-x-1"
      />
    </a>
  </div>
</template>

<script setup>
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
