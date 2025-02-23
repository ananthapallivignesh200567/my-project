import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards';
const CategoryPage = () => {
  
    const {categoryName}=useParams();
    console.log(categoryName);
    const [filteredProducts,setFilteredProducts]=useState([])
    useEffect(()=>{
      const filtered=products.filter((product)=>product.category===categoryName.toLowerCase())
      setFilteredProducts(filtered);
    },[categoryName])
    useEffect(()=>{
      window.scroll(0,0)
    })
  return (
    <>
      <section className='section__conatiner  bg-red-200'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab magni quis iste sequi quas. Earum non cupiditate labore eos fa</p>
      </section>
      {/*product card*/}
      <div className='section__container'>
        <ProductCards products={filteredProducts}/>
      </div>
    </>
  )
}

export default CategoryPage