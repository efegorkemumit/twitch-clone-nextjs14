import React from 'react'
import Logo from './Logo'
import Search from './Search'
import RightMenu from './RightMenu'

const Navbar = () => {
  return (
    <nav className='fixed top-0 h-20 w-full px-2 z-40 flex
     justify-between items-center bg-mycolor-100 shadow-md gap-x-8'>


      <Logo/>

    <Search/>

      <RightMenu/>
    </nav>
  )
}

export default Navbar