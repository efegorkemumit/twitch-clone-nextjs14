import React from 'react'
import ChatHeader from './ChatHeader';

interface ChatProps{
    hostName :string;
    hostIdentity:string;
    viewerName : string;
    isFollowing : boolean;
    isChatEnabled:boolean;
    isChatDelayed:boolean;
    isChatFollowersOnly:boolean

}

const Chat = ({hostIdentity,hostName,isChatDelayed,
isChatEnabled,isChatFollowersOnly,isFollowing,viewerName}:ChatProps) => {
  return (
    <div className='flex flex-col bg-mycolor-200 border-1 border-b pt-0 h-96'>
        <ChatHeader/>


    </div>
  )
}

export default Chat