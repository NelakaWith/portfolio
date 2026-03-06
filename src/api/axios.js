import axios from "axios";

// Get API base URL - uses hardcoded values since this is a plain JS file
// For static generation, the URL is determined at build time
const getBaseURL = () => {
  // Check if we're in development
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return "http://localhost:3001/api";
  }

  // Production: use hq.nelaka.xyz for API (where nginx proxy is configured)
  return "https://hq.nelaka.xyz/api";
};

const apiClient = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable CORS credentials
});

export default apiClient;
