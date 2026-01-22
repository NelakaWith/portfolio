<template>
  <div ref="container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <canvas ref="canvas" class="block w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const container = ref(null);
const canvas = ref(null);
let ctx = null;
let animationId = null;
let particles = [];
let width = 0;
let height = 0;
let resizeObserver = null;

// Lighter Palette (Tailwind 300/400 weights) for a brighter glow
const COLORS = [
  { r: 147, g: 197, b: 253 }, // Blue-300
  { r: 167, g: 139, b: 250 }, // Violet-300
  { r: 165, g: 180, b: 252 }, // Indigo-300
  { r: 103, g: 232, b: 249 }, // Cyan-300
  { r: 94,  g: 234, b: 212 }, // Teal-300
];

class Particle {
  constructor() {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    // Varied speed: some slow drifters, some slightly active
    const speed = 0.5 + Math.random() * 0.8;
    const angle = Math.random() * Math.PI * 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;

    // Varied Size: 150px to 400px
    this.radius = 150 + Math.random() * 250;

    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

    // Lower Opacity: 0.15 to 0.35 for subtle "background" feel
    this.alpha = 0.15 + Math.random() * 0.2;
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

    // Soft gradient fade
    gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`);
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

    // 25 Particles for a balanced field
    const count = 25;
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
};

const animate = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Screen blending for premium glow
    ctx.globalCompositeOperation = 'screen';

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

        if (particles.length === 0 && width > 0) initParticles();
    }
};

onMounted(() => {
    if (!container.value || !canvas.value) return;
    ctx = canvas.value.getContext('2d');

    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container.value);

    animate();
});

onBeforeUnmount(() => {
    if (resizeObserver) resizeObserver.disconnect();
    cancelAnimationFrame(animationId);
});
</script>
