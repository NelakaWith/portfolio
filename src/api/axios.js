import axios from "axios";

// Get API base URL from runtime config or environment
// For Nuxt 3, runtime config is accessed via useRuntimeConfig() in components
// For plain JS files, we need to use the environment variable directly
const getBaseURL = () => {
  // In production build, the env var is baked in at build time
  if (import.meta.env.NUXT_PUBLIC_API_BASE_URL) {
    return import.meta.env.NUXT_PUBLIC_API_BASE_URL;
  }

  // Fallback for development
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return "http://localhost:3001/api";
  }

  // Default to relative path for same-origin requests
  return "/api";
};

const apiClient = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
