'use client'

import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import UserAvatar from '@/components/user-avatar';
import UnblockButton from './unblockButton';


export type BlockedUsers = {
    id:string;
    userId:string;
    imageUrl:string;
    username:string;
    createAt:string
}

const columns: ColumnDef<BlockedUsers>[] = [

    {
      accessorKey:"username",
      header:({column})=>(
        <Button variant="ghost" 
        onClick={()=> column.toggleSorting(column.getIsSorted()=== "asc")}>

            Username

            <ArrowUpDown className='ml-3 h-4 w-4'></ArrowUpDown>
        </Button>
      ),
      cell:({row})=>(
        <div className='flex items-center gap-2'>
            <UserAvatar
            username={row.original.username}
            imageUrl={row.original.imageUrl}
            ></UserAvatar>

            <span>{row.original.username}</span>


        </div>
      )
    },

    {

        accessorKey:"createAt",
        header:({column})=>(

            <Button variant="ghost" 
            onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>
    
                Date Blocked
    
                <ArrowUpDown className='ml-3 h-4 w-4'></ArrowUpDown>
            </Button>



        ),
      


    },
    {
        id:"acitions",
        cell:({row}) => <UnblockButton userId={row.original.userId}/>
    }
   
   


]

export default columns