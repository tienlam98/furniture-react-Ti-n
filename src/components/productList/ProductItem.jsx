import React from 'react'
import styles from './productlist.module.css'
function ProductItem({product}) {
  return (
    <div >
      <div className={styles.productItemContainer}>
      <div className={styles.productCell}>
      <div><img src={product.img}></img></div>
      <div >{product.name}</div>
      <div>{product.star}</div>
      <div>{product.category}</div>
      <div>{product.price}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem