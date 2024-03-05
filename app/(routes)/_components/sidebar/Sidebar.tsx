import React from 'react'
import Wrapper from './Wrapper'
import { getRecommend } from '@/lib/recommend-service'
import { useSidebar } from '@/store/use-sidebar'
import { Recommend, RecommendSkeleton } from './Recommend'
import { Toggle } from './toggle'

export const Sidebar = async() => {

  const recommend = await getRecommend();



  return (
    <Wrapper>
      <Toggle/>

      <div>

        <Recommend data={recommend}/>
      </div>
    </Wrapper>
  )
}

export const SidebarSkeleton = ()=>{
  return(
    <aside
    className="fixed left-0 
    flex-col h-full w-60 bg-mycolor-200 
    border-r-2 border-mycolor-400 z-50">
      <RecommendSkeleton/>



    </aside>
  )
}

