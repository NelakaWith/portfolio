import { ref, nextTick } from "vue";
import FontFaceObserver from "fontfaceobserver";

export function useLoader(fontFamily = "IBM Plex Serif", fontTimeout = 4000) {
  const loading = ref(true);

  async function waitForAllImages() {
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      }),
    );
  }

  function waitForFonts() {
    try {
      const font = new FontFaceObserver(fontFamily);
      return font.load(null, fontTimeout);
    } catch (e) {
      console.warn("Font loading not supported or failed:", e);
      return Promise.resolve();
    }
  }

  async function startLoader() {
    await nextTick();
    await Promise.all([
      waitForFonts().catch((e) => console.error("Font loading failed:", e)),
      waitForAllImages(),
    ]);
    loading.value = false;
  }

  return { loading, startLoader };
}
