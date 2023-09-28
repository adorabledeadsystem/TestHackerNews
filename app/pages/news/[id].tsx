import styles from '../../styles/news.module.css';

export const getStaticPaths = async () => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);
  const data = await res.json();

  const paths = data.map((item:any) => {
    return {
      params: { id: item }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  const data = await res.json();

  return {
    props: { dataNews: data }
  }
}

const Details = ({ dataNews }:any) => {
  return (
    <div>
      <p className={styles.itemTitle}>Название: {dataNews.title}</p>
      <p className={styles.itemAuthor}>Автор: {dataNews.by}</p>
      <p className={styles.itemRating}>Рейтинг: {dataNews.score}</p>
      <p className={styles.itemId}>ID: {dataNews.id}</p>
      <p className={styles.itemTime}>Время публикации: {dataNews.formattedTime}</p>
    </div>
  );
}

export default Details;