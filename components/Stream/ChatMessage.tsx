import { StringToColor } from '@/lib/utils';
import { ReceivedChatMessage } from '@livekit/components-react';
import React from 'react'
import {format} from 'date-fns'

interface ChatMessage{
    data :ReceivedChatMessage;


}

const ChatMessage = ({data}:ChatMessage) => {

    const color = StringToColor(data.from?.name || "");
  return (
    <div className='flex gap-2 p-2 rounded-md hover:bg-white'>
        <p className='text-sm text-white'>
            {format(data.timestamp, "HH:MM")}

        </p>
        <div className='flex flex-wrap gap-1'>
            <p className='text-base font-semibold'>
                <span style={{color:color}}>

                    {data.from?.name}
                </span>

            </p>

            <p className='text-base text-mycolor-500'>

                {data.message}
            </p>


        </div>



    </div>
  )
}

export default ChatMessage