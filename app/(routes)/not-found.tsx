import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center
    justify-center text-center">

        <h1 className='text-9xl text-mycolor-300'>
            404
        </h1>

        <p className='text-mycolor-500 text-xl'>Not found</p>

        <Button asChild variant="myButton">

    <Link href="/">
        Go back home
    </Link>

        </Button>




    </div>
  )
}

export default NotFound