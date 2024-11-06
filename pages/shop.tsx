import Cards from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MetaSeo from '@/utils/MetaSeo'
import Head from 'next/head'
import React from 'react'

function shop() {
  return (
    <>
    <Head>
    <title>Shop</title>
    <MetaSeo title="CeramicShop" desc="Welcome to Shop page!"/>
  </Head>
  <div>
    <Header/>
    <div className='mt-20 md:mx-32 mx-4'>
      <h1 className='font-times text-mainColor text-4xl mb-10'>Shop</h1>
      <hr className='mb-20'/>
      <Cards/>
    </div>
  </div>
  <div className='mt-20'>
    <Footer/>
  </div>
 </>
  )
}

export default shop