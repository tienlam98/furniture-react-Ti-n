import React, { useState } from 'react'
import styles from './productlist.module.css'
import {products} from './product'
import ProductItem from './ProductItem'
import ProductListMenu from './ProductListMenu'

function ProductList() {
  const categoryList = Array.from(new Set(products.map(prd => prd.category)));
  console.log(categoryList);

  const [category, setCategory] = useState(categoryList[0]);

  const currentProducts = products.filter(prd => prd.category === category);

  return (
    <div className={styles.productlist}>
        <h2 className={styles.productlistTitle}>Best Selling Product</h2>
        <ProductListMenu categoryList={categoryList} category={category} setCategory={setCategory}/>
        <div className={styles.productList__list}>
        {currentProducts.map((product) => 
          <ProductItem key={product.id} product={product}/>
          )}
        </div>
        <a href='#'>View All <img src='./images/arrow.svg'></img></a>
    </div>
  )
}

export default ProductList