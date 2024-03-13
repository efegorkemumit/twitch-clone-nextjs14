import { onUnBlock } from '@/actions/block';
import { Button } from '@/components/ui/button'
import React, { useTransition } from 'react'
import { toast } from 'sonner';

interface UnblockButtonProps{
  userId:string
}

const UnblockButton = ({userId}:UnblockButtonProps) => {

  const [isPending, startTransition] = useTransition();


  const onClick =()=>{

    startTransition(()=>{
      onUnBlock(userId)
      .then((data)=>toast.success(`Unblock is Successfull ${data.blocked.username}`))
      .catch(()=> toast.error("Something went wrong"))
  })


  }
  return (
    <Button variant="destructive"
    onClick={onClick}
    className='w-full'>

UnBlock
    </Button>
  )
}

export default UnblockButton