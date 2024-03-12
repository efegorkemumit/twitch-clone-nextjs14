"use server";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service";
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache";


const roomService = new RoomServiceClient(
    process.env.LIVEKIT_API_URL!,
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
  );


export const onBlock = async(id:string)=>{

    try {
        const self = await getSelf();
        await blockUser(id);
        await roomService.removeParticipant(self.id, id);
        revalidatePath(`/p/${self.username}`);
        revalidatePath(`/p/${self.username}/community`);
    } catch (error) {
        // Hata yönetimini burada gerçekleştirin
        console.error(error);
    }

    
}

export const onUnBlock = async(id:string)=>{

    const unblockedUser = await unblockUser(id);

    revalidatePath("/")

    if(unblockedUser){
        revalidatePath(`/${unblockedUser.blocked.username}`);

        
    }

    return unblockedUser;
}
