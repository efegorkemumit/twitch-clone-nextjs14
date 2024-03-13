import React from 'react'
import UserAvatar from './user-avatar';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';

interface ThumnailProps{
    src:string | null;
    fallback:string;
    Islive:boolean;
    username :string
}

export const Thumnail = ({Islive,fallback,src,username}:ThumnailProps) => {

    let content;

    if(!src){

        content=(

            <div className='bg-background flex flex-col items-center justify-center gap-3
            h-full w-full transition-transform group-hover:translate-x-2 
            group-hover:translate-y-1 rounded-lg'>

                <UserAvatar
                imageUrl={fallback}
                username={username}
                isLive={Islive}
                size="lg"
                showBadge>

                </UserAvatar>



            </div>
        )
    }
    else{
        content=(
            <Image
            src={src}
            fill
            alt='a'
            className='flex flex-col items-center justify-center gap-3
            h-full w-full transition-transform group-hover:translate-x-2 
            group-hover:translate-y-1 rounded-lg'>

            </Image>
        )
    }
 
 
    return (
    <div className='group aspect-video relative rounded-md cursor-pointer'
    
    
    >{content}</div>
  )
}

export const ThumnailSkeleton = ()=>{

    return(
        <div className='aspect-video relative rounded-md cursor-pointer'>

        <Skeleton className='w-full h-full'/>
        </div>
    )

}