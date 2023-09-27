import { useQuery } from 'react-query';
import newsService from '../services/news.service';
import { INews } from './../interfaces/news.interface';

const sortNews = (news: INews[]): INews[] => {return news.sort((a, b) => b.time - a.time)}

export const useNews = () => {

        const { data: newsIds, isLoading: isLoadingNews } = useQuery<number[]>("newsIds",
          () => newsService.getAll()
        );
        const { data: newsInfo, isLoading: isLoadingInfo } = useQuery<INews[]>(
          ["newsInfo", newsIds], () => {
            if (!newsIds) {
                return []
            } 
            return Promise.all(newsIds.map((id) => newsService.getById(id)))
          },
          {
            enabled: !isLoadingNews,
          }
        );
        return {
          data: sortNews(newsInfo || []),
          isLoading: isLoadingNews || isLoadingInfo,
        };
}

