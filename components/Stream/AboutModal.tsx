'use client'

import React, { useRef, useState, useTransition } from 'react'
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { updateUser } from '@/actions/user'
import { toast } from 'sonner'


interface AboutModalProps{
    initalValue:string | null
}

const AboutModal = ({initalValue}:AboutModalProps) => {

    const closeRef = useRef<ElementRef<"button">>(null);
    const [isPending, startTransition ] = useTransition();

    const [value, setValue] = useState(initalValue);

    const onSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        startTransition(()=>{
            updateUser({bio: value})
            .then(()=>{
                toast.success(`User bio success `);
                closeRef.current?.click()}
                )
            .catch(()=> toast.error("Something went wrong"))
        })


    }
    

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit bio</DialogTitle>
     
      </DialogHeader>
     <form onSubmit={onSubmit}>

<Textarea 
onChange={(e)=>setValue(e.target.value)}
value={value}
disabled={isPending}
 placeholder="Type your message here." />

 <div className='h-10'></div>
 <div className='flex justify-between'>
<DialogClose ref={closeRef} asChild>
                <Button type='button'>Cancel</Button>
            </DialogClose>

            <Button disabled={isPending}
            variant="myButton" type='submit'>

                Save
            </Button>

            </div>
     </form>
     
    </DialogContent>
  </Dialog>
  )
}

export default AboutModal