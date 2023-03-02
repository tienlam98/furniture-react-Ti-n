import React, { useEffect, useState } from 'react'
import CardCarousel from '../../components/cardCarousel/CardCarousel'
import Card from '../../components/cards/Card'
import Carousel from '../../components/cards/Carousel'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import ProductList from '../../components/productList/ProductList'
import Search from '../../components/search/Search'
import Teaser from '../../components/teaser/Teaser'
import WhyChooseUs from '../../components/whychooseus/WhyChooseUs'
import styles from './homepage.module.css'


function HomePage() {
  const [tempDataProduct, setTempDataProduct] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    fetch("https://fe21-db.vercel.app/furniture")
      .then(res => res.json())
      .then(data => {
        setTempDataProduct(data);
        setDataProduct(data);
      })
  },[]);
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
        <CardCarousel setTempDataProduct={setTempDataProduct} dataProduct={dataProduct} tempDataProduct={tempDataProduct}/>
        <Teaser textTitle={'experiences'} textTitle2={'we provide you the best experience'} textDes={'You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials'}/>
        <Teaser textTitle={'Materials'} textTitle2={'Very serious materials for making furniture'} textDes={'Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price'}/>
        <div className={styles.testimonialCardContainer}>
        <Card src={'./images/testi1.jpg'} source={'./images/person1.jpg'} name={'Bang Upin'} job={'Pedagang Asongan'} quote={'“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'}/>
        <Card src={'./images/testi2.jpg'} source={'./images/person2.jpg'} name={'Ibuk Sukijan'} job={'Ibu Rumah Tangga'} quote={'“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“'}/>
        <Card src={'./images/testi3.jpg'} source={'./images/person3.jpg'} name={'Mpok Ina'} job={'Karyawan Swasta'} quote={'“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“'}/>

        </div>
      </div>
    </Layout>
  )
}

export default HomePage