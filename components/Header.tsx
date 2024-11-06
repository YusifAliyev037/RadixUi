import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { SlBasket } from 'react-icons/sl';
import { Cart } from './Cart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function Header() {
  const { push, asPath } = useRouter();
  const [navHidden, setNavHidden] = useState(true);
  const [cartHidden, setCartHidden] = useState(true);

  const handleNav = () => setNavHidden(false);
  const toggleCart = () => setCartHidden((prev) => !prev);

  const isActive = (path: string) => asPath === path;

  const count = useSelector((state: RootState) => state.global.count);

  return (
    <div className='md:px-36 py-9 pl-4 bg-mainColor'>
      <div className='flex md:justify-between md:gap-0 gap-4 items-center'>
        <h1 onClick={() => push("/")} className='cursor-pointer font-times text-white font-medium text-2xl'>CeramicShop</h1>
        <Image
          onClick={handleNav}
          className='block sm:hidden cursor-pointer mt-4 ml-28'
          alt='hamburger'
          src='/hamburger.svg'
          height={35}
          width={35}
        />
        <Navbar onClickClose={() => setNavHidden(true)} hidden={navHidden} />

        <ul className='flex gap-10'>
          <li onClick={() => push("/")} className={`text-white text-xl font-medium cursor-pointer hover:text-black ${isActive('/') ? 'text-black' : 'text-white'} hidden md:block`}>Home</li>
          <li onClick={() => push("/about")} className={`text-white text-xl font-medium cursor-pointer hover:text-black ${isActive('/about') ? 'text-white' : 'text-black'} hidden md:block`}>About</li>
          <li onClick={() => push("/shop")} className={`text-white text-xl font-medium cursor-pointer hover:text-black ${isActive('/shop') ? 'text-maincolor' : 'text-black'} hidden md:block`}>Shop</li>
          <li onClick={() => push("/contact")} className={`text-white text-xl font-medium cursor-pointer hover:text-black ${isActive('/contact') ? 'text-maincolor' : 'text-black'} hidden md:block`}>Contact</li>
        </ul>


        <div className="relative ">
        <SlBasket color='white' className='cursor-pointer w-6 h-6' onClick={toggleCart} />
        {count >= 0 && (
          <span className="absolute bottom-4 left-5 w-5 h-5 rounded-full bg-white text-black text-sm flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
        <Cart
          hidden={cartHidden}
          onClickClose={toggleCart}
          p='Shopping Cart'
        />
      </div>
    </div>
  );
}

export default Header;
