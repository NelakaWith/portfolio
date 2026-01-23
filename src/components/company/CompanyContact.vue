<template>
  <div class="max-w-2xl mx-auto">
    <!-- Success/Error Banner -->
    <div
      v-if="banner.show"
      class="mb-6 p-4 rounded-lg transition-all"
      :class="{
        'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800':
          banner.type === 'success',
        'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800':
          banner.type === 'error',
      }"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <svg
            v-if="banner.type === 'success'"
            class="w-5 h-5 text-green-600 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-if="banner.type === 'error'"
            class="w-5 h-5 text-red-600 dark:text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <p
            class="text-sm font-medium"
            :class="{
              'text-green-800 dark:text-green-200': banner.type === 'success',
              'text-red-800 dark:text-red-200': banner.type === 'error',
            }"
          >
            {{ banner.message }}
          </p>
        </div>
        <button
          @click="banner.show = false"
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="text-left">
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

      <div class="flex flex-col mb-6">
        <label
          for="helpType"
          class="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300"
          >I need help with...</label
        >
        <select
          id="helpType"
          v-model="form.helpType"
          required
          class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
        >
          <option value="" disabled selected>Select an option</option>
          <option value="new-product">Building a new product</option>
          <option value="improve-app">Improving an existing app</option>
          <option value="ongoing-support">Ongoing technical support</option>
        </select>
      </div>

      <div class="flex flex-col mb-6">
        <label
          for="projectStage"
          class="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300"
          >Project Stage</label
        >
        <select
          id="projectStage"
          v-model="form.projectStage"
          required
          class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
        >
          <option value="" disabled selected>Select an option</option>
          <option value="idea">Idea/Napkin sketch</option>
          <option value="prototype">Prototype exists</option>
          <option value="live">Live product in production</option>
        </select>
      </div>

      <div class="flex flex-col mb-6">
        <label
          for="budget"
          class="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300"
          >Estimated Budget</label
        >
        <select
          id="budget"
          v-model="form.budget"
          required
          class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
        >
          <option value="" disabled selected>Select an option</option>
          <option value="5k-10k">$5k - $10k</option>
          <option value="10k-25k">$10k - $25k</option>
          <option value="25k-plus">$25k+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
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
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import apiClient from "@/api/axios";

const isSubmitting = ref(false);
const banner = reactive({
  show: false,
  type: "success",
  message: "",
});

const form = reactive({
  name: "",
  email: "",
  helpType: "",
  projectStage: "",
  budget: "",
  message: "",
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  banner.show = false;

  try {
    const response = await apiClient.post("/contact", form);
    console.log("Form submitted successfully:", response.data);

    // Show success banner
    banner.type = "success";
    banner.message = "Thanks for reaching out! I will get back to you soon.";
    banner.show = true;

    // Reset form
    form.name = "";
    form.email = "";
    form.helpType = "";
    form.projectStage = "";
    form.budget = "";
    form.message = "";

    // Auto-hide banner after 5 seconds
    setTimeout(() => {
      banner.show = false;
    }, 5000);
  } catch (error) {
    console.error("Error submitting form:", error);

    // Show error banner
    banner.type = "error";
    banner.message = "Something went wrong. Please try again later.";
    banner.show = true;

    // Auto-hide banner after 7 seconds
    setTimeout(() => {
      banner.show = false;
    }, 7000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
