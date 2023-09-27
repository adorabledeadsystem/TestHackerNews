import axios from 'axios'
import { INews } from '../interfaces/news.interface'

class NewsService{
    private URL = 'https://hacker-news.firebaseio.com/v0'
    
    async getAll() : Promise<number[]> {
        return await axios.get(`${this.URL}/newstories.json`).then((res) => res.data.slice(0, 100))
    }

    async getById(id: number) : Promise<INews> {
        return await axios.get(`${this.URL}/item/${id}.json`).then((res) => res.data )
    }
    


}

export default new NewsService()