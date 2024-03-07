import React from 'react'
import {ToggleCard} from '../_components/ToggleCard'
import { getSelf } from '@/lib/auth-service'
import { getStramByUserId } from '@/lib/stram-service';

const ChatPage = async() => {

  const self = await getSelf();
  const stream = await getStramByUserId(self.id);

  if(!stream){
    throw new Error("Stream not found")
  }

  return (
    <div className='p-6'>
      <div className='mb-4'>
        <h1 className='text-2xl text-mycolor-300'>Chat Settings</h1>


      </div>
      <div className='space-y-6'>

        <ToggleCard 
        label='Enable Chat'
        field='isChatEnabled'
        value={stream.isChatEnabled}
        
        ></ToggleCard>

      <ToggleCard 
        label='Delay Chat'
        field='isChatDelayed'
        value={stream.isChatDelayed}
        
        ></ToggleCard>

      <ToggleCard 
        label='Following to chat'
        field='isChatFollowersOnly'
        value={stream.isChatFollowersOnly}
        
        ></ToggleCard>



      </div>
      


    </div>
  )
}

export default ChatPage