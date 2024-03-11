import { useConnectionState, useRemoteParticipant, useTracks } from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';
import React from 'react'
import OfflineVideo from './OfflineVideo';
import LoadingVideo from './LoadingVideo';
import LiveVideo from './LiveVideo';
import { Skeleton } from '../ui/skeleton';


interface VideoProps{
    hostName:string;
    hostIdentity: string;
}

export const Video = ({hostIdentity,hostName}:VideoProps) => {

    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(hostIdentity);
    const tracks = useTracks([
      Track.Source.Camera,
      Track.Source.Microphone,
    ]).filter((track) => track.participant.identity === hostIdentity);

    let content;

    if(!participant && connectionState === ConnectionState.Connected){
        content = <OfflineVideo username={hostName}/>
    }else if(!participant || tracks.length === 0){
        content = <LoadingVideo label={connectionState}/>
    }
    else{
        content = <LiveVideo participant={participant} />
    }


  return (
    <div className='aspect-video border border-mycolor-300 group'>

        {content}
    </div>
  )
}


export const VideoSkeleton = ()=>{
  return(

    <div className='aspect-video border border-mycolor-300'>

      <Skeleton className='h-full w-full rounded-md'/>
    </div>
  )
}