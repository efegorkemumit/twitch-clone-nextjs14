'use client'

import { useViwerToken } from '@/hooks/use-viewer-token';
import { Stream, User } from '@prisma/client'
import React from 'react'
import { LiveKitRoom } from "@livekit/components-react";
import { cn } from '@/lib/utils';
import Video from './Video';


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
   <>
 <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn("grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-7")}>

            <div className='col-span-1 lg:col-span-2 2xl:col-span-5'>

                <Video hostIdentity={user.id} hostName={user.username}></Video>
            </div>


   </LiveKitRoom>
   </>
  )
}

export default StreamPlayer