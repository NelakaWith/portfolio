<template>
  <div
    class="flex flex-col items-center justify-center min-h-[180px] w-full px-4 select-none"
    :class="[dark ? 'text-slate-100 max-w-[280px]' : 'text-slate-800 w-auto']"
  >
    <!-- Outer container for icon and status -->
    <div class="relative flex flex-col items-center w-full">
      <!-- Glow element (dark mode only) -->
      <div
        v-if="dark"
        class="absolute -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"
      ></div>

      <!-- Icon -->
      <div class="mb-4 relative z-10">
        <svg
          class="w-12 h-12 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            stroke-width="2"
            class="opacity-10"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#loader-grad)"
            stroke-width="4"
            stroke-dasharray="251.3"
            :stroke-dashoffset="dashOffset"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient id="loader-grad" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stop-color="#991b1b" />
              <stop offset="100%" stop-color="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Counter -->
      <div
        class="flex items-baseline font-mono tracking-tighter mb-3 relative z-10"
      >
        <span class="text-5xl font-black tabular-nums">{{ progress }}</span>
        <span class="text-xl font-medium text-primary dark:text-secondary ml-1"
          >%</span
        >
      </div>

      <!-- Status Label -->
      <div
        class="text-[9px] uppercase tracking-[0.3em] font-mono transition-colors duration-300 font-semibold opacity-75 text-center whitespace-nowrap relative z-10"
        :class="dark ? 'text-slate-400' : 'text-slate-500'"
      >
        {{ statusText }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";

defineProps({
  dark: { type: Boolean, default: false },
});

const progress = ref(0);
let animationFrameId = null;
const startTime = Date.now();
const duration = 2000; // 2 seconds total duration

const dashOffset = computed(() => {
  const circumference = 2 * Math.PI * 40; // ~251.3
  return circumference - (progress.value / 100) * circumference;
});

const statusText = computed(() => {
  if (progress.value < 30) return "Initializing...";
  if (progress.value < 65) return "Loading resources...";
  if (progress.value < 85) return "Configuring layout...";
  if (progress.value < 100) return "Finalizing...";
  return "Ready";
});

const updateProgress = () => {
  const elapsed = Date.now() - startTime;
  const rawProgress = Math.min(elapsed / duration, 1);

  // Custom easing: easeOutCubic (starts fast, slows down at the end)
  const easeProgress = 1 - Math.pow(1 - rawProgress, 3);

  progress.value = Math.floor(easeProgress * 100);

  if (rawProgress < 1) {
    animationFrameId = requestAnimationFrame(updateProgress);
  } else {
    progress.value = 100;
  }
};

onMounted(() => {
  animationFrameId = requestAnimationFrame(updateProgress);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}
</style>
