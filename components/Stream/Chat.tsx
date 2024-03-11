import React, { useEffect, useMemo, useState } from 'react'
import ChatHeader from './ChatHeader';
import { ChatVariant, useChatSidebar } from '@/store/use-chat-sidebar';
import { useMediaQuery } from 'usehooks-ts';
import { useChat, useConnectionState, useRemoteParticipant } from '@livekit/components-react';
import { ConnectionState } from 'livekit-client';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import ChatComunity from './ChatComunity';

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

  const {variant , onExpand} = useChatSidebar((state)=>state);
  const matches = useMediaQuery('(max-width:1024)')

  const [value, setValue] = useState("");

  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);

  const isOnline = participant && connectionState === ConnectionState.Connected

  const isHidden = !isChatEnabled || !isOnline

  console.log(`isOnline ${isOnline}`)
  console.log(`isHidden ${isHidden}`)


 



  const {chatMessages: messages, send} = useChat();
  const onSubmit=()=>{
    if(!send) return;

    send(value);
    setValue("");
  }

  const onChange = (value:string)=>{
    setValue(value)
  }


  const reversedMessages = useMemo(()=>{
    return messages.sort((a,b)=>b.timestamp - a.timestamp)
  })




 
  useEffect(()=>{
    if(matches){
      onExpand()
    }
  }, [matches, onExpand])

  return (
    <div className='flex flex-col bg-mycolor-200 border-1 border-b pt-0 h-[480px]'>
        <ChatHeader/>

        {variant === ChatVariant.CHAT &&(

          <>

          <ChatList isHidden={isHidden}
          messages={reversedMessages}/>


        <ChatForm isDelayed={isChatDelayed}
        isFollowersOnly={isChatFollowersOnly}
        isFollowing={isFollowing}
        isHidden={isHidden}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
        isChatEnabled={isChatEnabled}>


        </ChatForm>
          </>
        )}

        {variant === ChatVariant.COMMUNITY &&(

        <>
        <ChatComunity
          hostName={hostName}
          isHidden={isHidden}
          viewerName={viewerName}
        />
        </>
        )}


    </div>
  )
}

export default Chat