<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const canvasRef = ref<HTMLCanvasElement | null>(null);

// Configuration
const PARTICLE_COUNT = 50;

// Dynamic colors
let particleR = 100;
let particleG = 120;
let particleB = 140;

const updateColors = () => {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    // Light Slate Blue/Grey for Dark Mode (Glowing)
    particleR = 100;
    particleG = 120;
    particleB = 140;
  } else {
    // Light Mode: Very Light Grey with Blue Hint
    particleR = 180;
    particleG = 200;
    particleB = 230;
  }
};

class Particle {
  x!: number;
  y!: number;
  vx!: number;
  vy!: number;
  size!: number;
  opacity!: number;
  maxOpacity!: number;
  fadeSpeed!: number;
  fadingIn!: boolean;
  canvasWidth: number;
  canvasHeight: number;

  constructor(w: number, h: number) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * this.canvasWidth;
    this.y = Math.random() * this.canvasHeight;

    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = -(0.2 + Math.random() * 0.5);

    this.size = 2 + Math.random() * 3;

    // Opacity cycle
    this.maxOpacity = 0.4 + Math.random() * 0.4;
    this.opacity = 0;
    this.fadeSpeed = 0.002 + Math.random() * 0.005;
    this.fadingIn = true;
  }

  update(w: number, h: number) {
    this.canvasWidth = w;
    this.canvasHeight = h;

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < -10) this.x = w + 10;
    if (this.x > w + 10) this.x = -10;

    if (this.y < -10) this.y = h + 10;

    if (this.fadingIn) {
      this.opacity += this.fadeSpeed;
      if (this.opacity >= this.maxOpacity) {
        this.opacity = this.maxOpacity;
        this.fadingIn = false;
      }
    } else {
      this.opacity -= this.fadeSpeed;
      if (this.opacity <= 0) {
        this.opacity = 0;
        this.reset();
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particleR}, ${particleG}, ${particleB}, ${this.opacity})`;
    // Only glow in dark mode maybe?
    // Let's check theme again or just assume soft blur looks good on both.
    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgba(${particleR}, ${particleG}, ${particleB}, ${this.opacity})`;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

const particles: Particle[] = [];

const initParticles = (w: number, h: number) => {
  particles.length = 0;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle(w, h));
  }
};

let observer: MutationObserver | null = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Handle Theme Changes
  updateColors();
  observer = new MutationObserver(() => {
    updateColors();
  });
  // Watch for class changes on html element
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  const handleResize = () => {
    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    initParticles(canvas.width, canvas.height);
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  // GSAP Ticker Loop
  const tick = () => {
    if (!ctx || !canvas) return;

    // Clear canvas - transparent to let background show through
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw(ctx);
    });
  };

  gsap.ticker.add(tick);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    gsap.ticker.remove(tick);
    if (observer) observer.disconnect();
  });
});
</script>
