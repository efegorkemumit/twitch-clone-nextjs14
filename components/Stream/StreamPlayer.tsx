'use client'

import { useViwerToken } from '@/hooks/use-viewer-token';
import { Stream, User } from '@prisma/client'
import React from 'react'
import { LiveKitRoom } from "@livekit/components-react";
import { cn } from '@/lib/utils';
import { useChatSidebar } from '@/store/use-chat-sidebar';
import ChatToogle from './ChatToogle';
import { Video, VideoSkeleton } from './Video';
import { Chat, ChatSkeleton } from './Chat';
import Header from './Header';
import InfoCard from './InfoCard';


interface StreamPlayerProps{
    user: User&{stream: Stream |null};
    stream: Stream;
    isFollowing : boolean
}

export const StreamPlayer = ({isFollowing,stream,user}:StreamPlayerProps) => {

    const {identity,name,token} = useViwerToken(user.id)

    const {collapsed} = useChatSidebar((state)=>state)


    if(!token ||  !name || !identity){
        return(
            <div>
               <StraemSkeleton/>
            </div>
        )
    }
  return (
   <>
   {collapsed &&(
    <div className='hidden lg:block fixed top-24 right-2 z-50'>
        <ChatToogle/>

    </div>
   )}
 <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn("grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-7",
        collapsed && "lg:grid-cols-2  2xl:grid-cols-5")}>

            <div className='col-span-1 lg:col-span-2 2xl:col-span-5'>

                <Video hostIdentity={user.id} hostName={user.username}></Video>

                <Header
                hostIdentity={user.id}
                hostName={user.username}
                imageUrl={user.imageUrl}
                isFollowing={isFollowing}
                name={stream.name}
                viewerIdentity={identity}
                
                

                />

                <InfoCard
                hostIdentity={user.id}
                name={stream.name}
                thumnailUrl={stream.thumbnailUrl}
                viewerIdentity={identity}
                
                />
            </div>

            <div className={cn("col-span-1 2xl:col-span-2", collapsed && "hidden")}>

            <Chat
            hostIdentity={user.id}
            hostName={user.username}
            viewerName={name}
            isChatDelayed={stream.isChatDelayed}
            isChatEnabled={stream.isChatEnabled}
            isChatFollowersOnly={stream.isChatFollowersOnly}
            isFollowing={isFollowing}

            
            />


            </div>


   </LiveKitRoom>
   </>
  )
}

export const StraemSkeleton = ()=>{
    return(
  
      <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-7'>

            <div className='col-span-1 lg:col-span-2 2xl:col-span-5'>
                <VideoSkeleton/>

            </div>

            <div className="col-span-1 2xl:col-span-2">

                <ChatSkeleton/>
  

                </div>
      </div>
    )
  }