import React, { Suspense } from 'react'
import Navbar from './_components/navbar/Navbar';
import Container from './_components/Container';
import { Sidebar, SidebarSkeleton } from './_components/sidebar/Sidebar';

interface layoutProps{
    children : React.ReactNode;
}

const layout = ({children}:layoutProps) => {
  return (
    <>
    <Navbar/>
    <div className='flex pt-20 h-full'>

      <Suspense fallback={<SidebarSkeleton/>}>
      <Sidebar/>

      </Suspense>

<Container>
{children}

</Container>
    </div>
    
    
    </>
  )
}

export default layout