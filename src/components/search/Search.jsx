import React from 'react'
import styles from './search.module.css'
function Search() {
  return (
    <div className={styles.search}>
        <input className={styles.searchInput} placeholder='Search furniture'></input>
        <button className={styles.searchButton}>
        <img src='/images/search-icon.svg'></img>
        </button>
    </div>
  )
}

export default Search