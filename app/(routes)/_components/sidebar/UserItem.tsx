'use client'
import LiveBadge from '@/components/LiveBadge'
import { Button } from '@/components/ui/button'
import UserAvatar from '@/components/user-avatar'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface UserItemProps{
    username : string,
    imageUrl:string,
    isLive? : boolean
}

const UserItem = ({imageUrl, username,isLive}:UserItemProps) => {
  
    const pathname = usePathname();

    const {collapsed} = useSidebar((state)=>state)

    const href = `/${username}`

    const IsActive = pathname === href;

    return (
    <Button asChild
    variant="link"
    className={cn("w-full h-12"  
    ,collapsed ? "justify-center": "justify-start",
    IsActive && "bg-white" )}>

        <Link href={href}>
            <div className={cn("flex items-center w-full gap-2",
            collapsed && "justify-center")}>
                <UserAvatar  isLive={isLive} username={username} imageUrl={imageUrl}/>

                {!collapsed &&(
                    <p className='text-mycolor-500'>
                        {username}
                    </p>
                )}

                {!collapsed && isLive && (
                  <LiveBadge/>
                )}






            </div>
        
        </Link>



    </Button>
  )
}

export default UserItem