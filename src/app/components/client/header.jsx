import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <>
      <header id='navbar' className='h-auto bg-white shadow-md border-b border-gray-100'>
        <Navbar/>
      </header>
    </>
  )
}

export default Header