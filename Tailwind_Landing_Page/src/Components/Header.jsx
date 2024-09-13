import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <img src="./public/assets/logo.svg" alt="logo"></img>
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is Hiring</button>
      </div>
      <div>
        <FaBars/>
      </div>
    </div>
  )
}

export default Header
