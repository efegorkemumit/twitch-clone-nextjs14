import { Volume1, Volume2, VolumeX } from 'lucide-react';
import React from 'react'
import Hint from '../Hint';
import { Slider } from '../ui/slider';

interface VolumeControlProps{
    onToggle: ()=>void;
    onChange: (value:number)=>void;
    value:number
}

const VolumeControl = ({onChange,onToggle,value}:VolumeControlProps) => {

    const isMuted = value ===0;
    const isAboveHalf = value >50;

    let Icon = Volume1;

    if(!isMuted){
        Icon= VolumeX
    }else if(isAboveHalf){
        Icon=Volume2
    }

    const label = isMuted ? "Unmute": "Mute"

    const handleChange = (value:number[])=>{
        onChange(value[0])
    }
  return (
    <div className='flex items-center gap-2'>
        <Hint label={label} asChild>
            <button onClick={onToggle}>
                <Icon className='h-6 w-6'></Icon>
            </button>
        </Hint>

        <Slider className='w-48'
        onValueChange={handleChange}
        value={[value]}
        max={100}
        step={1}>


        </Slider>



    </div>
  )
}

export default VolumeControl