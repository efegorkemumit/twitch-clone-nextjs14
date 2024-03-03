'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon, X } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import queryString from "query-string"

const Search = () => {

   const router= useRouter();
   const [value, setValue] = useState("")

   const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!value) return ;

    const url = queryString.stringifyUrl({
        url:"/search",
        query :{term:value},
    }, {skipEmptyString:true})

    router.push(url)

   }

   const onClear=()=>{
    setValue("");
   }
  return (
   <form onSubmit={onSubmit} className='relative w-full md:w-6/12 lg:w-96 flex items-center'>
    <Input
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    placeholder='Search'
    className='rounded-r-none focus-visible:ring-0  focus-visible:ring-transparent
    focus-visible:ring-offset-0'>
    
    </Input>

    {value && (

        <X onClick={onClear} className='absolute top-2.5 right-16 h-5 w-5 hover:opacity-95 cursor-pointer transition'>


        </X>
    )}

    <Button variant="myButton" className='rounded-l-none' >

        <SearchIcon className='h-5 w-5 text-black'></SearchIcon>
    </Button>



   </form>
  )
}

export default Search