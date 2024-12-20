import Header from '@/components/Header'
import MetaSeo from '@/utils/MetaSeo'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import * as Form from "@radix-ui/react-form";
import { FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { Button} from '@radix-ui/themes'
import Footer from '@/components/Footer'

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
  <div className="bg-mainColor flex md:flex-row flex-col justify-between md:px-32 md:py-20 px-4 py-5">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-white text-7xl font-times md:mt-32 mt-7 md:text-left text-center">
              Contact Us
            </h1>
            </div>
          <div className="text-white font-times text-xl md:mr-32 md:mb-0 mb-5 md:text-left text-center">Welcome to the world of CeramicShop, where artistry and innovation come together to craft stunning ceramic pieces. Discover our story, the passion that drives us, and our commitment to delivering timeless beauty and quality.</div>
          
        </div>
        <div>
          <Image alt="main" src='/vase.jpg' width={600} height={600}/>
        </div>
      </div>
      <div className='md:mt-20 md:mx-32 mx-4 mt-7 md:flex justify-between '>
        <div className='flex flex-col gap-12 md:mb-0 mb-7'>
          <div>
            <h2 className='font-times text-mainColor text-5xl md:text-left text-center'>Get in touch</h2>
            <p className='md:text-left text-center'>Share some details here.</p>
            <p className='md:text-left text-center'>This is Flexible section where you can share anything you want.</p>
            <p className='md:text-left text-center'>It could be details or some information.</p>
          </div>
          <div>
            <div className='flex gap-2'>
              <FaLocationDot className='w-6 h-6' />
              <p className=' text-mainColor text-2xl'>Address</p>
            </div>
            <p className='ml-8 mb-4'>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <hr className='w-96 text-gray'/>
          </div>
          <div>
            <div className='flex gap-2'>
              <FaPhone className='w-6 h-6' />
              <p className=' text-mainColor text-2xl'>Phone</p>
            </div>
            <p className='ml-8 mb-4'>(+91) 987 654 321</p>
            <hr className='w-96 text-gray'/>
          </div>
          <div>
            <div className='flex gap-2'>
              <IoMdMail className='w-6 h-6' />
              <p className=' text-mainColor text-2xl'>Email</p>
            </div>
            <p className='ml-8 mb-4'>info@contact.com</p>
            <hr className='w-96 text-gray'/>
          </div>
          <div>
            <p className='text-mainColor text-2xl mb-5'>Follow</p>
            <div className='flex gap-4'>
            <FaFacebook className='w-5 h-6'/>
            <FaInstagram className='w-5 h-6'/>
            <FaTwitter className='w-5 h-6'/>
            <FaYoutube className='w-5 h-6'/>
            </div>
          </div>
        </div>
        <div className=' bg-forum md:w-[600px] px-11 py-10'>
        <Form.Root>
            <Form.Field name="name" className='flex flex-col'>
              <Form.Label className='mb-3'>Full name</Form.Label>
              <div className='md:flex justify-center gap-8'>
              <Form.Control asChild>
                <input className="md:w-60 w-full h-12 p-2 md:mb-0 mb-5" type="text" placeholder='Name' required />
              </Form.Control>
              <Form.Control asChild>
                <input className="md:w-60 w-full h-12 p-2" type="text" placeholder='Last Name' required />
              </Form.Control>
              </div>
            </Form.Field>
          </Form.Root>
          <Form.Root>
            <Form.Field name="name" className='flex flex-col'>
              <Form.Label className='mb-3 mt-10'>Email</Form.Label>
              <Form.Control asChild>
				        <input className="w-full h-12 p-2" placeholder='Write your Email' type="email" required />
			        </Form.Control>
            </Form.Field>
          </Form.Root>
          <Form.Root>
            <Form.Field name="name" className='flex flex-col'>
              <Form.Label className='mb-3 mt-10'>Comment or Message</Form.Label>
              <Form.Control asChild>
              <textarea className="h-40" required />
			        </Form.Control>
            </Form.Field>
          </Form.Root>
          <Button variant="outline" style={{ cursor: 'pointer', marginTop:"40px" }}  color="amber" size='4' >
              Submit
            </Button>
        </div>
      </div>
      <div className='mt-20'>
        <Footer/>
      </div>
 </>
  )
}

export default contatct