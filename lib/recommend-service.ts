import { prismadb } from "./prismadb"


export const getRecommend = async()=>{
    const users = await prismadb.user.findMany({
        orderBy:{
            createdAt :"desc"
        }

    })

    return users;
}