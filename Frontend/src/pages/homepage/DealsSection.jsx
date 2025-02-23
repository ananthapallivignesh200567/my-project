import React from 'react'
import dealsImg from '../../assets/deals.png';
const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div>
            <img src={dealsImg}/>
        </div>
        <div className='deals__content'>
            <h5>get upto 20% Discount</h5>
            <h4>deals of this month</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto ipsam corrupti dolorem! Vitae deserunt laudantium cumque aspernatur enim minima labore ipsa facilis ut, saepe, consequuntur maxime assumenda vel nesciunt.</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>20</h4>
                <p>Hours</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>15</h4>
                <p>Mins</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>5</h4>
                <p>Secs</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection