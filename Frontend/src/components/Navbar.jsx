import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartModel from '../pages/shop/CartModel';
import avatarImg from "../assets/avatar.png"
import { useLogoutUserMutation } from '../Redux/features/auth/authapi';
import { logout } from '../Redux/features/auth/authSlice';
const Navbar = () => {
    const products=useSelector((state)=>state.cart.products);
    const [isCartOpen,setIsCartOpen]=useState(false);
    const handleCartToggle=()=>{
        setIsCartOpen(!isCartOpen)
    }
    //show user is logged in
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    const [logoutUser]=useLogoutUserMutation()
    const navigate=useNavigate()
    
    //dropdowns menu
    const [isDropDownOpen,setIsDropDownOpen]=useState(false)
    const handleDropDownToggle=()=>{
        setIsDropDownOpen(!isDropDownOpen)
    }

    //admin dropdown menus
    const adminDropDownMenus=[
        {label:"dashboard",path:"/dashboard/admin"},
        {label:"manage Items",path:"/dashboard/manage-products"},
        {label:"All Orders",path:"/dashboard/manage-orders"},
        {label:"Add New Post",path:"/dashboard/add-new-post"},
    ]

    //user dropdown menu
    const userDropDownMenus=[
        {label:"dashboard",path:"/dashboard"},
        {label:"profile",path:"/dashboard/profile"},
        {label:"Payments",path:"/dashboard/payments"},
        {label:"Orders",path:"/dashboard/orders"},
    ]
    const dropDownMenus=user?.role==='admin'?[...adminDropDownMenus]:[...userDropDownMenus]

    const handleLogout=async()=>{
        try {
            await logoutUser().unwrap()
            dispatch(logout())
            navigate("/")
        } catch (error) {
            console.error("failed to logout",error)
        }

    }


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
                            <img onClick={handleDropDownToggle} src={user?.profileImage || avatarImg} className='size-6 rounded-full cursor-pointer'/>{
                                isDropDownOpen && (
                                    <div className='!absolute !right-0 !mt-3 !p-4 !w-48 bg-white border !border-gray-200 !rounded-lg !shadow-lg !z-50'>
                                        <ul className='font-medium !space-y-4 !p-2'>
                                            {dropDownMenus.map((menu,index)=>(
                                                <li key={index}>
                                                    <Link className='dropdown-items' onClick={()=>setIsDropDownOpen(false)} to={menu.path}>{menu.label}</Link>
                                                </li>
                                            ))}
                                            <li><Link onClick={handleLogout} className='dropdown-items'>Logout</Link></li>
                                        </ul>
                                    </div>
                                )
                            }
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