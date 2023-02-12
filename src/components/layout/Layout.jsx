import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './layout.module.css';


function Layout({children}) {
  return (
    <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout