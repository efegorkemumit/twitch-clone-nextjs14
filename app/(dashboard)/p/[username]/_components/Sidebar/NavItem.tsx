import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useCreatorSidebar } from '@/store/use-creator-sidebar'
import { Icon } from '@radix-ui/react-select'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


interface NavItemProps{
    icon:LucideIcon,
    label:string,
    href:string,
    IsActive:boolean
}

export const NavItem = ({IsActive,href,icon:Icon,label,
}:NavItemProps) => {

    const {collapsed} =  useCreatorSidebar((state)=>state)

  return (
    <Button asChild
    variant="link"
    className={cn("w-full h-12"  
    ,collapsed ? "justify-center": "justify-start",
    IsActive && "bg-mycolor-100" )}>

        <Link href={href}>
            <div className={cn("flex items-center w-full gap-2",
            collapsed && "justify-center")}>

                <Icon  className={cn("h-6 w-6 lg:h-8 lg:w-8 text-mycolor-300")}></Icon>

                {!collapsed &&(
                    <p className='text-mycolor-500  lg:text-lg'>
                        {label}
                    </p>
                )}

              





            </div>
        
        </Link>



    </Button>
  )
}

export const NavItemSkeleton= ()=>{
    return(
        <li className='flex items-center gap-2 px-2'>
            <Skeleton className=' min-h-12 min-w-12 rounded-full' ></Skeleton>

            <div className='flex-1 hidden lg:block'>
                <Skeleton className='h-8'></Skeleton>
            
            </div>
        </li>
       




    )

}
