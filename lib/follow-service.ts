import { getSelf } from "./auth-service"
import { prismadb } from "./prismadb";


export const isFollowingUser = async(id:string)=>{

    try {

        const self = await getSelf();

        const otherUser = await prismadb.user.findUnique({
            where : {id}
        })

        if(!otherUser){
            throw new Error("user not found")
        }

        if(otherUser.id === self.id){
            return true;
        }

        const exsitingFollow = await prismadb.follow.findFirst({
            where:{
                followerId : self.id,
                followingId:otherUser.id
            },
        });

        return !!exsitingFollow
        
    } catch (error) {

        return false;
        
    }
}

export const followUser = async(id:string)=>{

    const self = await getSelf();

    const otherUser = await prismadb.user.findUnique({
        where : {id}
    })

    if(!otherUser){
        throw new Error("user not found")
    }

    if(otherUser.id === self.id){
        throw new Error("Cannot yourself")
    }

    const exsitingFollow = await prismadb.follow.findFirst({
        where:{
            followerId : self.id,
            followingId:otherUser.id
        },
    });

    if(exsitingFollow){
        throw new Error("Already Following")
    }

    const follow  = await prismadb.follow.create({
        data:{
            followerId:self.id,
            followingId:otherUser.id
        },
        include:{
            following:true,
            follower:true,
        }
    })

    return follow;



}


export const unfollowUser = async(id:string)=>{

    const self = await getSelf();

    const otherUser = await prismadb.user.findUnique({
        where : {id}
    })

    if(!otherUser){
        throw new Error("user not found")
    }

    if(otherUser.id === self.id){
        throw new Error("Cannot yourself")
    }

    const exsitingFollow = await prismadb.follow.findFirst({
        where:{
            followerId : self.id,
            followingId:otherUser.id
        },
    });

    if(!exsitingFollow){
        throw new Error("Already Following")
    }

    const follow  = await prismadb.follow.delete({
        where:{
            id:exsitingFollow.id
        },
        include:{
            following:true
        }
    })

    return follow;



}

export const getFollowedUsers = async()=>{
    try {

        const self = await getSelf();

        const follwedUser = prismadb.follow.findMany({
            where:{
                followerId:self.id,
            },
            include:{
                following:true
            }
        })

        return follwedUser;
        
    } catch (error) {

        return []
        
    }
}