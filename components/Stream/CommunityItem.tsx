import { onBlock } from '@/actions/block';
import { StringToColor, cn } from '@/lib/utils';
import React, { useTransition } from 'react'
import { toast } from 'sonner';
import Hint from '../Hint';
import { Button } from '../ui/button';
import { MinusCircle } from 'lucide-react';

interface CommunityItemProps{
    hostName : string;
    viewerName : string;
    participantName:string;
    particiPantIdentity:string
}

const CommunityItem = ({hostName,particiPantIdentity,participantName,viewerName}:CommunityItemProps) => {
  
    const [isPending, startTransition] =useTransition();
    const color = StringToColor(participantName || "");

    const isSelf = participantName === viewerName;
    const isHost = viewerName === hostName;

    const handleBlock = ()=>{
        if(!participantName || isSelf || !isHost) return;

        startTransition(()=>{
            onBlock(particiPantIdentity)
                .then(()=>toast.success(`blocked ${participantName}`))
                .catch(()=> toast.error("Something went wrong"))
        })
    }
  
  
    return (
    <div className={cn("group flex items-center w-full rounded-lg")}>

        <p style={{color: color}}>
            {participantName}
        </p>
        {isHost && !isSelf &&(

            <Hint label='Block'>
                <Button onClick={handleBlock}
                disabled={isPending}
                variant="myButton"
                className='h-auto w-auto'>
                    <MinusCircle className='h-4 w-4 text-mycolor-300' />


                </Button>

            </Hint>



        )}



    </div>
  )
}

export default CommunityItem