import React from 'react'
import { Link,useParams} from 'react-router-dom'
import RatingsStars from '../../../components/RatingsStars';
const SingleProduct = () => {
    const {id}=useParams();
    console.log(id)
  return (
    <>
      <section className='section__conatiner  bg-red-200'>
        <h2 className='section__header capitalize'>Single Product page</h2>
        <div className='section__subheader'>
            <span className='hover:text-red-500'><Link to='/'>home</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-red-500'><Link to='/shop'>shop</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-red-500'>product name</span>
        </div>
      </section>
      <section className='section__container mt-8'>
        <div className='flex flex-col items-center md:flex-row gap-8'>
            {/*product image*/}
            <div className='md:w-1/2 w-full'>
                <img src="https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-md w-full h-auto'/>
            </div>
            <div className='md:w-1/2 w-full'>
                  <h3 className='text-2xl font-semibold mb-4'>Product Name</h3>
                  <p className='text-xl text-red-500 mb-4'>$100 <s>$130</s></p>
                  <p className='text-gray-700 mb-4'>this is product description</p>
                  {/*additional products info*/}
                  <div>
                    <p><strong>Category:</strong>accessories</p>
                    <p><strong>Color:</strong>beige</p>
                    <div className='flex gap-1 items-center'>
                      <strong>Rating:</strong><RatingsStars rating={"4"}/>
                    </div>
                  </div>
                  <button className='btn mt-6 px-6 py-3 bg-red-500 text-white rounded'>add to cart</button>
            </div>
        </div>
      </section>
      {/*display reviews*/}
      {/*To do work with review when we have api*/}
      <section className='section__container mt-8'>
        Reviews Here
      </section>
    </>
  )
}
export default SingleProduct