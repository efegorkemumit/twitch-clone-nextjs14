import StreamPlayer from '@/components/Stream/StreamPlayer'
import { getByUsername } from '@/lib/user-service'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

interface DashboardPageProps{
   params:{
    username:string
   }
}

const DashboardPage = async({params}:DashboardPageProps) => {

  const externalUser = await currentUser();
  const user = await getByUsername(params.username);

  if(!user || user.externalUserId !== externalUser.id || !user.stream){
    throw new Error("Unauthorized")
  }
  return (
    <div>
      <StreamPlayer
      isFollowing
      stream={user.stream}
      user={user}>

      </StreamPlayer>



    </div>
  )
}

export default DashboardPage