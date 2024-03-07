'use client'

import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import CopyButton from './CopyButton';
import { Button } from '@/components/ui/button';

interface UrlCardProps{
    value: string | null;
}

const KeyCard = ({value}:UrlCardProps) => {

    const [show, setShow] = useState(false);
  return (
    <div className='rounded-xl bg-muted p-6'>
    <div className='flex items-center justify-between'>
      <p className='font-semibold shrink-0'>Stream Key</p>

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


<div className='items-center justify-end flex  '>
<Button size="lg"  onClick={()=>setShow(!show)} variant="link">
            {show ? "Hide" : "Show"}



        </Button>
</div>
    


</div>
  )
}

export default KeyCard