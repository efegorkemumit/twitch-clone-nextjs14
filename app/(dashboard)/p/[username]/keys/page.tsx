import React from 'react'
import { getSelf } from '@/lib/auth-service'
import { getStramByUserId } from '@/lib/stram-service';
import ConnectModal from '../_components/ConnectModal';
import UrlCard from '../_components/UrlCard';
import KeyCard from '../_components/KeyCard';


const KeysPage = async() => {

    const self = await getSelf();
  const stream = await getStramByUserId(self.id);

  if(!stream){
    throw new Error("Stream not found")
  }


  return (
    <div className='p-6'>
    <div className='mb-4'>
      <h1 className='text-2xl text-mycolor-300 mb-4'>Keys and Urls </h1>

<ConnectModal/>
    </div>
    <div className='space-y-6'>
      <UrlCard value={stream.serverUrl}/>
      <KeyCard value={stream.streamKey} />

    



    </div>
    


  </div>
  )
}

export default KeysPage