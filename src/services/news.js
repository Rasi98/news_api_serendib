import axios from "axios";
import { ARTICLES_API } from "./api_key";

//Make request to API
export default async function news(page) {
  try {
    const res = await axios.get(`${ARTICLES_API}&page=${page}`);
    return res.data.articles;
  } catch (err) {
    console.log(err);
  }
}
