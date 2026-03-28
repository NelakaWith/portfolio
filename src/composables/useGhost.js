export const useGhost = () => {
  const config = useRuntimeConfig();
  const { ghostApiKey, ghostApiUrl } = config.public;

  const fetchPosts = async (limit = 15) => {
    const url = `${ghostApiUrl}/ghost/api/content/posts/?key=${ghostApiKey}&limit=${limit}&include=tags,authors`;

    try {
      const data = await $fetch(url);
      return data?.posts || [];
    } catch (e) {
      console.error("Ghost Fetch Exception:", e);
      return [];
    }
  };

  return {
    fetchPosts,
  };
};
