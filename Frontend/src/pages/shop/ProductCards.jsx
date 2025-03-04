import React from 'react'
import { Link } from 'react-router-dom'
import RatingsStars from '../../components/RatingsStars'
import { useDispatch} from 'react-redux'
import {addToCart} from "../../Redux/features/cart/cartSlice"
const ProductCards = ({products}) => {
    const dispatch=useDispatch();
    const handleAddToCart=(product)=>{
        dispatch(addToCart(product))
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product, index) => (
            <div key={index} className='product__card'>
                    <div className='relative'>
                        <Link to={`/shop/${product.id}`}>
                            <img src={product.image} alt="product image" className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300'/>
                        </Link>
                        <div className='hover:block absolute top-3 right-3'>
                            <button 
                            onClick={(e)=>{
                                e.stopPropagation();
                                handleAddToCart(product)
                            }}
                            >
                            <i className="ri-shopping-cart-2-line btn bg-red-600 p-1.5 text-white hover:bg-red-500"/>
                            </button>
                        </div>
                    </div>
                    {/*product description*/}
                    <div className='product__card__content'>
                        <h4>{product.name}</h4>
                        <p>${product.price} {product?.oldPrice ? <del>${product?.oldPrice}</del>:null}</p>
                        <RatingsStars rating={product.rating}/>
                    </div>
            </div>
        ))}
    </div>
  )
}
export default ProductCards