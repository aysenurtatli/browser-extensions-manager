import './App.css'
import { useState } from 'react'
import Extension from './Extension'
import Header from './Header'
import Navbar from './Navbar'

function App() {
  const [filter, setFilter] = useState(null);

  return (
    <div className='bg-[linear-gradient(to_top,#EEFBF9,#EBF2FC)] dark:bg-[linear-gradient(to_bottom,#04091B,#091540)]'>
      <div className={`max-w-[1170px] mx-auto pt-[40px] min-h-screen md:px-[32px] px-[16px]`}>
        <Navbar/>
        <Header setFilter={setFilter} />
        <Extension filter={filter} />
      </div>
    </div>
  )
}

export default App
