import React from 'react'
import styles from './footer.module.css'
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
      <div className={styles.footerPanto}>
        <p>Panto</p>
        <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
      </div>
      <div className={styles.footerService}>
        <p>Services</p>
        <p>Email Marketing</p>
        <p>Campaigns</p>
        <p>Branding</p>
      </div>
      <div className={styles.footerFurniture}>
        <p>Furniture</p>
        <p>Beds</p>
        <p>Chair</p>
        <p>All</p>
      </div>
      <div className={styles.footerFollow}>
        <p>Follow Us</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      </div>
      <div className={styles.footerDown}>
        <p>Copyright</p>
        <div className={styles.footerDown2}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>

        </div>

      </div>


    </div>
  )
}
