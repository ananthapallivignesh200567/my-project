import React from 'react'
import Banner from './Banner.jsx';
import { Link } from 'react-router-dom';
import Categories from './Categories.jsx';
import Herosection from './Herosection.jsx' 
import Trendingproducts from '../shop/Trendingproducts.jsx';
import DealsSection from './DealsSection.jsx';
import PromoBanner from './PromoBanner.jsx';
import Blogs from '../blogs/Blogs.jsx';



const Home = () => {
  return (
    <div className='mx-w-screensize'>
        <Banner/>
        <Categories/>
        <Herosection/>
        <Trendingproducts/>
        <DealsSection/>
        <PromoBanner/>
        <Blogs/>
    </div>
  )
}

export default Home