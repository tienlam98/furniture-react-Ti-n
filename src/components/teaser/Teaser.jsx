import React from 'react'
import styles from './teaser.module.css'

function Teaser({textTitle, textTitle2, textDes}) {
  return (
    <div className={styles.teaser}>
      <img className={styles.teaserImg} src='./images/teaser1.jpg'></img>
      <div className={styles.teaserContent}>
        <h4 className={styles.teaserTitle}>{textTitle}</h4>
        <p className={styles.teaserTitle2}>{textTitle2}</p>
        <p className={styles.teaserDescribe}>{textDes}</p>
        <a className={styles.teaserLink} href='#'>More info<img src='./images/arrow.svg'></img></a>
      </div>

    </div>
  )
}

export default Teaser