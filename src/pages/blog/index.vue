<template>
  <div class="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-dark">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Content -->
      <div class="relative z-10 text-center mb-16">
        <h1
          class="text-4xl md:text-6xl font-heading font-bold text-slate-700 dark:text-white mb-6"
        >
          The Quiet <span class="text-primary">Console</span>
        </h1>
        <p
          class="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Sharing my thoughts on technology, development, and digital
          experiences.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center py-20">
        <Icon
          icon="ph:spinner-gap-bold"
          class="w-12 h-12 text-primary animate-spin"
        />
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-slate-200 dark:border-white/5"
      >
        <Icon
          icon="ph:warning-circle-bold"
          class="w-16 h-16 text-red-500 mx-auto mb-4"
        />
        <p class="text-slate-700 dark:text-white text-xl font-bold mb-2">
          Oops! Something went wrong.
        </p>
        <p class="text-slate-600 dark:text-gray-400">
          Failed to load blog posts. Please try again later.
        </p>
        <button
          @click="refresh"
          class="mt-6 px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors"
        >
          Retry
        </button>
      </div>

      <!-- Posts Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />

        <!-- Empty State -->
        <div v-if="posts.length === 0" class="col-span-full text-center py-20">
          <Icon
            icon="ph:newspaper-clipping-bold"
            class="w-16 h-16 text-slate-300 dark:text-gray-600 mx-auto mb-4"
          />
          <p class="text-slate-600 dark:text-gray-400 text-lg">
            No blog posts found yet. Check back soon!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogCard from "~/components/common/BlogCard.vue";

const config = useRuntimeConfig();
const { ghostApiKey, ghostApiUrl } = config.public;

const url = `${ghostApiUrl}/ghost/api/content/posts/?key=${ghostApiKey}&limit=50&include=tags,authors`;

const { data, pending, error, refresh } = await useFetch(url);

const posts = computed(() => data.value?.posts || []);

useSeoMeta({
  title: "Blog | Nelaka Withanage",
  description:
    "Sharing my thoughts on technology, development, and digital experiences.",
  ogTitle: "Blog | Nelaka Withanage",
  ogDescription:
    "Sharing my thoughts on technology, development, and digital experiences.",
});
</script>
