import axios from 'axios'
import { ARTICLES_API } from './api_key'

export default async function news() {
    try {
        const res = await axios.get(ARTICLES_API)
        return res.data.articles
    } catch (err) {
        console.log(err)
    }
}