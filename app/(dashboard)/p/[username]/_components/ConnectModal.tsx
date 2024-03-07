'use client'

import React, { ElementRef, useRef, useState, useTransition } from 'react'
import { Button } from "@/components/ui/button"
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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { AlertCircle } from "lucide-react"
 
  import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IngressInput } from 'livekit-server-sdk'
import { createIngress } from '@/actions/ingress'
import { useStep } from 'usehooks-ts'
import { toast } from 'sonner'


const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP



const ConnectModal = () => {

  const closeRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();

  const [ingressType, setIngressType] = useState<IngressType>(RTMP)
 
  const onSubmit = () => {
    startTransition(() => {
        createIngress(parseInt(ingressType))
        .then(() => {
            toast.success(`Ingresses Created`);
            closeRef?.current?.click();
        })
        .catch(() => toast.error("Something went wrong"));
    });
};


  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Generate Connection</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Generate Connection</DialogTitle>
            </DialogHeader>


 <Select  
 disabled={isPending}
 value={ingressType}
 onValueChange={(value)=>setIngressType(value)}>
      <SelectTrigger className="w-full   ">
        <SelectValue placeholder="Ingress Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={RTMP}>RTMP</SelectItem>
          <SelectItem value={WHIP}>WHIP</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Alert variant="warning">
      <AlertCircle className="h-4 w-4  " />
      <AlertTitle className='text-yellow-600 text-xl font-semibold'>Error</AlertTitle>
      <AlertDescription>
This action will reset all active streams using curren connection
      </AlertDescription>
    </Alert>



     
      <DialogFooter>
        <DialogClose ref={closeRef} asChild>
        <Button type="submit">Cancel</Button>

        </DialogClose>

        <Button disabled={isPending} onClick={onSubmit} variant="myButton">Generate</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default ConnectModal