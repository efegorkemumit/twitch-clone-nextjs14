'use client'

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { Button } from '../ui/button';
import { onFollow, onUnFollow } from '@/actions/follow';
import { toast } from 'sonner';


interface ActionProps{
    hostIdentity : string;
    isFollowing:string;
    isHost:boolean;
}

const Actions = ({hostIdentity,isFollowing,isHost}:ActionProps) => {

    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    const {userId}  =useAuth();


    const handleFollow=()=>{
        startTransition(()=>{
            onFollow(hostIdentity)
            .then((data)=>toast.success(`You are now folowing ${data.following.username}`))
            .catch(()=> toast.error("Something went wrong"))
        })
    }

    const handleunFollow=()=>{
        startTransition(()=>{
            onUnFollow(hostIdentity)
            .then((data)=>toast.success(`You are now unfollowed ${data.following.username}`))
            .catch(()=> toast.error("Something went wrong"))
        })
    }


    const toggleFollow=()=>{

        if(!userId){
            return router.push("/sign-in")
        }

        if(isHost) return

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
    onClick={toggleFollow}
    variant="myButton">

        {isFollowing ? "Follow" : "Unfollow"}


    </Button>
  )
}

export default Actions