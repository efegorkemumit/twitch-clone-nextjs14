import React from 'react'
import Wrapper from './Wrapper'
import Toggle from './toggle'
import { getRecommend } from '@/lib/recommend-service'
import Recommend from './Recommend'
import { useSidebar } from '@/store/use-sidebar'

const Sidebar = async() => {

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

export default Sidebar