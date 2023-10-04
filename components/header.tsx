'use client'

import {  useCallback, useEffect, useState } from 'react'

import Logo from './logo'
import CartButton from './cart-button'
import UserButton from './user-button'
import SearchButton from './search-button'
import Sidebar from './sidebar'
import ContactUs from './contact-us'

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
     window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div className='w-full fixed top-0 bg-white py-6 px-4 md:px-8 lg:px-16'>
      <div className='flex items-center justify-between'>
        <ContactUs isHidden={scrollY < 20}/>
        <div className='flex items-center justify-end'>
          <CartButton/>
          <UserButton/>
          <SearchButton/>
          <Sidebar/>
        </div>
      </div>
      <Logo logoStyle={`${scrollY > 20 ? "jptfOZ":"hlcJic"} lg:mx-auto`}/>
    </div>
  )
}

export default Header