'use client'

import { useChatSidebar } from '@/store/use-chat-sidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import React from 'react'
import Hint from '../Hint'
import { Button } from '../ui/button'

const ChatToogle = () => {

    const {collapsed, onExpand, onCollapsed} = useChatSidebar((state)=>state)

    const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

    const onToogle =()=>{
        if(collapsed){
            onExpand();
        }
        else{
            onCollapsed();
        }
    }

    const label = collapsed ? "Expand" : "Collapse"

  return (
   <Hint label={label} asChild side='left'>
    <Button variant="mySecond" onClick={onToogle}>

        <Icon className='h-4 w-4'/>
    </Button>


   </Hint>
  )
}

export default ChatToogle