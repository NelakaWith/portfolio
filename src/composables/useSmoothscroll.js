import Lenis from "lenis";
import { onMounted } from "vue";

export const useSmoothScroll = () => {
  onMounted(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness intensity
      wheelMultiplier: 1,
      infinite: false,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  });
};
