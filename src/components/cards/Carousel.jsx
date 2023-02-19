import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
import Card from './Card'
function Carousel() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch('https://fe21-db.vercel.app/furniture')
    .then((response) => response.json())
    .then((data) => setCardData(data));;
  },[] );
console.log({cardData});
  return (
    <div className={styles.carousel}>
        <Card className={styles.carouselItem} name={'asb'} job={'123'} quote={'123'}/>
        <Card className={styles.carouselItem} name={'asb'} job={'123'} quote={'123'}/>
        <Card className={styles.carouselItem} name={'asb'} job={'123'} quote={'123'}/>
    </div>
  )
}

export default Carousel