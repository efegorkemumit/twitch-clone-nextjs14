"use server";

import { getSelf } from "@/lib/auth-service";
import { followUser, unfollowUser } from "@/lib/follow-service";
import { prismadb } from "@/lib/prismadb";
import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const updateStream = async(values:Partial<Stream>)=>{

    try {

        const self = await getSelf();
        const selfStream = await prismadb.stream.findUnique({
            where:{
                userId:self.id
            }
        })
        if(!selfStream){
            throw new Error(`Stream not found`  )

        }

        const Validdata= {
            thumbnailUrl:values.thumbnailUrl,
            name:values.name,
            isChatEnabled:values.isChatEnabled,
            isChatDelayed:values.isChatDelayed,
            isChatFollowersOnly:values.isChatFollowersOnly


        }

        const stream = await prismadb.stream.update({
            where:{
                id:selfStream.id,
            },
            data:{
                ...Validdata,
            }
        });

        revalidatePath(`/p/${self.username}/chat`);
        revalidatePath(`/p/${self.username}`);
        revalidatePath(`${self.username}`);



        
    } catch (error) {
        
        throw new Error(`Internal error : ${error.message}`  )

    }


}