"use client"
import React from 'react'

import  NewsCard  from './NewsCard';

import { useNews } from '../hooks/useNews';
import styles from "../styles/news.module.scss";

export default function News() {
  
  const { data, isLoading } = useNews()

  return (
    
    <div className={styles.news}>
        {
            isLoading ? (<p className={styles.loading}>Идет загрузка...</p>)
            : data ? data.map((news) => {
                return(
                    <NewsCard key={news.id} title={news.title} by={news.by} id={news.id} time={news.time} score={news.score}/>
                )})
            : (<p>Ошибка...Данные не найдены</p>)
        }
        
    </div>
  )
}


