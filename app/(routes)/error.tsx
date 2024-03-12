'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center
    justify-center text-center">

        <h1 className='text-9xl text-mycolor-300'>
        Something went wrong
        </h1>

      

        <Button asChild variant="myButton">

    <Link href="/">
        Go back home
    </Link>

        </Button>




    </div>
  )
}

export default error