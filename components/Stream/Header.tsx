import React from 'react'
import UserAvatar from '../user-avatar';
import { useParticipants, useRemoteParticipant } from '@livekit/components-react';
import Verifield from '../Verifield';
import { UserIcon } from 'lucide-react';
import Actions from './Actions';


interface HeaderProps{
    imageUrl : string;
    hostName:string;
    hostIdentity:string;
    viewerIdentity :string;
    isFollowing:boolean;
    name:string;

}
const Header = ({hostIdentity,hostName,imageUrl,
    isFollowing,name,viewerIdentity}:HeaderProps) => {

    const participants = useParticipants();
    const participant = useRemoteParticipant(hostIdentity);
    

    const isLive = !!participant

    const participantCount = participants.length -1;
    const hostAsviewer = `host-${hostIdentity}`;
    const isHost = viewerIdentity === hostAsviewer

  return (
    <div className='flex flex-col gap-2 mt-5 items-start justify-between px-4 py-2'>

        <div className='flex items-center gap-2'>
            <UserAvatar
            imageUrl={imageUrl}
            username={hostName}
            isLive={isLive}
            showBadge
            size="lg"
            />

            <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                    <h2 className='text-lg font-semibold text-mycolor-300'>{hostName}</h2>
                        <Verifield/>


                </div>

                <p className='text-mycolor-500'> 
                    {name}
                </p>

                {isLive ? (
                    <>
                    <div className='font-semibold flex gap-2 items-center'>
                        <UserIcon className='w-4 h-4'></UserIcon>
                        <p className='text-mycolor-300/65'>
                            {participantCount} {participantCount === 1 ? "viewer" : "wiewers"}
                        </p>


                    </div>
                    
                    </>


                ):
                (
                        <>

                            <p className='text-red-600/55'> 
                                Ofline
                        </p>
                        
                        </>

                )
                
                }


            </div>

            <Actions
            hostIdentity={hostIdentity}
            isHost={isHost}
            isFollowing={isFollowing}
            />


        </div>
        
        
        
    </div>
  )
}

export default Header