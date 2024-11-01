import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { SlBasket } from 'react-icons/sl';
import { Cart } from './Cart';

function Header() {
  const { push, asPath } = useRouter();
  const [navHidden, setNavHidden] = useState(true);
  const [cartHidden, setCartHidden] = useState(true);

  const handleNav = () => setNavHidden(false);
  const toggleCart = () => setCartHidden((prev) => !prev);

  const isActive = (path: string) => asPath === path;

  return (
    <div className='px-36 py-9 bg-mainColor'>
      <div className='flex justify-between items-center'>
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

        <SlBasket color='white' className='cursor-pointer w-6 h-6' onClick={toggleCart} />

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
