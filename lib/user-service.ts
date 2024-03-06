import { prismadb } from "./prismadb"


export const getByUsername = async(username: string)=>{


    const user = await prismadb.user.findUnique({
        where:{
            username,
        }
    })

    return user;
    
}