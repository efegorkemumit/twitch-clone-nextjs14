"use client"

import { cn } from '@/lib/utils';
import React from 'react'
import { useIsClient } from 'usehooks-ts';
import { ToogleSkeleton } from './toggle';
import { RecommendSkeleton } from './Recommend';
import { FollowingSkeleton } from './Following';
import { useCreatorSidebar } from '@/store/use-creator-sidebar';


interface WrapperProps{
    children : React.ReactNode;
}
const Wrapper = ({children}:WrapperProps) => {

    const {collapsed} = useCreatorSidebar((state)=>state);


  return (
    <aside
    className={cn("fixed left-0 flex-col h-full w-60 bg-mycolor-200 border-r-2 border-mycolor-400 z-50",
    collapsed && "w-16")}>
      {children}


    </aside>
  )
}

export default Wrapper