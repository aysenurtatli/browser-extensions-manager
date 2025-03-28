import React from 'react'
import StatusButton from './components/StatusButton'
import { useState } from 'react';

const Header = ({setFilter}) => {
    const [activeButton, setActiveButton] = useState('All'); // Başlangıçta "All" aktif

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      if (buttonName === 'All') {
        setFilter(null);
      } else if (buttonName === 'Active') {
        setFilter(true);
      } else {
        setFilter(false);
      }
    };
  return (
    <header className='flex md:flex-row flex-col gap-[24px] md:justify-between items-center mt-[64px] md:mb-[32px] mb-[40px]'>
        <h2 className='text-neutral-900 dark:text-white text-[34px] font-bold'>Extensions List</h2>
        <div className='flex gap-[12px]'>
        <StatusButton
          name="All"
          onClick={() => handleButtonClick('All')}
          isActive={activeButton === 'All'}
        />
        <StatusButton
          name="Active"
          onClick={() => handleButtonClick('Active')}
          isActive={activeButton === 'Active'}
        />
        <StatusButton
          name="Inactive"
          onClick={() => handleButtonClick('Inactive')}
          isActive={activeButton === 'Inactive'}
        />
        </div>
    </header>
  )
}

export default Header