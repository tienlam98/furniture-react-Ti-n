import React from 'react'
import styles from './whychooseus.module.css'
import {reasons} from './reason.js'

function WhyChooseUs() {
  return (
    <div className={styles.whychooseus}>
      <h1>Why <br />Choosing Us</h1>
      {reasons.map((reason) => (
        <div className={styles.whychooseusreason} key={reason.title}>
          <h2>{reason.title}</h2>
          <p>{reason.description}</p>
          <a href={reason.link}>More info <img src='./images/arrow.svg'></img></a>
        </div>
      ))}
    </div>
  )
}

export default WhyChooseUs;
