import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs'
import { Clapperboard, DoorClosed } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const RightMenu = async() => {

  return (
    <div className=' flex items-center justify-center gap-4 ml-4 '>
     
      


     
        <div className='flex items-center gap-4'>
          <Button size="sm"
          variant="link"
          className='text-mycolor-500 hover:text-mycolor-500/80'
          asChild
          
          >
            <Link href={`/`}>
              <DoorClosed className='h-5 w-5 mr-2'></DoorClosed>
              <span className='hidden md:block'>
                Exit
              </span>
            
            </Link>

          


          </Button>
          <UserButton afterSignOutUrl='/'></UserButton>


          </div>



    



    </div>
  )
}

export default RightMenu