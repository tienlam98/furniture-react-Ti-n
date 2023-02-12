import React from 'react'
import Search from '../search/Search'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
      <span>Panto</span>
      <div className={styles.navbarMenu}>
          <div>
          <select id="selectMenu">
            <option>Furniture</option>
            <option>Chair</option>
            <option>Bed</option>
            <option>Sofa</option>
            <option>Lamp</option>
          </select>
          </div>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Shop</a></li>
      </div>
      <img src='/images/cart-icon.svg'></img>
    </nav>
    </header>
  );
}

export default Header