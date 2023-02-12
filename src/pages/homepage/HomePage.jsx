import React from 'react'
import Layout from '../../components/layout/Layout'
import ProductList from '../../components/productList/ProductList'
import Search from '../../components/search/Search'
import WhyChooseUs from '../../components/whychooseus/WhyChooseUs'
import styles from './homepage.module.css'

function HomePage() {
  return (
    <Layout>
      <div className={styles.homepage}>
        <div className={styles.homepageBanner}>
        <img src='/images/main-banner.png' className={styles.homepageImg}></img>
        <div className={styles.homepageContent}>
          <h1 className={styles.homepageTitle}>Make your interior more minimalistic & modern</h1>
          <h4 className={styles.homepageTitle2}>
            Turn your room with panto into a lot more minimalist <br />and modern with
            ease and speed
          </h4>
          <Search />

        </div>
        </div>
        <WhyChooseUs /> 
        <ProductList />
      </div>
    </Layout>
  )
}

export default HomePage