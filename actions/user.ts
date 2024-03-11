'use server'

import { getSelf } from "@/lib/auth-service";
import { prismadb } from "@/lib/prismadb";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const updateUser = async(values: Partial<User>)=>{

    const self = await getSelf();

    const validata ={
        bio : values.bio
    };

    const user = await prismadb.user.update({
        where:{id:self.id},
        data:{...validata}
    })

    revalidatePath(`/p/${self.username}`);
    revalidatePath(`${self.username}`);

    return user;



}