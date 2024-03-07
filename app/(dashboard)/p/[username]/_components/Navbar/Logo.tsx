import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
   <Link href="/">
    <div className='flex items-center gap-4 hover:opacity-85 transition'>
        <div className='bg-white rounded-full p-1'>
            <Image src="/logo2.svg" alt='' width={35} height={35}
            ></Image>

        </div>
        <div className='hidden md:block'>
            <p className='text-mycolor-500 font-semibold text-2xl'> Creator Page</p>
            <p className='text-sm text-mycolor-300'> Game +</p>


        </div>




    </div>
   
   
   </Link>
  )
}

export default Logo