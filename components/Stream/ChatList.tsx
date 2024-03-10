import { ReceivedChatMessage } from '@livekit/components-react'
import React from 'react'
import ChatMessage from './ChatMessage';

interface ChatListProps{
    messages :ReceivedChatMessage[];
    isHidden: boolean;
}

const ChatList = ({isHidden,messages}:ChatListProps) => {

    if(isHidden || !messages || messages.length ===0){
        return(
            <div className='flex flex-1 items-center justify-center'>
                <p className='text-sm text-mycolor-300'>

                    {isHidden ? "Chat is disabled" : "Welcome to chat"}
                </p>
            </div>
        )
    }
  return (
    <div className='flex flex-1 flex-col-reverse overflow-y-auto p-4 h-full'>
        {messages.map((message)=>(

            <ChatMessage data={message} key={message.timestamp}/>



        ))}


    </div>
  )
}

export default ChatList