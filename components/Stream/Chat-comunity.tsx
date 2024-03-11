'use client'
import { useParticipants } from '@livekit/components-react';
import { LocalParticipant, RemoteParticipant } from 'livekit-client';
import React, { useMemo, useState } from 'react'
import { useDebounce } from 'usehooks-ts';
import { Input } from '../ui/input';
import CommunityItem from './CommunityItem';


interface ChatCommunityProps{
    hostname : string;
    viewerName : string;
    isHidden: boolean;
}

const ChatCommunity = ({hostname,isHidden,viewerName}:ChatCommunityProps) => {

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

                <p className='text-lg text-mycolor-300 text-center'>
                    Community is disabled
                </p>
            </div>
        )
    }

  return (
    <div>
        <Input onChange={(e)=>onChange(e.target.value)}
        placeholder='Search Community'
        className='border-white'>

        </Input>


        {filteredParticipants.map((participant)=>(
            <>
           <CommunityItem
           key={participant.identity}
           hostName={hostname}
           viewerName={viewerName}
           particiPantIdentity={participant.identity}
           participantName={participant.name}
           />
            </>
        ))}
    </div>
  )
}

export default ChatCommunity