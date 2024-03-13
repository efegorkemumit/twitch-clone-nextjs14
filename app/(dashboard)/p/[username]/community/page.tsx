import React from 'react'
import DataTable from './_components/data-table'
import columns from './_components/columns'
import { getBlockUsers } from '@/lib/block-service'
import { format } from 'date-fns'

const CommunityPage = async() => {

    const blockedUsers = await getBlockUsers();

    const formatedData = blockedUsers.map((block)=>({
        ...block,
        userId:block.blocked.id,
        imageUrl:block.blocked.imageUrl,
        username :block.blocked.username,
        createAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),


    }))



  return (
    <div>

        <DataTable columns={columns} data={formatedData}/>
    </div>
  )
}

export default CommunityPage