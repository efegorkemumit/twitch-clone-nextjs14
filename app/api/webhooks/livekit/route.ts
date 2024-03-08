import { prismadb } from "@/lib/prismadb";
import { WebhookReceiver } from "livekit-server-sdk";
import { headers } from "next/headers";


const receiver = new WebhookReceiver(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!
);

export async function POST(req:Request) {

    const body = await req.text();
    const headerPayload = headers();
    const authorization  = headerPayload.get("Authorization")

    if(!authorization){
        return new Response("No auth header", {status:400})
    }

    const event = receiver.receive(body,authorization);


    if((await event).event === "ingress_started"){
        await prismadb.stream.update({
            where:{
                ingressId:(await event).ingressInfo?.ingressId,
            },
            data:{
                isLive:true
            }
        })

    }

    if((await event).event === "ingress_ended"){
        await prismadb.stream.update({
            where:{
                ingressId:(await event).ingressInfo?.ingressId,
            },
            data:{
                isLive:false
            }
        })

    }




    return new Response('', { status: 200 })

    
}