"use client"
import React from 'react'
import { useQueryClient } from 'react-query'

import styles from "../styles/header.module.scss";


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