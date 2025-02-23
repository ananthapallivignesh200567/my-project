import React from 'react'
import instaImg1 from '../assets/instagram-1.jpg'
import instaImg2 from '../assets/instagram-2.jpg'
import instaImg3 from '../assets/instagram-3.jpg'
import instaImg4 from '../assets/instagram-4.jpg'
import instaImg5 from '../assets/instagram-5.jpg'
import instaImg6 from '../assets/instagram-6.jpg'
const Footer = () => {
  return (
    <>
    <footer className="section__container footer__container">
        <div className="footer__col">
            <h4>contact INFO</h4>
            <p>
            <span><i className="ri-map-pin-2-fill"/></span>
            1234, Anytown, USA
            </p>
            <p>
                <span><i className="ri-mail-fill"/></span>
                support@gmail.com
            </p>
            <p>
                <span><i className="ri-phone-fill"/></span>
                123-456-7890
            </p>
        </div>
        <div className='footer__col'>
            <h4>COMPANY</h4>
            <a href='/'>HOME</a>
            <a href='/'>About us</a>
            <a href='/'>Work with us</a>
            <a href='/'>Our Blogs</a>
            <a href='/'>terms and conditions</a>
        </div>
        <div className='footer__col'>
            <h4>USEFUL LINKS</h4>
            <a href='/'>Help</a>
            <a href='/'>Track your order</a>
            <a href='/'>Men</a>
            <a href='/'>Women</a>
            <a href='/'>Dresses</a>
        </div>
        <div className='footer__col'>
            <h4>INSTAGRAM</h4>
            <div className='instagram__grid'>
                <img src={instaImg1}></img>
                <img src={instaImg2}></img>
                <img src={instaImg3}></img>
                <img src={instaImg4}></img>
                <img src={instaImg5}></img>
                <img src={instaImg6}></img>
            </div>
        </div>
    </footer>
    <div className='footer__bar'>
        <p>&copy; 2025 All rights reserved</p>
    </div>
    </>
  )
}

export default Footer