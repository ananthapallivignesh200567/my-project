import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModel from '../pages/shop/CartModel';
const Navbar = () => {
    const products=useSelector((state)=>state.cart.products);
    const [isCartOpen,setIsCartOpen]=useState(false);
    const handleCartToggle=()=>{
        setIsCartOpen(!isCartOpen)
    }
    //show user is logged in
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    

  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='nav__links'>
                <li className='link'><Link to="/">home</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                <li className='link'><Link to="/">pages</Link></li>
                <li className='link'><Link to="/contact">contact</Link></li>
            </ul>
            {/*logo*/}
            <div className='nav__logo'>
                <Link to="/">Sample<span>.</span></Link>
            </div>
            {/*nav icons */}
            <div className='nav__icons relative'>
                
                <span>
                    <Link to='/search'>
                        <i className="ri-search-2-line"></i>
                    </Link>
                </span>
                <span>
                    <button onClick={handleCartToggle} className='hover:text-green-800'>
                        <i className="ri-shopping-bag-line"></i>
                        <sup className='text-sm inline-block text-white rounded-full bg-purple-950 text-center w-5 g-4'>{products.length}</sup>
                    </button>
                    
                </span>
                
                <span>
                    {
                        user && user ?(<>
                            <img src={}/>
                        </>):(<Link to="login">
                        <i className="ri-user-line"></i>
                        </Link>)
                    }
                    
                </span>
            </div>
        </nav>

        {
            isCartOpen && <CartModel products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
        }
    </header>
  )
}

export default Navbar;