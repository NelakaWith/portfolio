<template>
  <div class="wave-border">
    <svg
      class="wave-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #ff7e5f; stop-opacity: 1" />
          <stop offset="25%" style="stop-color: #feb47b; stop-opacity: 1" />
          <stop offset="50%" style="stop-color: #86a8e7; stop-opacity: 1" />
          <stop offset="75%" style="stop-color: #91eae4; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #7f7fd5; stop-opacity: 1" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #f093fb; stop-opacity: 0.5" />
          <stop offset="25%" style="stop-color: #f5576c; stop-opacity: 0.5" />
          <stop offset="50%" style="stop-color: #4facfe; stop-opacity: 0.5" />
          <stop offset="75%" style="stop-color: #00f2fe; stop-opacity: 0.5" />
          <stop offset="100%" style="stop-color: #43e97b; stop-opacity: 0.5" />
        </linearGradient>
      </defs>

      <!-- First wave layer -->
      <path
        d="M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z"
        fill="url(#waveGradient)"
        filter="url(#dropShadow)"
      >
        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          values="
            M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z;
            M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z;
            M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z
          "
        />
      </path>

      <!-- Second wave layer (transparent, different colors) -->
      <path
        d="M0,50 Q250,90 600,50 T1200,50 L1200,120 L0,120 Z"
        fill="url(#waveGradient2)"
      >
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
            M0,50 Q250,90 600,50 T1200,50 L1200,120 L0,120 Z;
            M0,50 Q250,30 600,50 T1200,50 L1200,120 L0,120 Z;
            M0,50 Q250,90 600,50 T1200,50 L1200,120 L0,120 Z
          "
        />
      </path>
    </svg>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wave-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  line-height: 0;
  border-bottom-left-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}

.wave-svg {
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
}
</style>
