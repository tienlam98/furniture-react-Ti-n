import React from 'react'
import styles from './card.module.css'
import Background from '../../assets/card1.jpg';
function Card({source, name, job, quote, src }) {
  return (
    <div style={{backgroundImage: `url(${src})`, backgroundRepeat:"no-repeat"}} className={styles.card}>
        <div className={styles.cardBig}>
            <div className={styles.cardSmall}>
                <img src={source}></img>
                <p className={styles.cardName}>{name}</p>
                <p className={styles.cardJob}>{job}</p>
                <p className={styles.cardQuote}>{quote}</p>
            </div>
        </div>
    </div>
  )
}

export default Card