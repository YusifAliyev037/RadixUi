import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MetaSeo from '@/utils/MetaSeo'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function about() {
  return (
    <>
    <Head>
      <title>About</title>
      <MetaSeo title="CeramicShop" desc="Welcome to about page!"/>
    </Head>
    <div>
      <Header/>
      <div className="bg-mainColor flex md:flex-row flex-col justify-between md:px-32 md:py-20 px-4  py-5">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-white text-7xl font-times md:mt-32 md:text-left text-center">
              About Us
            </h1>
            </div>
          <div className="text-white font-times text-xl md:mr-32 md:text-left text-center md:mb-0 mb-5">Welcome to the world of CeramicShop, where artistry and innovation come together to craft stunning ceramic pieces. Discover our story, the passion that drives us, and our commitment to delivering timeless beauty and quality.</div>
          
        </div>
        <div>
          <Image alt="main" src='/about.jpg' width={600} height={600}/>
        </div>
      </div>
      <div className='md:flex gap-20  md:mx-32 md:mt-20 mt-5 '>
        <div className=''>
          <p className='md:text-left text-center'>Our Story</p>
          <h1 className='text-mainColor font-times text-5xl md:w-[500px] mt-2 md:text-left text-center'>Explore CeramicShop and Our Ceramic Artistry</h1>
        </div>
        <div className='w-30%'>
          <p className='md:text-left text-center md:px-0 px-4 md:mt-0 mt-5'>Step into the world of CeramicShop, where we’re dedicated to crafting elegant, functional ceramics that elevate your everyday life. Our journey is a testament to the artistry and craftsmanship that infuse each unique piece. Discover our story, meet the talented artisans who bring these creations to life, and experience the exceptional beauty that our ceramics add to your surroundings. Explore the heart and soul of our store, where every piece is a work of art, designed to make your moments more beautiful and special.​</p>
        </div>
      </div>
      <Image alt='story' src='/ourstory.jpg' width={1000} height={1000} className='w-100% h-100% mt-20 md:ml-64 md:px-0 px-4 mb-20'/>
      <div>
        <Footer/>
      </div>
    </div>

   </>
  )
}

export default about