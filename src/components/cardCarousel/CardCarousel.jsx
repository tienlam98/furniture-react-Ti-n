import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./CardCarousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ProductList from "../productList/ProductList";
import { useDispatch } from "react-redux";
import {addToCart} from "../../redux/action"
export default function CardCarousel({ dataProduct, tempDataProduct,setTempDataProduct }) {
  
  const handleFilterSearch = () => {
    
  }

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  function typeBtn(keyProduct){
    const result = dataProduct.filter((product,index) => {
      return product.categories === keyProduct;
    });
    setTempDataProduct(result);
  }

  function cateProduct(key){
    if(key === 1){
      return 'Chairs';
    } else if(key === 2){
      return 'Beds';
    } else if(key === 3){
      return 'Sofa';
    } else {
      return 'Lamps';
    }
  }
  useEffect(() => {
    typeBtn(1);
  },[])
  return (
    <>
      <div className={style.btnContainer}>
        <button onClick={() => typeBtn(1)} className={style.btn}>Chairs</button>
        <button onClick={() => typeBtn(2)} className={style.btn}>Beds</button>
        <button onClick={() => typeBtn(3)} className={style.btn}>Sofa</button>
        <button onClick={() => typeBtn(4)} className={style.btn}>Lamps</button>
    </div>  
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {tempDataProduct.map((product, index) => {
          return (
            <SwiperSlide>
              <div className="productCard">
                <div className="imgContainer">
                  <img style={{width: '100%'}} src={product.img} alt="productImg" />
                </div>
                <p className="type">{cateProduct(product.categories)}</p>
                <h3>{product.name}</h3>
                <div className="vote">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <span><button onClick={() => handleAddToCart(product)} className={style.plusBtn}>+</button></span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
