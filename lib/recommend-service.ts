import { getSelf } from "./auth-service";
import { prismadb } from "./prismadb"


export const getRecommend = async()=>{
  

    let userId;

    try {

        const self = await getSelf();
        userId = self.id;
        
    } catch (error) {

        userId=null;
        
    }

    let users=[]

    if(userId){
        users = await prismadb.user.findMany({
            where:{
               AND:[

                {
                    NOT:{
                        id:userId
                    }
                },
                {
                    NOT:{
                        followed:{
                            some:{
                                followerId:userId
                            }
                        }
                    }
                },
                {

                    NOT:{
                        blocking:{
                            some:{
                                blockedId:userId
                            }
                        }
                    }
                }

               ]
            },
            include:{
                stream:true
            },
            orderBy:{
                createdAt:"desc"
            }
        })

    }
    else{

        users = await prismadb.user.findMany({
           
            orderBy:{
                createdAt:"desc"
            }
        })

    }

    return users;
}