import { getSelf } from "./auth-service";
import { prismadb } from "./prismadb";


export const getStreams = async()=>{

    let userId;

    try {

        const self = await getSelf();
        userId = self.id;
        
    } catch (error) {

        userId=null;
        
    }

    let streams = [];

    if(userId){
        
        streams = await prismadb.stream.findMany({
            where:{
                user:{
                    NOT:{
                        blocking:{
                            some:
                            {
                                blockedId:userId
                            }
                        }
                    }
                }
            },
            select:{
                id:true,
                user:true,
                isLive:true,
                name:true,
                thumbnailUrl:true
            },
            orderBy:[
                {
                    isLive:"desc"
                },
                {
                    updatedAt:"desc"
                }
            ]
        })

    }
    else{

        streams = await prismadb.stream.findMany({

            select:{
                id:true,
                user:true,
                isLive:true,
                name:true,
                thumbnailUrl:true
            },
            orderBy:[
                {
                    isLive:"desc"
                },
                {
                    updatedAt:"desc"
                }
            ]


        })


    }

    return streams;



}