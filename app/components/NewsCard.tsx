import React from "react";
import Link from "next/link";

import { INews } from "../interfaces/news.interface";

import styles from '../styles/news.module.scss'

export default function NewsCard({ title, by, score, id, time }: INews){

  var date = new Date(time * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return (
    <Link href={`./${id}`}>
      <div className={styles.newsItem}>
          <p className={styles.itemTitle}>Название: {title}</p>
          <p className={styles.itemAuthor}>Автор: {by}</p>
          <p className={styles.itemRating}>Рейтинг: {score}</p>
          <p className={styles.itemId}>ID: {id}</p>
          <p className={styles.itemTime}>Время публикации: {formattedTime}</p>
      </div>
    </Link>
  );
};
