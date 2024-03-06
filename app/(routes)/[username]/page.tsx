import { isFollowingUser } from '@/lib/follow-service'
import { getByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import React from 'react'
import Actions from './_components/actions'

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


  return (
    <div className='flex flex-col gap-2 text-mycolor-500'>
        <p>username : {user.username}</p>
        <p>id : {user.id}</p>
        <p>is Following : {`${isfollowing}`}</p>
        <Actions isFollowing={isfollowing} userId={user.id}/>


        
    </div>
  )
}

export default UserPage