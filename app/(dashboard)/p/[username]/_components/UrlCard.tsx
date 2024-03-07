import { Input } from '@/components/ui/input';
import React from 'react'
import CopyButton from './CopyButton';

interface UrlCardProps{
    value: string | null;
}

const UrlCard = ({value}:UrlCardProps) => {
  return (
    <div className='rounded-xl bg-muted p-6'>
    <div className='flex items-center justify-between'>
      <p className='font-semibold shrink-0'>Server Url</p>

      <div className='space-y-5 w-full'  >

        <div className='w-full flex items-center gap-x-6 space-x-5'>

            <Input  placeholder='Server Url' disabled
            value={value ||""}
            >

            </Input>

            <CopyButton value={value || ""}>

            </CopyButton>




        </div>

     


      </div>
        
        
    </div> 


</div>
  )
}

export default UrlCard