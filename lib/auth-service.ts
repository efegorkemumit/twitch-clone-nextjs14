import { currentUser } from "@clerk/nextjs"
import { prismadb } from "./prismadb";


export const getSelf = async ()=>{

    const self = await currentUser();

    if(!self && !self.username){
        throw new Error("Unauthorized");
    }

    const user = await prismadb.user.findUnique({
        where : {externalUserId : self.id}
    })

    if(!user){
        throw new Error("Not found user");

    }

    return user;



}