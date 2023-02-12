import React from 'react';
import styles from './productlist.module.css';

function ProductListMenu({categoryList, category, setCategory}) {

  const onClickWrapper = (category) => {
    return () => setCategory(category)
  }

  return (
    <div>
      {categoryList.map(cat => (
        <button className={cat === category ? styles.selected : ''} onClick={onClickWrapper(cat)}>{cat}</button>
      ))}
    </div>
  )
}

export default ProductListMenu