'use client'

import { useParticipants } from '@livekit/components-react';
import { LocalParticipant, RemoteParticipant } from 'livekit-client';
import React, { useMemo, useState } from 'react'
import { useDebounce } from 'usehooks-ts';
import { Input } from '../ui/input';
import ComunityItem from './ComunityItem';

interface ChatComunityProps{
    hostName:string;
    viewerName: string;
    isHidden:boolean;
}

const ChatComunity = ({hostName,isHidden,viewerName}:ChatComunityProps) => {

    const [value, setValue] = useState("");
    const debouncedValue = useDebounce<string>(value, 500);

    const participants = useParticipants();

    const onChange = (newValue: string) => {
             setValue(newValue);
    };

    const filteredParticipants = useMemo(() => {
    const deduped = participants.reduce((acc, participant) => {
        const hostAsViewer = `host-${participant.identity}`;
        if (!acc.some((p) => p.identity === hostAsViewer)) {
        acc.push(participant);
        }
        return acc;
    }, [] as (RemoteParticipant | LocalParticipant)[]);

    return deduped.filter((participant) => {
        return participant.name?.toLowerCase().includes(debouncedValue.toLowerCase());
    });
    }, [participants, debouncedValue]);

    if(isHidden){
        return(
            <div className='flex flex-1 items-center justify-center'>
                <p className='text-mycolor-300 text-center text-lg'>
                    Comunity is Disabled

                </p>



            </div>


        )
    }

    



  return (
    <div className='p-4'>
        <Input
        onChange={(e)=>onChange(e.target.value)}
        placeholder='Search Community'
        className='w-full border-white'
        ></Input>

        {filteredParticipants.map((participant)=>(
            <>
            <ComunityItem
            hostname={hostName}
            participantIdentiy={participant.identity}
            viewerName={viewerName}
            particiantsName={participant.name}
            key={participant.identity}>


            </ComunityItem>
            
            </>
            
        ))}



    </div>
  )
}

export default ChatComunity