import { prismadb } from "./prismadb";


export const getByUsername = async(username: string)=>{


    const user = await prismadb.user.findUnique({
        where:{
            username,
        },
        include:{
            stream :{
                select:{
                    isLive:true,
                    id:true,
                    isChatDelayed:true,
                    isChatEnabled:true,
                    isChatFollowersOnly:true,
                    name:true,
                    thumbnailUrl:true,
                    
                }
            },
            _count:{
                select:{
                    followed:true
                }
            }
        }
    })

    return user;
    
}

export const getUserById = async(id:string)=>{


    const user = await prismadb.user.findUnique({
        where:{
            id,
        },
        include:{
            stream :{
                select:{
                    isLive:true,
                },
            },
        }
    })

    return user;
    
}