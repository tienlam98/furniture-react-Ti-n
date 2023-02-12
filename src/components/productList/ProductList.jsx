import React from 'react'
import styles from './productlist.module.css'
import {products} from './product'
import ProductItem from './ProductItem'

function ProductList() {
  return (
    <div className={styles.productlist}>
        <h2 className={styles.productlistTitle}>Best Selling Product</h2>
        {products.map((product) => 
          <ProductItem key={product.id} product={product}/>
          )}
        <a href='#'>View All <img src='./images/arrow.svg'></img></a>
    </div>
  )
}

export default ProductList