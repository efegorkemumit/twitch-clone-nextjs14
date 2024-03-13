import LiveBadge from '@/components/LiveBadge'
import { Thumnail, ThumnailSkeleton } from '@/components/Thumnail'
import { Skeleton } from '@/components/ui/skeleton'
import UserAvatar from '@/components/user-avatar'
import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface ResultCardProps{
    data:{
        user:User,
        isLive:boolean,
        name:string,
        thumbnailUrl: string | null
    }
}

export const ResultCard = ({data}:ResultCardProps) => {
  return (
   <Link href={`/${data.user.username}`}>

    <div className='h-full w-full space-y-4 relative'>

      <Thumnail
      src={data.thumbnailUrl}
      fallback={data.user.imageUrl}
      Islive={data.isLive}
      username={data.user.username}
      />
      {data.isLive &&(
        <div className='absolute top-2 left-2 transition-transform group-hover:translate-x-2 
        group-hover:translate-y-1'>
          <LiveBadge/>

          </div>

      
      )}

      <div className='flex gap-2'>

        <UserAvatar
        username={data.user.username}
        imageUrl={data.user.imageUrl}
        isLive={data.isLive}>

        </UserAvatar>

        <div className='flex flex-col text-sm overflow-hidden'>
          <p className='text-mycolor-300 font-semibold text-lg'>
            {data.name}
          </p>
          <p className='text-mycolor-500 text-base'>
            {data.user.username}
          </p>
          
        </div>



      </div>





    </div>
   
   
   </Link>
  )
}

export const ResultCartSkeleton=()=>{

  return(

    <div className='h-full w-full space-y-4 relative'>

      <ThumnailSkeleton/>

      <div className='flex gap-2'>
        
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-4 w-4'/>
          <Skeleton className='h-3 w-24'/>


        </div>

      </div>
    </div>
    
  )


}