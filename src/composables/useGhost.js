export const useGhost = () => {
  const config = useRuntimeConfig();
  const { ghostApiKey, ghostApiUrl } = config.public;

  const fetchPosts = async (limit = 15) => {
    const url = `${ghostApiUrl}/ghost/api/content/posts/?key=${ghostApiKey}&limit=${limit}&include=tags,authors`;

    try {
      const { data, error } = await useFetch(url);

      if (error.value) {
        console.error("Ghost API Error:", error.value);
        return [];
      }

      return data.value?.posts || [];
    } catch (e) {
      console.error("Ghost Fetch Exception:", e);
      return [];
    }
  };

  return {
    fetchPosts,
  };
};
