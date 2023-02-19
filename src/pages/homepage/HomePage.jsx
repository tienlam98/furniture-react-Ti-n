import React from 'react'
import Carousel from '../../components/cards/Carousel'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import ProductList from '../../components/productList/ProductList'
import Search from '../../components/search/Search'
import Teaser from '../../components/teaser/Teaser'
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
        <Teaser textTitle={'experiences'} textTitle2={'we provide you the best experience'} textDes={'You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials'}/>
        <Teaser textTitle={'Materials'} textTitle2={'Very serious materials for making furniture'} textDes={'Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price'}/>
        <Carousel name={'abc'} job={'abcd'} quote={'vvv'}/>
      </div>
    </Layout>
  )
}

export default HomePage