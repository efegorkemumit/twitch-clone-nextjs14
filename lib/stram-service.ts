import { prismadb } from "./prismadb";


export const getStramByUserId = async(userId: string)=>{


    const stream = await prismadb.stream.findUnique({
        where:{
            userId,
        }
    })

    return stream;
    
}