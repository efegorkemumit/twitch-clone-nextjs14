import { useConnectionState, useRemoteParticipant, useTracks } from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';
import React from 'react'
import OfflineVideo from './OfflineVideo';
import LoadingVideo from './LoadingVideo';
import LiveVideo from './LiveVideo';


interface VideoProps{
    hostName:string;
    hostIdentity: string;
}

const Video = ({hostIdentity,hostName}:VideoProps) => {

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
        content = <LiveVideo />
    }


  return (
    <div>

        {content}
    </div>
  )
}

export default Video