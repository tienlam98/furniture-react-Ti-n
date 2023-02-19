import React from 'react'
import styles from './card.module.css'
import Background from '../../assets/card1.jpg';
function Card({name, job, quote}) {
  return (
    <div className={styles.card}>
        <div className={styles.cardBig} style={{backgroundImage: Background}}>
            <div className={styles.cardSmall}>
                <img src='./images/person1.jpg'></img>
                <p>{name}</p>
                <p>{job}</p>
                <p>{quote}</p>
            </div>
        </div>
    </div>
  )
}

export default Card