import Header from '@/components/Header'
import MetaSeo from '@/utils/MetaSeo'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function contatct() {
  return (
    <>
    <Head>
    <title>Home</title>
    <MetaSeo title="CeramicShop" desc="Welcome to contact page!"/>
  </Head>
  <div>
    <Header/>
  </div>
  <div className="bg-mainColor flex justify-between px-32 py-20">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-white text-7xl font-times mt-32">
              Contact Us
            </h1>
            </div>
          <div className="text-white font-times text-xl mr-32">Welcome to the world of CeramicShop, where artistry and innovation come together to craft stunning ceramic pieces. Discover our story, the passion that drives us, and our commitment to delivering timeless beauty and quality.</div>
          
        </div>
        <div>
          <Image alt="main" src='/vase.jpg' width={600} height={600}/>
        </div>
      </div>
 </>
  )
}

export default contatct