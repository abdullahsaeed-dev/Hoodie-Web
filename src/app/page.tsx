import Image from 'next/image'
import React from 'react'
import HeroSection from './components/HeroSection'
import CollectionSection from './components/CollectionSection'
import ProductSection from './components/ProductSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='orbitron bg-[#FFFFFF]'>
       
<HeroSection/>
<CollectionSection/>
<ProductSection/>
<NewsletterSection/>
<Footer/>
    </div>
  )
}

export default page
