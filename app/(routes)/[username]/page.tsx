import { isFollowingUser } from '@/lib/follow-service'
import { getByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import React from 'react'
import Actions from './_components/actions'
import { isBlockedByUser } from '@/lib/block-service'
import { StreamPlayer } from '@/components/Stream/StreamPlayer'

interface UserPageProps{
    params :{
        username:string
    }
}

const UserPage = async({params}:UserPageProps) => {

    const user = await getByUsername(params.username)

    if(!user){
        notFound();
    }

    const isfollowing= await isFollowingUser(user.id)
    const isBlock= await isBlockedByUser(user.id)



  return (
    <div className='flex flex-col gap-2 text-mycolor-500'>
       <StreamPlayer
       isFollowing={isfollowing}
       stream={user.stream}
       user={user}
       />

        
    </div>
  )
}

export default UserPage