import React from 'react'
import { ToogleCardSkeleton } from '../_components/ToggleCard'

const ChatLoading = () => {
  return (
    <div className='p-6'>
        <div className='mb-4'>
                     <div className='space-y-5'>

                        <ToogleCardSkeleton/>
                        <ToogleCardSkeleton/>
                        <ToogleCardSkeleton/>

                    </div>

        </div>
        
    </div>
  )
}

export default ChatLoading