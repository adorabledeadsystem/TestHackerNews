
import News from './components/News'
import Header from './components/Header'
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <Header />
        <News />
      </div>
    </div>
  )
}
