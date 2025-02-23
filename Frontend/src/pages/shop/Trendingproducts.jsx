import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from "../../data/products.json"
const Trendingproducts = () => {
    const [visibleProducts,setVisibleProducts]=useState(8);
    const loadMoreProducts=()=>{
        setVisibleProducts((prevValue)=>prevValue+4);
    }
  return (
    <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader !mb-10'>
                dolor assumenda fuga praesentium earum eveniet aliquam!
            </p>
            {/*product cards*/}
            <ProductCards products={products.slice(0,visibleProducts)} />
            {/*load more button*/}
            <center>
            <div className='product_btn'>
                {
                    visibleProducts < products.length && 
                    (<button className='btn' onClick={loadMoreProducts}>load more</button>)
                }
            </div>
            </center>
    </section>
  )
}

export default Trendingproducts