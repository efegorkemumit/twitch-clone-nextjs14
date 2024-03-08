'use client'

import { useViwerToken } from '@/hooks/use-viewer-token';
import { Stream } from '@prisma/client'
import React from 'react'


interface StreamPlayerProps{
    user: User&{stream: Stream |null};
    stream: Stream;
    isFollowing : boolean
}

const StreamPlayer = ({isFollowing,stream,user}:StreamPlayerProps) => {

    const {identity,name,token} = useViwerToken(user.id)

    if(!token ||  !name || !identity){
        return(
            <div>
                Cannot watch
            </div>
        )
    }
  return (
    <div>StreamPlayer</div>
  )
}

export default StreamPlayer