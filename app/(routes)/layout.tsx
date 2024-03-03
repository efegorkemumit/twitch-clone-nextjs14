import React from 'react'
import Navbar from './_components/navbar/Navbar';
import Sidebar from './_components/sidebar/Sidebar';
import Container from './_components/Container';

interface layoutProps{
    children : React.ReactNode;
}

const layout = ({children}:layoutProps) => {
  return (
    <>
    <Navbar/>
    <div className='flex pt-20 h-full'>
      <Sidebar/>

<Container>
{children}

</Container>
    </div>
    
    
    </>
  )
}

export default layout