import React, {useState, useEffect} from 'react'
import styles from './productlist.module.css'
function ProductItem({product}) {
  const [star,setStar] = useState([])
  useEffect(() => {
    fetch('https://fe21-db.vercel.app/furniture')
    .then((response) => response.json())
    .then((data) => setStar(data));;
  }, [])
  return (
    <div className="product-item">
      <div>
      <img src={product.img}></img>
      </div>
      <p>{product.name}</p>
      <h4>
      {star.slice(0,product.star).map((val,ind)=>{
          return<>
            <img src='./images/star.svg'/>
          </>
      })}
      </h4>
      <p>
      {product.category}
      </p>
      <span>
      {product.price}
      </span>
      <button>+</button>
      </div>
  )
}

export default ProductItem