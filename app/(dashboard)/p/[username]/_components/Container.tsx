'use client'

import { cn } from '@/lib/utils'
import { useCreatorSidebar } from '@/store/use-creator-sidebar'
import { useSidebar } from '@/store/use-sidebar'
import React, { useEffect } from 'react'
import {useMediaQuery} from "usehooks-ts"

interface ContainerProps{
    children :React.ReactNode
}

const Container = ({children}:ContainerProps) => {

    const {collapsed, onCollapsed, onExpand} = useCreatorSidebar();

    const matches = useMediaQuery("(max-width:1024px)")

    useEffect(()=>{
        if(matches){
            onCollapsed();
        }
        else{
            onExpand();
        }
    }, [matches, onCollapsed, onExpand])
  return (
    <div className={cn("flex-1 mt-4",
    collapsed ? "ml-20": "ml-20 lg:ml-64")}>

        {children}
    </div>
  )
}

export default Container