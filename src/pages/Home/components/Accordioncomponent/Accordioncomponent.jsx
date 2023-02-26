import React from 'react';
import Accordion from "./Accordion/Accordion";
import { Accordionwrapper, Deascription, Firstword, Secondword } from './style';
export default function Accordioncompnent() {
  return (
    <div className='container'>
      <Accordionwrapper>
        <Firstword>
            Do You Have
         <Secondword>
            Questions
         </Secondword> ?
        </Firstword>
        <Deascription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus esse.
        </Deascription>
    </Accordionwrapper>
    <Accordion/>
    </div>
  )
}