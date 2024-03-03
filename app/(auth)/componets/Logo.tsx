import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-col items-center gap-4 '>

        <div className=' bg-white p-4 rounded-full '>
        <Image src="/logo2.svg" alt='' width="80" height="80"></Image>

        </div>

        <div className='flex flex-col items-center '>
            <p className='text-center text-xl font-semibold text-white'>Game +  </p>

    <p className='text-center text-sm  text-mycolor-300'>Let's go</p>

        </div>

        
        
        
        
    </div>
  )
}

export default Logo