<template>
  <div class="dot-matrix-loader">
    <div class="dot-grid">
      <div
        v-for="i in 25"
        :key="i"
        class="dot"
        :style="{ animationDelay: `${getDelay(i)}ms` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  dark: { type: Boolean, default: false },
});

const primaryColor = computed(() => {
  return props.dark ? "147, 197, 253" : "37, 99, 235"; // Blue-300 / Blue-600
});

const secondaryColor = computed(() => {
  return props.dark ? "167, 139, 250" : "59, 130, 246"; // Violet-300 / Blue-500
});

// Calculate delay based on distance from center (creates radial wave)
const getDelay = (index) => {
  const row = Math.floor((index - 1) / 5);
  const col = (index - 1) % 5;
  const centerX = 2;
  const centerY = 2;
  const distance = Math.sqrt((row - centerY) ** 2 + (col - centerX) ** 2);
  return distance * 120;
};
</script>

<style scoped>
.dot-matrix-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.dot-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  width: 80px;
  height: 80px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(v-bind(primaryColor), 0.8),
    rgba(v-bind(secondaryColor), 0.8)
  );
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.4);
    opacity: 0.3;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
