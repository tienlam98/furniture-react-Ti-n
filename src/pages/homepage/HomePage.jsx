import React from 'react'
import Header from '../../components/header/Header'
import Layout from '../../components/layout/Layout'
import Search from '../../components/search/Search'
import styles from './homepage.module.css'
function HomePage() {
  return (
    <Layout>
      <div className={styles.homepage}> 
        <img src='/images/main-banner.png' className={styles.homepageImg}></img>
        <div className={styles.homepageContent}>
          <h1>Make your interior more minimalistic & modern</h1>
          <h4>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </h4>
          <Search />

        </div>

      </div>
    </Layout>
  )
}

export default HomePage