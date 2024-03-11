import { onBlock } from '@/actions/block';
import { StringToColor, cn } from '@/lib/utils';
import { group } from 'console';
import React, { useTransition } from 'react'
import { toast } from 'sonner';
import Hint from '../Hint';
import { Button } from '../ui/button';
import { MinusSquare } from 'lucide-react';


interface CommunityItemProps{
    hostname:string;
    viewerName: string;
    particiantsName?:string;
    participantIdentiy: string;
}

const ComunityItem = ({hostname,participantIdentiy,
    viewerName,particiantsName}:CommunityItemProps) => {
        

        const[isPending, startTransition] = useTransition();

        const color  = StringToColor(particiantsName || "");
        const isSelf = particiantsName === viewerName;
        const iSHost = viewerName === hostname;

        const handleBlock= ()=>{

            if(!particiantsName || isSelf || !iSHost)  return;

            startTransition(()=>{
                onBlock(participantIdentiy)
                .then(()=>toast.success(`Blocked ${particiantsName}`))
                .catch(()=> toast.error("Something went wrong"))
            })

        }
 
 
 
    return (
    <div className={cn("group items-center flex justify-between w-full p-2",
    isPending && "opacity-50 pointer-events-none")}>

        <p style={{color: color}}>
            {particiantsName}

        </p>
        {iSHost && !isSelf &&(
            <Hint label='block'>
                <Button variant="myButton" disabled={isPending}
                onClick={handleBlock}>

                    <MinusSquare className='w-4 h-4'/>


                </Button>
                </Hint>

        )}



    </div>
  )
}

export default ComunityItem