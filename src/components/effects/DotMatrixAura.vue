<template>
  <div ref="container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <canvas ref="canvas" class="block w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const container = ref(null);
const canvas = ref(null);
const isDark = ref(true);
let ctx = null;
let animationId = null;
let dots = [];
let width = 0;
let height = 0;
let resizeObserver = null;
let themeObserver = null;
let time = 0;

// Dot spacing (pixels)
const DOT_SPACING = 20;
const DOT_BASE_RADIUS = 2;
const DOT_MAX_RADIUS = 4;

// Color palette
const PALETTE_DARK = [
  { r: 147, g: 197, b: 253 }, // Blue-300
  { r: 167, g: 139, b: 250 }, // Violet-300
  { r: 165, g: 180, b: 252 }, // Indigo-300
  { r: 103, g: 232, b: 249 }, // Cyan-300
  { r: 94,  g: 234, b: 212 }, // Teal-300
];

const PALETTE_LIGHT = [
  { r: 29,  g: 78,  b: 216 }, // Blue-700
  { r: 109, g: 40,  b: 217 }, // Violet-700
  { r: 67,  g: 56,  b: 202 }, // Indigo-700
  { r: 14,  g: 116, b: 144 }, // Cyan-700
  { r: 15,  g: 118, b: 110 }, // Teal-700
];

class Dot {
  constructor(x, y, col, row) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.row = row;
    this.baseRadius = DOT_BASE_RADIUS;
    this.assignColor();
    // Random phase offset for organic feel
    this.phase = Math.random() * Math.PI * 2;
    // Distance from center for radial wave
    this.distFromCenter = 0;
  }

  assignColor() {
    const palette = isDark.value ? PALETTE_DARK : PALETTE_LIGHT;
    this.color = palette[Math.floor(Math.random() * palette.length)];
  }

  updateDistFromCenter(centerX, centerY) {
    const dx = this.x - centerX;
    const dy = this.y - centerY;
    this.distFromCenter = Math.sqrt(dx * dx + dy * dy);
  }

  draw(time, maxDist) {
    // Create wave effect radiating from center
    const waveFrequency = 0.015;
    const waveSpeed = 0.03;

    // Wave based on distance from center
    const wave = Math.sin(this.distFromCenter * waveFrequency - time * waveSpeed + this.phase);

    // Normalize wave to 0-1
    const normalizedWave = (wave + 1) / 2;

    // Calculate radius with wave
    const radius = this.baseRadius + (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * normalizedWave;

    // Alpha based on wave and distance falloff
    const distanceFactor = 1 - (this.distFromCenter / maxDist) * 0.5;
    const alpha = (0.2 + normalizedWave * 0.6) * distanceFactor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
    ctx.fill();
  }
}

const initDots = () => {
  dots = [];
  if (width <= 0 || height <= 0) return;

  const cols = Math.ceil(width / DOT_SPACING);
  const rows = Math.ceil(height / DOT_SPACING);
  const centerX = width / 2;
  const centerY = height / 2;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * DOT_SPACING + DOT_SPACING / 2;
      const y = row * DOT_SPACING + DOT_SPACING / 2;
      const dot = new Dot(x, y, col, row);
      dot.updateDistFromCenter(centerX, centerY);
      dots.push(dot);
    }
  }
};

const animate = () => {
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);

  time += 1;
  const maxDist = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);

  dots.forEach(dot => {
    dot.draw(time, maxDist);
  });

  animationId = requestAnimationFrame(animate);
};

const handleResize = (entries) => {
  for (const entry of entries) {
    width = entry.contentRect.width;
    height = entry.contentRect.height;

    if (canvas.value) {
      canvas.value.width = width;
      canvas.value.height = height;
    }

    if (width > 0) initDots();
  }
};

const updateTheme = () => {
  isDark.value = document.documentElement.classList.contains('dark');
  dots.forEach(dot => dot.assignColor());
};

onMounted(() => {
  if (!container.value || !canvas.value) return;
  ctx = canvas.value.getContext('2d');

  resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(container.value);

  updateTheme();
  themeObserver = new MutationObserver(updateTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  animate();
});

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect();
  if (themeObserver) themeObserver.disconnect();
  cancelAnimationFrame(animationId);
});
</script>
