import React from 'react'
import {ResultCard, ResultCartSkeleton} from './ResultCard';
import { Skeleton } from '@/components/ui/skeleton';
import { getSearch } from '@/lib/search-service';


interface ResultProps{
    term?:string
}

export const ResultPage = async({term}:ResultProps) => {

    const data = await getSearch(term);
  return (
    <div>
        <h2 className='text-xl  lg:text-3xl 2xl:text-5xl font-semibold mb-10 text-mycolor-300'>
            Streams we thing
        </h2>


            {data.length === 0 &&(

                    <div className='text-mycolor-500 text-sm'>

                    no streams found

                    </div>


            )}

            <div className='grid gap-y-9 gap-x-5 grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                {data.map((result)=>(
                   <ResultCard
                   data={result} 
                   key={result.id}
                   />
                ))}



            </div>
        
        
        
    </div>
  )
}

export const ResultSkeleton =()=>{

  return(

    <div>
      <Skeleton className='h-8 w-44 mb-24'/>

    <div className='grid gap-y-9 gap-x-5 grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {[...Array(4)].map((_,i)=>(
            <ResultCartSkeleton key={i}/>


        ))}


    </div>

    
    </div>


)
}