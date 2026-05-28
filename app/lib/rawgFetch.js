const baseURL = "https://api.rawg.io/api";

export const FetchRawgData = async (endpoint, options = {}) => {
  const apiKey = process.env.RAWG_API_KEY;

  const query = new URLSearchParams({
    key: apiKey,
    ...options.params,
  }).toString();
  const url = `${baseURL}/${endpoint}?${query}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error(`HTTP error. Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Fetch error for ${endpoint}:`, error);
    return null;
  }
};
