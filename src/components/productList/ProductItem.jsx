import React from 'react'

function ProductItem({product}) {
  return (
    <div className='product-item-container'>
        <img src={product.img}></img>
        {product.name}
        {product.star}
        {product.category}
        {product.price} 
    </div>
  )
}

export default ProductItem