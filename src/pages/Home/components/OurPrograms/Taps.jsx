import { useState } from 'react';
import Ourprograms from "../../../../design-system/components/Ourprograms/Ourprograms";
import { tab1, tab2, tab3 } from "../../../../design-system/components/Ourprograms/Ourprogramsdata";
import theme from '../../../../design-system/config';
import { Line, Span, Wrapper } from './style';

export default function Taps() {
  const [ tab , setTab] = useState("tab1");

  const switchTap = (tab)=>{
       setTab(tab);
  }
  return (
    <>
     <Wrapper>
        <Span style={{color: tab==="tab1" ? theme.primary : "" , borderBottom:  tab==="tab1" ? `1px solid ${theme.black} `:"" }}
         onClick={()=> switchTap("tab1") }>First Day</Span>
        <Span style={{color: tab==="tab2" ? theme.primary : "" , borderBottom:  tab==="tab2" ? `1px solid ${theme.black}`: ""}}
        onClick={()=> switchTap("tab2") }>Second Day</Span>
        <Span style={{color: tab==="tab3" ? theme.primary : "" ,  borderBottom:  tab==="tab3" ? `1px solid ${theme.black}`: ""}}
         onClick={()=> switchTap("tab3") }>Third Day</Span>
     </Wrapper>
     <Line/>
     {tab=== "tab2" ?
     tab2.map((item)=>{
      return (
        <Ourprograms img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} title={item.title} name={item.name} description={item.description} key ={item.id}/>
      )
      
     })
      : tab=== "tab3" ? 
     tab3.map((item)=>{
      return(
        <Ourprograms img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} title={item.title} name={item.name} description={item.description} key ={item.id} />

      )
    }) :
    tab1.map((item)=>{
      return(
        <Ourprograms img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} title={item.title} name={item.name} description={item.description} key ={item.id} />
      )
    })
    }
    </>
   
  )
}
