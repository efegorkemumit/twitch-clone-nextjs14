import React from 'react'
import Container from './_components/Container'
import Navbar from './_components/Navbar/Navbar'
import { Sidebar } from './_components/Sidebar/Sidebar'


interface DashboardLayoutProps{
    children:React.ReactNode,
    params:{
        username :string
    }

}

const DashboardLayout = ({children,params}:DashboardLayoutProps) => {
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

export default DashboardLayout