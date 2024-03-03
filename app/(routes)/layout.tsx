import React from 'react'
import Navbar from './_components/navbar/Navbar';

interface layoutProps{
    children : React.ReactNode;
}

const layout = ({children}:layoutProps) => {
  return (
    <>
    <Navbar/>
    <div>

        {children}
    </div>
    
    
    </>
  )
}

export default layout