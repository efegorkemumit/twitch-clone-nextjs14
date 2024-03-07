"use server";

// livekit-server-sdk'dan gerekli modülleri al
import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
  type CreateIngressOptions,
} from "livekit-server-sdk";


import { revalidatePath } from "next/cache";

// livekit_models modülünden TrackSource'u al
import { TrackSource } from "livekit-server-sdk/dist/proto/livekit_models_pb";
import { getSelf } from "@/lib/auth-service";
import { prismadb } from "@/lib/prismadb";


const roomService = new RoomServiceClient(
    process.env.LIVEKIT_API_URL!,
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,

)

const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL!);

export const resetIngresses = async(hostIdentity: string)=>{

    const ingresses = await ingressClient.listIngress({
        roomName:hostIdentity,
    })

    const rooms = await roomService.listRooms([hostIdentity]);

    for(const room of rooms){
        await roomService.deleteRoom(room.name)
    }

    for(const ingress of ingresses){
        await ingressClient.deleteIngress(ingress.ingressId)

    }



}


export const createIngress = async(ingressType: IngressInput)=>{

    const self = await getSelf();

    await resetIngresses(self.id);

    const options: CreateIngressOptions = {
        name: self.username,
        roomName: self.id,
        participantName: self.username,
        participantIdentity: self.id,
      };
    

      if(ingressType === IngressInput.WHIP_INPUT){
        options.bypassTranscoding = true;
      }
      else{
        options.video={
            source: TrackSource.CAMERA,
            preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS
        };
        options.audio={
            source: TrackSource.MICROPHONE,
            preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS
        }
      }

      const ingress = await ingressClient.createIngress(
        ingressType,
        options
      )

      if(!ingress || !ingress.url || !ingress.streamKey ){
        throw new Error(`ingress error `  )

      }

      await prismadb.stream.update({
        where:{userId:self.id},
        data:{
            ingressId:ingress.ingressId,
            serverUrl:ingress.url,
            streamKey:ingress.streamKey
        }
      });

      revalidatePath(`/p/${self.username}/keys`);

      return ingress

}