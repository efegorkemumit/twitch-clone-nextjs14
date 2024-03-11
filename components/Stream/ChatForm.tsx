import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import ChatInfo from './ChatInfo';

interface ChatFormProps{
    onSubmit:()=>void;
    value:string;
    onChange:(value:string)=>void;
    isHidden:boolean;
    isFollowersOnly: boolean;
    isFollowing:boolean;
    isDelayed: boolean;
    isChatEnabled?:boolean;
}

const ChatForm = ({isDelayed,isFollowersOnly,
isFollowing,isHidden,onChange,onSubmit,value,isChatEnabled}:ChatFormProps) => {



const [isDelayblocked, setIsdelayBlocked] =useState(false);

    const isControl = isFollowersOnly && !isFollowing;

    const IsDisabled = isControl || isDelayblocked || !isChatEnabled

    if(isHidden){
        return null
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        e.stopPropagation();

        if(isDelayed && !isDelayblocked){
            setIsdelayBlocked(true);
            setTimeout(()=>{
                setIsdelayBlocked(false);
                onSubmit();
            }, 1500)
        }else{
            onSubmit();
        }


    }

  return (
    <form onSubmit={handleSubmit} className='flex items-center flex-col'>

        <div className='w-full'>
            <ChatInfo isDelayed={isDelayed}
            isFollowersOnly={isFollowersOnly}></ChatInfo>


            <Input onChange={(e)=>onChange(e.target.value)}
            value={value} disabled={IsDisabled}
            placeholder='Send a message'
            className='border-white'>
            </Input>
        </div>

        <div className='ml-auto'>
            <Button disabled={IsDisabled} variant="myButton" size="sm" type='submit'  >
Chat

            </Button>


        </div>




    </form>
  )
}

export default ChatForm