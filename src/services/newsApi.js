const API_KEY = "c6322f21304940edbab2fe03dda5069f";

export const fetchNews = async (page, perPage) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=cat&page=${page}&pageSize=${perPage}&apiKey=${API_KEY}`
  );

  return response.json();
};
