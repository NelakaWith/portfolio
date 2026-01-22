<template>
  <div ref="container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <canvas ref="canvas" class="block w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const container = ref(null);
const canvas = ref(null);
const isDark = ref(true); // Track theme
let ctx = null;
let animationId = null;
let particles = [];
let width = 0;
let height = 0;
let resizeObserver = null;
let themeObserver = null;

// Palette for DARK MODE (Pastels / Lighter for Screen Blend)
const PALETTE_DARK = [
  { r: 147, g: 197, b: 253 }, // Blue-300
  { r: 167, g: 139, b: 250 }, // Violet-300
  { r: 165, g: 180, b: 252 }, // Indigo-300
  { r: 103, g: 232, b: 249 }, // Cyan-300
  { r: 94,  g: 234, b: 212 }, // Teal-300
];

// Palette for LIGHT MODE (Deep/Strong for Multiply Blend)
const PALETTE_LIGHT = [
  { r: 29,  g: 78,  b: 216 }, // Blue-700
  { r: 109, g: 40,  b: 217 }, // Violet-700
  { r: 67,  g: 56,  b: 202 }, // Indigo-700
  { r: 14,  g: 116, b: 144 }, // Cyan-700
  { r: 15,  g: 118, b: 110 }, // Teal-700
];

class Particle {
  constructor() {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    // Scale properties based on size
    const minDim = Math.min(width, height);

    // Speed relative to size
    const speedBase = minDim * 0.002;
    const speed = speedBase + Math.random() * speedBase;
    const angle = Math.random() * Math.PI * 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;

    // Radius relative to size
    this.radius = (minDim * 0.2) + Math.random() * (minDim * 0.3);

    this.assignColor();

    // Base Opacity
    this.alpha = 0.15 + Math.random() * 0.2;
  }

  assignColor() {
     const palette = isDark.value ? PALETTE_DARK : PALETTE_LIGHT;
     this.color = palette[Math.floor(Math.random() * palette.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around screen
    if (this.x < -this.radius) this.x = width + this.radius;
    if (this.x > width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = height + this.radius;
    if (this.y > height + this.radius) this.y = -this.radius;
  }

  draw() {
    if (isNaN(this.x) || isNaN(this.y)) return;

    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    );

    // Adjust opacity: Light mode needs MORE opacity to be seen against white
    // Dark mode uses lighter alpha for subtler glow
    const drawAlpha = isDark.value ? this.alpha : Math.min(this.alpha * 1.5, 0.6);

    gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${drawAlpha})`);
    gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const initParticles = () => {
    particles = [];
    if (width <= 0 || height <= 0) return;

    // Responsive count: 1 particle per 25000px² (approx 150x150)
    // Clamp between 5 and 20
    const area = width * height;
    let count = Math.floor(area / 25000);
    count = Math.max(5, Math.min(count, 20));

    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
};

const animate = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Switch Blending Mode based on Theme
    // Dark: Screen (Additive Glow)
    // Light: Multiply (Ink effect on white)
    ctx.globalCompositeOperation = isDark.value ? 'screen' : 'multiply';

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    ctx.globalCompositeOperation = 'source-over';

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

        // Re-init particles on resize to adjust scale/count
        if (width > 0) initParticles();
    }
};

// Check Theme on Mount and changes
const updateTheme = () => {
    isDark.value = document.documentElement.classList.contains('dark');
    // Refresh particle colors immediately
    particles.forEach(p => p.assignColor());
};

onMounted(() => {
    if (!container.value || !canvas.value) return;
    ctx = canvas.value.getContext('2d');

    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container.value);

    // Observer for Dark Mode class changes
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
