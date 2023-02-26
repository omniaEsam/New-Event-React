import React from 'react'
import Overviewcomponent from '../../../../design-system/components/Overview/Overviewcomponent'
import OverviewData from '../../../../design-system/data'
import { Overviewcontainer, Overviewwrapper } from './style'

export default function Overview() {
  return (
    <Overviewwrapper>
        <div className='container'>
        <Overviewcontainer>
         {OverviewData.map(item=>{
         return(
        <Overviewcomponent icon={item.icon} title={ item.title} description={item.description} key={item.id}/>
      )
     })}
        </Overviewcontainer>

    </div>
    </Overviewwrapper>
  )
}
