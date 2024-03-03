import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs'
import { Clapperboard } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const RightMenu = async() => {

  const user = await currentUser();
  return (
    <div className=' flex items-center justify-center gap-4 ml-4 '>
      {!user&&(
        <SignInButton>

          <Button variant="myButton" className='text-mycolor-200 font-semibold'>
            Login
          </Button>
        </SignInButton>


      )}
      {user &&(
        <div className='flex items-center gap-4'>
          <Button size="sm"
          variant="link"
          className='text-mycolor-500 hover:text-mycolor-500/80'
          asChild
          
          >
            <Link href={`/p/${user.username}`}>
              <Clapperboard className='h-5 w-5 mr-2'></Clapperboard>
              <span className='hidden md:block'>
                Dashboard
              </span>
            
            </Link>

          


          </Button>
          <UserButton afterSignOutUrl='/'></UserButton>


          </div>



      )}



    </div>
  )
}

export default RightMenu