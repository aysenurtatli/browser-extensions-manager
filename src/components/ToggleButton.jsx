import React from 'react'

const ToggleButton = ({isActive, onToggle}) => {
  return (
    <>
    <label className='inline-flex items-center cursor-pointer'>
      <input type="checkbox" checked={isActive} onChange={onToggle} value="" className='sr-only peer'/>
      <div className="relative w-11 h-6 bg-neutral-300 peer-focus:outline-none rounded-full peer dark:bg-neutral-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-700 dark:peer-checked:bg-red-700"></div>
    </label>
    </>
  )
}

export default ToggleButton