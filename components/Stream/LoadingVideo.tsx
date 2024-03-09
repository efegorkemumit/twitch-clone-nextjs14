import { Loader } from 'lucide-react'
import React from 'react'

interface LoadingVideoProps{
    label:string
}

const LoadingVideo = ({label}:LoadingVideoProps) => {
  return (
    <div className=' h-full flex flex-col space-x-4 space-y-4 justify-center items-center'>
    <Loader className='h-14 w-14 text-mycolor-300'></Loader>
    
    
  <p className='text-mycolor-300'> {label}</p> 
    
</div>
  )
}

export default LoadingVideo