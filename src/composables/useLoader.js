import { ref, nextTick } from "vue";
import FontFaceObserver from "fontfaceobserver";

export function useLoader(fontFamily = "Hind", fontTimeout = 4000) {
  const loading = ref(true);

  function areAllImagesLoaded() {
    const images = Array.from(document.images);
    return images.every((img) => img.complete && img.naturalHeight !== 0);
  }

  function waitForFonts() {
    const font = new FontFaceObserver(fontFamily);
    return font.load(null, fontTimeout);
  }

  async function checkResourcesLoaded() {
    try {
      await waitForFonts();
    } catch (error) {
      console.error("Font loading failed:", error);
    }
    if (areAllImagesLoaded()) {
      loading.value = false;
    } else {
      setTimeout(checkResourcesLoaded, 100);
    }
  }

  async function startLoader() {
    await nextTick();
    if (document.readyState === "complete") {
      checkResourcesLoaded();
    } else {
      window.addEventListener("load", checkResourcesLoaded);
    }
    setTimeout(() => {
      loading.value = false;
    }, fontTimeout + 1000);
  }

  return { loading, startLoader };
}
