import axios from "axios";

// Get API base URL from environment variable
// Dev: Uses NUXT_PUBLIC_API_BASE_URL from .env
// Prod: Uses NUXT_PUBLIC_API_BASE_URL from GitHub workflow
const getBaseURL = () => {
  // Check if env var is set
  if (import.meta.env.NUXT_PUBLIC_API_BASE_URL) {
    return import.meta.env.NUXT_PUBLIC_API_BASE_URL;
  }

  // Fallback for localhost during development
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return "http://localhost:3001/api";
  }

  // This shouldn't happen if env is properly configured
  console.error("API_BASE_URL not configured!");
  return "/api";
};

const apiClient = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable CORS credentials
});

export default apiClient;
