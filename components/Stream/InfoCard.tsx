import { Pencil } from 'lucide-react';
import React from 'react'
import { Separator } from '../ui/separator';
import InfoModal from './InfoModal';
import Image from 'next/image';

interface InfocardProps{
    name:string;
    thumnailUrl:string |null;
    hostIdentity: string;
    viewerIdentity: string;
}

const InfoCard = ({
hostIdentity,name,thumnailUrl,viewerIdentity
}:InfocardProps) => {

    const hostAsViewer = `host-${hostIdentity}`
    const isHost = viewerIdentity === hostAsViewer;

    if(!isHost)  return null;

  return (
    <div className='px-4 mt-8'>
        <div className='rounded-lg mb-6'>
            <div className='flex items-center gap-2'>
                <div className='rounded-xl p-4 bg-sky-600 h-auto w-auto'>

                    <Pencil className='h-5 w-5'/>
                </div>

                <div className=''>
                    <h2 className='text-lg
                    capitalize font-semibold text-mycolor-300'> Edit your stream info</h2>

                    <p className='text-mycolor-500'>
                        Maximize your visibility
                    </p>

                </div>


                <InfoModal
            initalName={name}
            initalthumbNailUrl={thumnailUrl}
            
            
            />

            </div>

           



        </div>

        <Separator/>

        <div className='p-4 space-y-3'>
            <div className='flex text-mycolor-500'>
                <h3 className='font-semibold'>
                    Name   :
                </h3>
                <p className='ml-auto'>
                    {name}
                </p>
            </div>
            <div className='flex text-mycolor-500'>

                 <h3 className='font-semibold'>
                    Thumbnail   :
                </h3>

                {thumnailUrl && (
                    <div className='relative aspect-video rounded-xl overflow-hidden'>
                        <Image
                        height={400}
                        width={400}
                        
                        src={thumnailUrl}
                        alt='a'
                        className='object-cover'
                        />

                    
                    
                    </div>

                )}




            </div>



        </div>





    </div>
  )
}

export default InfoCard