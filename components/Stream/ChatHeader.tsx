import React from 'react'
import ChatToogle from './ChatToogle'
import VariantToogle from './VariantToogle'

const ChatHeader = () => {
  return (
    <div className='relative p-3 border-b'>

        <div className='absolute left-2 top-2 hidden lg:block'>
            <ChatToogle/>



        </div>
        <p className='font-semibold text-mycolor-500 text-center'>
            Stream
        </p>

        <div className='absolute right-2 top-2'>

            <VariantToogle/>

        </div>



    </div>
  )
}

export default ChatHeader