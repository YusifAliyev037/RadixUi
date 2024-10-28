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
  </div>
 </>
  )
}

export default shop