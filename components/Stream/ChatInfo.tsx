import React, { useMemo } from 'react'
import Hint from '../Hint';
import { Info } from 'lucide-react';


interface ChatInfoProps{
    isDelayed:string,
    isFollowersOnly:string;


}


const ChatInfo = ({isDelayed,isFollowersOnly}:ChatInfoProps) => {


    const hint =useMemo(()=>{
        if(isFollowersOnly && !isDelayed){
            return "Only followers can chat"
        }

        if(!isFollowersOnly && isDelayed){
            return " Mesages are delay 5 second"
        }

        if(isFollowersOnly && isDelayed){
            return " Only followers Mesages are delay 5 second"
        }


    }, [isDelayed, isFollowersOnly])

    const label =useMemo(()=>{

        if(isFollowersOnly && !isDelayed){
            return "Followers Only"
        }

        if(!isFollowersOnly && isDelayed){
            return "Slow Mode"
        }

        if(isFollowersOnly && isDelayed){
            return "Just Follower and Slow mode"
        }

        
    }, [isDelayed, isFollowersOnly])
  return (
    <div className='p-2 bg-mycolor-500 border border-mycolor-300 w-full
    flex items-center gap-2'>
        <Hint label={hint}>
            <Info className='h-4 w-'/>
        </Hint>

        <p className='text-sm font-semibold text-mycolor-300'>
            {label}
        </p>



    </div>
  )
}

export default ChatInfo