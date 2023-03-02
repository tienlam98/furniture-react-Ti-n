import React from 'react'
import Search from '../search/Search'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <span className={styles.headerTitle}>Panto</span>
        <div className={styles.navbarMenu}>
          <div className={styles.headerMenu}>
            <span className={styles.headerBtn}>Furniture</span>
            <img src='./images/downArrow.svg' className={styles.headerIcon}></img>
            <ul className={styles.headerDropdown}>
              <li>Chair</li>
              <li>Bed</li>
              <li>Sofa</li>
              <li>Lamp</li>
            </ul>
          </div>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </div>
        
        <ShoppingCart/>
      </nav>
    </header>
  );
}

export default Header