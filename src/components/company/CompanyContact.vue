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

    <form @submit.prevent="handleSubmit" class="text-left space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label
            for="name"
            class="mb-1.5 text-xs font-mono uppercase tracking-wider text-ink-2 dark:text-ink-dark-2"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="px-3.5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-sm font-sans focus:border-primary dark:focus:border-primary outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="email"
            class="mb-1.5 text-xs font-mono uppercase tracking-wider text-ink-2 dark:text-ink-dark-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="px-3.5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-sm font-sans focus:border-primary dark:focus:border-primary outline-none transition-colors"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <label
          for="helpType"
          class="mb-1.5 text-xs font-mono uppercase tracking-wider text-ink-2 dark:text-ink-dark-2"
          >Engagement Objective</label
        >
        <select
          id="helpType"
          v-model="form.helpType"
          required
          class="px-3.5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-sm font-sans focus:border-primary dark:focus:border-primary outline-none transition-colors"
        >
          <option value="" disabled selected>Select an objective</option>
          <option value="new-product">Greenfield product architecture</option>
          <option value="improve-app">Architecture audit & modernization</option>
          <option value="ongoing-support">Senior technical leadership / contract</option>
        </select>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label
            for="projectStage"
            class="mb-1.5 text-xs font-mono uppercase tracking-wider text-ink-2 dark:text-ink-dark-2"
            >Project Stage</label
          >
          <select
            id="projectStage"
            v-model="form.projectStage"
            required
            class="px-3.5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-sm font-sans focus:border-primary dark:focus:border-primary outline-none transition-colors"
          >
            <option value="" disabled selected>Select stage</option>
            <option value="idea">Early stage / specification</option>
            <option value="prototype">Working prototype exists</option>
            <option value="live">Production scale system</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label
            for="budget"
            class="mb-1.5 text-xs font-mono uppercase tracking-wider text-ink-2 dark:text-ink-dark-2"
            >Budget Scope</label
          >
          <select
            id="budget"
            v-model="form.budget"
            required
            class="px-3.5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-sm font-sans focus:border-primary dark:focus:border-primary outline-none transition-colors"
          >
            <option value="" disabled selected>Select scope</option>
            <option value="5k-10k">$5k — $10k</option>
            <option value="10k-25k">$10k — $25k</option>
            <option value="25k-plus">$25k+</option>
            <option value="not-sure">Scope to be defined</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col">
        <label
          for="message"
          class="mb-1.5 text-xs font-mono uppercase tracking-wider text-ink-2 dark:text-ink-dark-2"
          >Project Parameters & Notes</label
        >
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="4"
          class="px-3.5 py-2.5 rounded border border-rule dark:border-rule-dark bg-paper-2 dark:bg-dark-lighter text-ink dark:text-white text-sm font-sans focus:border-primary dark:focus:border-primary outline-none transition-colors resize-none"
          placeholder="Summary of technical requirements, goals, and timeline..."
        ></textarea>
      </div>

      <!-- Cloudflare Turnstile Widget -->
      <div
        v-if="config.public.turnstileSiteKey"
        class="pt-2 flex justify-center"
      >
        <div ref="turnstileContainer"></div>
      </div>

      <div class="pt-2 text-center">
        <button
          type="submit"
          class="hero-button w-full sm:w-auto"
          :class="{
            'opacity-50 cursor-not-allowed':
              isMounted && (isSubmitting || !form.turnstileToken),
          }"
          :disabled="isSubmitting || !form.turnstileToken"
        >
          <span v-if="!isSubmitting">Transmit Dispatch</span>
          <span v-else>Transmitting...</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import apiClient from "@/api/axios";

const isSubmitting = ref(false);
const isMounted = ref(false);
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
  turnstileToken: "",
});

const config = useRuntimeConfig();
const turnstileContainer = ref(null);
let widgetId = null;

useHead({
  script: [
    {
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
      async: true,
      defer: true,
    },
  ],
});

const renderTurnstile = () => {
  if (
    typeof window !== "undefined" &&
    window.turnstile &&
    turnstileContainer.value
  ) {
    // Reset token before rendering a new widget
    form.turnstileToken = "";
    if (widgetId !== null) {
      try {
        window.turnstile.remove(widgetId);
        widgetId = null;
      } catch {
        // Silently fail if removal fails
      }
    }
    // Clear the container just in case
    turnstileContainer.value.innerHTML = "";
    try {
      widgetId = window.turnstile.render(turnstileContainer.value, {
        sitekey: config.public.turnstileSiteKey,
        callback: (token) => {
          form.turnstileToken = token;
        },
        "expired-callback": () => {
          form.turnstileToken = "";
        },
        "error-callback": () => {
          form.turnstileToken = "";
        },
        theme: "auto",
      });
    } catch {
      //
    }
  }
};

onMounted(() => {
  isMounted.value = true;
  // Wait for Turnstile script to load if it hasn't already
  const checkTurnstile = setInterval(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      clearInterval(checkTurnstile);
      renderTurnstile();
    }
  }, 100);

  // Clean up interval if it takes too long (e.g. 10 seconds)
  setTimeout(() => clearInterval(checkTurnstile), 10000);
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined" && window.turnstile && widgetId !== null) {
    window.turnstile.remove(widgetId);
  }
});

const handleSubmit = async () => {
  if (!form.turnstileToken) {
    banner.type = "error";
    banner.message = "Please complete the security check.";
    banner.show = true;
    return;
  }

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
