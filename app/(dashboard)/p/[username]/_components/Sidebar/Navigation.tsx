'use client'

import { useUser } from '@clerk/nextjs';
import { Fullscreen, Key, MessageCircleHeart, User } from 'lucide-react';
import { usePathname } from 'next/navigation'
import React from 'react'
import { NavItem, NavItemSkeleton } from './NavItem';

const Navigation = () => {

    const pathname = usePathname();
    const {user} = useUser();

    const routes = [
        {
            label:"Stream",
            href:`/p/${user?.username}`,
            icon: Fullscreen,
        },
        {
            label:"Keys",
            href:`/p/${user?.username}/keys`,
            icon: Key,
        },
        {
            label:"Chat",
            href:`/p/${user?.username}/chat`,
            icon: MessageCircleHeart,
        },
        {
            label:"Community",
            href:`/p/${user?.username}/community`,
            icon: User,
        },


    ]

    if(!user?.username){
        return(
            <ul className='space-y-4 px-4'>
            {[...Array(5)].map((_,i)=>(
                <NavItemSkeleton key={i}/>


            ))}


        </ul>
        )
    }


  return (
    <ul className='space-y-2 px-2'>
        {routes.map((route)=>(
            <NavItem IsActive={pathname===route.href}
            href={route.href}
            icon={route.icon}
            label={route.label}/>


        ))}


    </ul>
  )
}

export default Navigation