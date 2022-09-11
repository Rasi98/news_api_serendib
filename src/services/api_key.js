const API_KEY = process.env.REACT_APP_NEWS_API;

//api key (page size=12 & country=US & sortby=published date)
export const ARTICLES_API = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&pageSize=12&country=us&sortBy=publishedAt`;
