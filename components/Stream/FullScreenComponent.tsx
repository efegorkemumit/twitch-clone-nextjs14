import { Maximize, Minimize } from 'lucide-react';
import React from 'react'
import Hint from '../Hint';

interface FullScreenComponentProps{
    isFullscreen :boolean;
    onToggle:()=>void;
}

const FullScreenComponent = ({isFullscreen,onToggle}:FullScreenComponentProps) => {
  
    const Icon = isFullscreen ? Minimize : Maximize;

    const label = isFullscreen ? "Exit FullScreen" : "Enter fullScreen"
  
    return (
    <div className='flex items-center justify-center gap-2'>
        <Hint label={label} asChild>
            <button onClick={onToggle} className='text-mycolor-300'>
                <Icon className='h-8 w-8'/>

            </button>

        </Hint>



    </div>
  )
}

export default FullScreenComponent