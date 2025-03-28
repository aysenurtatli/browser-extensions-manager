import React, { useEffect, useState, useCallback } from 'react'
import RemoveButton from './components/RemoveButton'
import ToggleButton from './components/ToggleButton'

const Extension = ({filter}) => {
    const [extensions, setExtensions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/data.json");
            const data = await response.json();
            setExtensions(data);
        };
        fetchData();
    },[])

    const handleToggle = (index) => {
        setExtensions((prevExtensions) => {
          const updatedExtensions = [...prevExtensions];
          updatedExtensions[index].isActive = !updatedExtensions[index].isActive;
          return updatedExtensions;
        });
      };

      const filteredExtensions = extensions.filter((extension) => {
        if (filter === null) {
          return true; 
        }
        return extension.isActive === filter; 
      });
      
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[12px] pb-[64px]'>
    {filteredExtensions.map((extension, index) => (
      <div className=' bg-white dark:bg-[#202535] border border-neutral-200 dark:border-[#535868] rounded-2xl relative p-[19px] flex flex-col'>
        <div className='flex gap-[16px] mb-[50px]'>
          <img src={extension.logo} className='w-[60px] h-[60px]' />
          <div>
            <h4 className='text-neutral-900 dark:text-white text-[20px] font-bold'>{extension.name}</h4>
            <p className='text-neutral-600 dark:text-[#C6C6C6] text-[16px]'>{extension.description}</p>
          </div>
        </div>
        <div className='mt-auto flex justify-between'>
          <RemoveButton />
          <ToggleButton isActive={extension.isActive} onToggle={() => handleToggle(index)}/>
        </div>
      </div>
    ))}
  </div>
  
  )
}

export default Extension