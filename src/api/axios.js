import axios from "axios";

// Get API base URL
// Frontend: nelaka.xyz
// Backend API: hq.nelaka.xyz
const getBaseURL = () => {
  // Development: use localhost backend
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return "http://localhost:3001/api";
  }

  // Production: use hq.nelaka.xyz for API (separate domain)
  return "https://hq.nelaka.xyz/api";
};

const apiClient = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable CORS credentials for cross-origin requests
});

export default apiClient;
