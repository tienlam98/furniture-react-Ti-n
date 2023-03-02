import React, { useEffect, useState } from 'react'
import styles from './productlist.module.css'
import {products} from './product'
import ProductItem from './ProductItem'
import ProductListMenu from './ProductListMenu'

function ProductList() {
  const categoryList = Array.from(new Set(products.map(prd => prd.category)));
  console.log(categoryList);

  const [category, setCategory] = useState(categoryList[0]);

  const currentProducts = products.filter(prd => prd.category === category);
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('https://fe21-db.vercel.app/furniture')
    .then((response) => response.json())
    .then((data) => setProduct(data));;
  }, [])
  return (
    <div className={styles.productlist}>
        <h2 className={styles.productlistTitle}>Best Selling Product</h2>
        <div className={styles.productlistMenu}>
        <ProductListMenu categoryList={categoryList} category={category} setCategory={setCategory}/>
        </div>
        <div className="container-list">
        {product.slice(0,4).map((product) =>
        <ProductItem className={styles.productlistItem} product={product} key={product._id} star={product.star}/>
        )}
        </div>

        <a href='#'>View All <img src='./images/arrow.svg'></img></a>
    </div>
  )
}

export default ProductList