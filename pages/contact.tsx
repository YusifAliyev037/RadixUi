import Header from '@/components/Header'
import MetaSeo from '@/utils/MetaSeo'
import Head from 'next/head'
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
 </>
  )
}

export default contatct