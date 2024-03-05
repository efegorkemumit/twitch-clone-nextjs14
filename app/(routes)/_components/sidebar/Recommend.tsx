'use client'

import { useSidebar } from '@/store/use-sidebar';
import { User } from '@prisma/client'
import React from 'react'
import UserItem from './UserItem';

interface RecommendProps{
    data : User[];
}

const Recommend = ({data}:RecommendProps) => {

    const {collapsed} = useSidebar((state)=>state)
    const showLabel = !collapsed && data.length>0
  return (
    <div>

        {showLabel &&(
            <div className='pl-4 mb-4 '>
               <p className='text-mycolor-300 text-base'>Recommended</p> 
            </div>
        )}

        <ul className='space-y-4 px-4'>
            {data.map((user)=>(
                <UserItem key={user.id}
                imageUrl={user.imageUrl}
                username={user.username}
                isLive={true}/>


            ))}


        </ul>



    </div>
   
  )
}

export default Recommend