import { WifiIcon } from 'lucide-react';
import React from 'react'

interface OfflineVideoProps{
    username:string;
}

const OfflineVideo = ({username}:OfflineVideoProps) => {
  return (
    <div className=' h-full flex flex-col space-x-4 space-y-4 justify-center items-center'>
        <WifiIcon className='h-14 w-14 text-mycolor-300'></WifiIcon>
        
        
      <p className='text-mycolor-300'> {username}</p> 
        
    </div>
  )
}

export default OfflineVideo