import React, { useState } from 'react';
import { AccordionData } from './AccordionData';
import { AccordionContant, Contant, H2, Item, P, Title, Wrapper } from './style';

export default function Accordion() {
  const [active , setActive] = useState(null);

  const toggle = (i) =>{
    if(active === i){
      return setActive(null)
    }
    else{
      setActive(i);
    }
  }
  return (
    <Wrapper>
      <AccordionContant> 
        {AccordionData.map((item, i)=>{
          return(
            <Item onClick={ ()=>{toggle(i)}} key={i}>
          <Title>
          <H2>{item.question}</H2>
          <span>{active === i ? "-" : "+" }</span>
          </Title>
          <Contant className={active === i ? "show" : ""}>
            <P>{item.answerOne}</P>
            <P>{item.answerTwo}</P>
          </Contant>
          </Item>
          )
        })}
        </AccordionContant>
      </Wrapper>
  )
}
