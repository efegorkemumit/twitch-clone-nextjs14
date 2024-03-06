'use client'

import { onFollow, onUnFollow } from '@/actions/follow';
import { Button } from '@/components/ui/button';
import React, { useTransition } from 'react'
import { toast } from 'sonner';

interface ActionProps{
    isFollowing :boolean;
    userId:string;
}

const Actions = ({isFollowing, userId}:ActionProps) => {

    const [isPending, startTransition] = useTransition();

    const handleFollow=()=>{
        startTransition(()=>{
            onFollow(userId)
            .then((data)=>toast.success(`You are now folowing ${data.following.username}`))
            .catch(()=> toast.error("Something went wrong"))
        })
    }

    const handleunFollow=()=>{
        startTransition(()=>{
            onUnFollow(userId)
            .then((data)=>toast.success(`You are now unfollowed ${data.following.username}`))
            .catch(()=> toast.error("Something went wrong"))
        })
    }

    const onClick = ()=>{

        if(isFollowing){
            handleunFollow();

        }
        else{
            handleFollow();

        }


    }

  return (
    <Button 
    disabled={isPending}
    onClick={onClick}>

        {isFollowing ? "Unfollow" : "Follow"}


    </Button>
  )
}

export default Actions