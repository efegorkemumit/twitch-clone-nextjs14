import { cn } from '@/lib/utils'
import React from 'react'

interface LiveBadgeProps{
    classname?: string
}

const LiveBadge = ({classname}: LiveBadgeProps) => {
  return (
    <div className={cn(
        "bg-mycolor-300 text-center p-0 px-1 rounded-full border border-mycolor-300 font-semibold",
    classname)}>Live
    
    </div>
  )
}

export default LiveBadge