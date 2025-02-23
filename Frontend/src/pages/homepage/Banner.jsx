import React from 'react'
import { Link } from 'react-router-dom'
import Bannerimage from '../../assets/header.png';
const Banner = () => {
  return (
        <div className='section__container header__container'>
            <div className='header__content z-30'>
                <h4 className='uppercase'>upto 20% discount on</h4>
                <h1>girls fashion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque maiores quas unde obcaecati necessitatibus ducimus inventore cupiditate natus voluptas perspiciatis sunt praesentium ab ratione vitae odio doloremque, veritatis facilis eveniet.</p>
                <button className='btn'>
                    <Link to='/shop'>
                            explore now
                    </Link>            
                </button>
            </div>
        
        <div className='header__image'>
            <img src={Bannerimage} alt="bannerimg"></img>
        </div>
        </div>
  )
}

export default Banner