'use client'

import { ChatVariant, useChatSidebar } from '@/store/use-chat-sidebar'
import { MessageSquare, Users } from 'lucide-react'
import React from 'react'
import Hint from '../Hint'
import { Button } from '../ui/button'

const VariantToogle = () => {

  const {variant, onChangeVariant} = useChatSidebar((state)=>state)

  const isChat = variant === ChatVariant.CHAT
  const Icon = isChat ? Users : MessageSquare

  const onToogle=()=>{
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant)
  }

  const label = isChat ? "Community" : "Go back to chat"

  return (
  <Hint label={label} asChild side='left'>

    <Button variant="mySecond" className='' onClick={onToogle}>

      <Icon className='h-4 w-4'></Icon>
    </Button>


  </Hint>
  )
}

export default VariantToogle