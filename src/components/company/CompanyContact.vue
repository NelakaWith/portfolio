<template>
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto text-left">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col">
        <label
          for="name"
          class="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      <div class="flex flex-col">
        <label
          for="email"
          class="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          placeholder="email@example.com"
        />
      </div>
    </div>

    <div class="flex flex-col mb-8">
      <label
        for="message"
        class="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300"
        >Message</label
      >
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="4"
        class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
        placeholder="How can I help you?"
      ></textarea>
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="hero-button bg-slate-800 dark:bg-slate-700"
        :disabled="isSubmitting"
      >
        <span v-if="!isSubmitting" class="hero-primary-gradient"
          >Send Message</span
        >
        <span v-else class="hero-primary-gradient">Sending...</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const isSubmitting = ref(false);
const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Form submitted:", form);
  isSubmitting.value = false;
  alert("Thanks for reaching out! I will get back to you soon.");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<style scoped>
/* Button styles handled by global hero-button class */
</style>
