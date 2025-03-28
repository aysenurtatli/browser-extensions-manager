import React from 'react'

const StatusButton = ({name, onClick, isActive}) => {
  return (
    <button onClick={onClick} className={`py-2 px-5 rounded-full  border border-neutral-200  dark:border-[#535868] text-[20px] font-medium ${isActive ? 'bg-red-700  dark:text-[#091540] text-white text-neut dark:bg-[#F25C54]' : 'bg-white text-[#091540] dark:text-white dark:bg-[#2F364B]'} cursor-pointer`}>{name}</button>
  )
}

export default StatusButton