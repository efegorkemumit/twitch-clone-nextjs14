import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HintProps{
    label:string;
    children:React.ReactNode;
    asChild?:boolean;
    side?:"top" | "bottom" | "left" | "right";
    align?:"start" | "center" | "end"

}


const Hint = ({align, children, label, side, asChild}:HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={asChild}>
       {children}
        </TooltipTrigger>
        <TooltipContent side={side}  align={align}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Hint