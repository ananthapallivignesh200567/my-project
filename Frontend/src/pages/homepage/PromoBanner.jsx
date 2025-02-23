import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className="ri-truck-line"></i></span>
            <h4>free delivery</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe, dolores pariatur aperiam</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-money-dollar-circle-fill"></i></span>
            <h4>100% money back guarentee</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe, dolores pariatur aperiam</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-user-voice-fill"></i></span>
            <h4>Strong support</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe, dolores pariatur aperiam</p>
        </div>
    </section>
  )
}

export default PromoBanner