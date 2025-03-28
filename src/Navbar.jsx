import React from 'react'
import { useState } from 'react'
import logo from './assets/images/logo.svg'
import logoDark from './assets/images/logo-dark.svg'
import moon from './assets/images/icon-moon.svg'
import sun from './assets/images/icon-sun.svg'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <nav className='bg-white dark:bg-[#202535] flex justify-between items-center shadow-md dark:shadow-none shadow-[#D6E2F5] rounded-2xl border dark:border-none border-[#D6E2F5] px-[16px] py-[12px]'>
            <img src={isDarkMode ? logoDark : logo} alt="logo" className='w-[179px]'/>
            <button className='bg-[#EEEEEE] dark:bg-[#2F364B] w-[50px] h-[50px] flex items-center justify-center rounded-xl cursor-pointer' onClick={toggleDarkMode}><img src={isDarkMode ? sun : moon} /></button>
    </nav>
  )
}

export default Navbar