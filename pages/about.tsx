import Header from '@/components/Header'
import MetaSeo from '@/utils/MetaSeo'
import Head from 'next/head'
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
    </div>
   </>
  )
}

export default about