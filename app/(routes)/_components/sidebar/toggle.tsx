'use client'

import Hint from '@/components/Hint'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/store/use-sidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import React from 'react'

const Toggle = () => {

    const {collapsed, onCollapsed ,onExpand} =  useSidebar((state)=>state)
    const label = collapsed ? "Expand" : "Collapse"
 
    return (
  <>

  {collapsed &&(

<div className='p-3 pl-4 mb-2 flex items-center w-full'>

<Hint label={label} side='right' asChild>

<Button variant="mySecond" onClick={onExpand} className='h-auto ml-auto p-2'>
    <ArrowRightFromLine className='h-5 w-5'/>
</Button>

</Hint>



</div>
  )}

        {!collapsed &&(

        <div className='p-3 pl-4 mb-2 flex items-center w-full'>
            <p className='text-mycolor-500 font-semibold text-lg'>For you</p>

            <Hint label={label} side='right' asChild>

            <Button variant="mySecond" onClick={onCollapsed} className='h-auto ml-auto p-2'>
                <ArrowLeftFromLine className='h-5 w-5'/>
            </Button>

            </Hint>



        </div>
        )}
  
  
  </>
  )
}

export default Toggle