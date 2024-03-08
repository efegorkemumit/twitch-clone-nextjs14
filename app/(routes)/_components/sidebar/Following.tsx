'use client'
import { useSidebar } from '@/store/use-sidebar';
import { Follow, Stream, User } from '@prisma/client'
import React from 'react'
import { UserItem, UserItemSkeleton } from './UserItem';


interface FollowingProps{
    data: (Follow & {following:User &{
        stream : Stream | null;
    }})[];
}

export const Following = ({data} :FollowingProps) => {

    const {collapsed} = useSidebar((state)=>state)

    if(!data.length){
        return null;
    }

  return (
    <div>

        {!collapsed &&(

            <div className='pl-4 mb-4 '>
            <p className='text-mycolor-300 text-base'>Following</p> 
            </div>
        )}

        <ul className='space-y-4 px-4'>
            {data.map((follow)=>(
                <UserItem key={follow.following.id}
                imageUrl={follow.following.imageUrl}
                username={follow.following.username}
                isLive={follow.following.stream?.isLive}
                />


            ))}


        </ul>




    </div>
  )
}

export const FollowingSkeleton=()=>{
    return(

        <ul className='space-y-4 px-4 mt-4'>
            {[...Array(5)].map((_,i)=>(
                <UserItemSkeleton key={i}/>


            ))}


        </ul>


    )

}
