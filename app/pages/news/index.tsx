import React from "react";
import Link from "next/link";
import axios from "axios";

import { INews } from "../../interfaces/news.interface";
import styles from '../../styles/news.module.scss'

export const getStaticProps = async (): Promise<any> => {
    const result = await axios.get('hhttps://hacker-news.firebaseio.com/v0/newstories.json').then((res:any) => res.data.slice(0,100));
  
    return {
      props: { burgers: result }
    }
  }

export default function NewsCard({ title, by, score, id, time }: INews, {burgers}: any){

  var date = new Date(time * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return (
    <>
    {burgers.map((item:number) => {
        <Link href={`/news/${item}`}>
          <p className={styles.itemTime}>Время публикации: </p>
        </Link>
    })}
    </>
  );
};
