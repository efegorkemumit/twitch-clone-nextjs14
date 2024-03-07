'use client'

import { updateStream } from '@/actions/stream';
import { Button } from '@/components/ui/button';
import React, { useTransition } from 'react'
import { Switch } from "@/components/ui/switch"
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';



type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly"

interface ToggleCardProps{
    label:string;
    value:boolean;
    field:FieldTypes
}

export const ToggleCard = ({field,label,value}:ToggleCardProps) => {

    const [isPending, startTransition] = useTransition();

    const onChange=()=>{
        startTransition(()=>{
            updateStream({ [field] : !value})
            .then(()=>toast.success(`Chat settings update`))
            .catch(()=> toast.error("Something went wrong"))
        })
    }
  return (
    <div className='rounded-xl bg-muted p-6'>
        <div className='flex items-center justify-between'>
          <p className='font-semibold shrink-0'>{label}</p>

          <div className='space-y-5'>

          <Switch disabled={isPending}
          onCheckedChange={onChange}
          checked={value}>
            {value? "On" : "Off"}
          </Switch>


          </div>
            
            
        </div> 




    </div>
  )
}

export const ToogleCardSkeleton = ()=>{
    return(
        <Skeleton className='w-full p-12 rounded-xl'></Skeleton>
    )
}