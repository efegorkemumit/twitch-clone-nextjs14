import { getSelf } from "./auth-service";
import { prismadb } from "./prismadb";


export const isBlockedByUser = async(id:string)=>{

    try {

        const self = await getSelf();

        const otherUser = await prismadb.user.findUnique({
            where : {id}
        })

        if(!otherUser){
            throw new Error("user not found")
        }

        if(otherUser.id === self.id){
            return false;
        }

        const exitingBlock = await prismadb.block.findUnique({
            where:{
                blockerId_blockedId:{
                    blockerId:otherUser.id,
                    blockedId:self.id
                }
            }


        })

        return !!exitingBlock;
        
    } catch (error) {

        return false;
        
    }



    
}

export const blockUser = async (id:string)=>{

    const self = await getSelf();

    if(self.id === id){
        throw new Error("Cannot block yourself")

    }

    const otherUser = await prismadb.user.findUnique({
        where : {id}
    })

    if(!otherUser){
        throw new Error("user not found")
    }

    const exitingBlock = await prismadb.block.findUnique({
        where:{
            blockerId_blockedId:{
                blockerId:self.id,
                blockedId:otherUser.id
            }
        }


    })

    if(exitingBlock){
        throw new Error("Allready blocked")

    }

    const block = await prismadb.block.create({
        data:{
            blockerId:self.id,
            blockedId:otherUser.id
        },
        include:{
            blocked:true,
        }
    })

    return block





}

export const unblockUser = async (id:string)=>{

    const self = await getSelf();

    if(self.id === id){
        throw new Error("Cannot block yourself")

    }

    const otherUser = await prismadb.user.findUnique({
        where : {id}
    })

    if(!otherUser){
        throw new Error("user not found")
    }

    const exitingBlock = await prismadb.block.findUnique({
        where:{
            blockerId_blockedId:{
                blockerId:self.id,
                blockedId:otherUser.id
            }
        }


    })

    if(!exitingBlock){
        throw new Error("Allready blocked")

        
    }

    const unBlock = await prismadb.block.delete({
        where:{
            id:exitingBlock.id
        },
        include:{
            blocked:true
        }
    })

    return unBlock;



}

export const getBlockUsers = async ()=>{
    const self = await getSelf();

    const blockedUsers = await prismadb.block.findMany({
        where:{
            blockerId: self.id
        },
        include:{
            blocked:true
        }
    })

    return blockedUsers
}