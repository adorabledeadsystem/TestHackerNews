"use client"
import React from 'react'
import styles from "../styles/header.module.scss";
import { useQueryClient } from 'react-query'


const Header = () => {

  const queryClient = useQueryClient()

  return (
    <div className={styles.header}>
        <h1 className={styles.headerTitle}>Hacker News</h1>
        <button onClick={() => queryClient.invalidateQueries(['newsIds'])} className={styles.headerRefresh}>Обновить новости</button>
    </div>
  )
}

export default Header