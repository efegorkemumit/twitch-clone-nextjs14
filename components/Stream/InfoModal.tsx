'use client'

import React, { ElementRef, useRef, useState, useTransition } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import Hint from '../Hint'
import { UploadDropzone } from '@/lib/uploadthing'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { DialogClose } from '@radix-ui/react-dialog'
import { updateStream } from '@/actions/stream'
import { toast } from 'sonner'


interface InfoModalProps{
    initalName:string;
    initalthumbNailUrl: string | null;
}

const InfoModal = ({initalName,initalthumbNailUrl}:InfoModalProps) => {

    const router = useRouter();
    const closeRef = useRef<ElementRef<"button">>(null);
    const [isPending, startTransition ] = useTransition();

    const [name, setName] = useState(initalName);
    const [thumbnailUrl, setThumbnailUrl] = useState(initalthumbNailUrl);


    const onSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        startTransition(()=>{
            updateStream({name: name})
            .then(()=>{
                toast.success(`successffull `);
                closeRef.current?.click()}
                )
            .catch(()=> toast.error("Something went wrong"))
        })


    }

    const onRemove = ()=>{

        startTransition(()=>{
            updateStream({thumbnailUrl: null})
            .then(()=>{
                toast.success(`Thumbnail Removed `);
                closeRef.current?.click()}
                )
            .catch(()=> toast.error("Something went wrong"))
        })

        router.refresh();

    }

    const onChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit Stream</DialogTitle>
       
      </DialogHeader>

      <form onSubmit={onSubmit} className='space-y-3'>
        <div className='space-y-2'>
            <Label>
            Name

            </Label>
            <Input
            disabled={isPending}
            placeholder='Stream Name'
            onChange={onChange}
            value={name}>
            
            </Input>


        </div>

        <div className='space-y-2'> 
        <Label>

            Thumbnail
        </Label>
        {thumbnailUrl ? (

            <div className='relative aspect-video rounded-2xl overflow-hidden border'>
                <div className='absolute top-2 right-1 z-50'>
                <Hint label="Remove thumbnail" side='left' asChild>
                    <Button type='button' disabled={isPending} onClick={onRemove}>
                        <Trash className='h-4 w-4'/>
                    </Button>

                </Hint>



                    
                    
                    </div>
                    <Image alt="thumbnail" src={thumbnailUrl} fill className='object-cover'/>

            

            </div>



        ):
        
        (
            <div className='rounded-xl border'>
              <UploadDropzone
                endpoint="thumbnailUploader"
                appearance={{
                    label: {
                        color: "#fff" 
                    },
                    allowedContent: {
                        color: "#fff" 
                    }
                }}
                onClientUploadComplete={(res) => {
                    setThumbnailUrl(res?.[0].url);
                    router.refresh();
                    closeRef.current?.click();
                }}
            />



            </div>


        )
        
        }

        <div className='flex justify-between'>
            <DialogClose ref={closeRef} asChild>
                <Button type='button'>Cancel</Button>
            </DialogClose>

            <Button disabled={isPending}
            variant="myButton" type='submit'>

                Save
            </Button>

           
        </div>



        </div>

        
      </form>
     


     
    </DialogContent>
  </Dialog>
  )
}

export default InfoModal