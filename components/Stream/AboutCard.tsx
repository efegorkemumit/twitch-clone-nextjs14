import { Verified } from 'lucide-react';
import React from 'react'
import AboutModal from './AboutModal';

interface AboutCardProps{
    hostName: string;
    hostIdentity: string;
    viewerIdentity: string;
    bio: string | null;
    follwedByCount : number
}

const AboutCard = ({bio,follwedByCount,hostIdentity,hostName,
    viewerIdentity}:AboutCardProps) => {

        const hostAsViewer = `host-${hostIdentity}`
        const isHost = viewerIdentity === hostAsViewer;

        const followedByLabel = follwedByCount === 1 ? "follewer": "follewers"

  return (
    <div className='px-4 mt-5'>
        <div className='rounded-xl p-6 gap-2'>

            <div className='flex items-center justify-center'>

                <div className='flex items-center gap-2 font-semibold text-mycolor-500 text-3xl'>
                    About :{hostName}
                    <Verified/>
                </div>
                {isHost &&(
                   <AboutModal initalValue={bio}/>
                )}

              




            </div>

            <div className=' text-lg  justify-center text-mycolor-500 items-center text-center'>
                    <span className='font-semibold text-mycolor-300'>
                    {follwedByCount}

                    </span>  {followedByLabel}


                </div>

                <p className='text-sm text-mycolor-500'>
                    {bio ||  " This user prefences null"}

                </p>


        </div>



    </div>
  )
}

export default AboutCard