import React from 'react'
import { ColoredTitle, Formwrapper, Registerbtn, Registercontainer, RegisterhereWrpper, Registerinput, Text, Texttwo, Title } from './style'

export default function Registerhere() {
  return (
    <RegisterhereWrpper>
        <div className='container'>
        <Registercontainer>
         <div style={{width:"60%"}}>
         <Title>Register</Title>
        <ColoredTitle >Here</ColoredTitle>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt, 
            voluptatem ipsa optio nesciunt.
        </Text>
        <Texttwo>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Harum numquam reiciendis quae a consectetur voluptates aperiam nemo modi,
             rerum officiis quis nostrum iusto perspiciatis voluptate error totam veniam 
             nisi architecto odio .
        </Texttwo>
         </div>
         <Formwrapper style={{width:"35%"}}>
            <Registerinput type="text" placeholder='First Name'/>
            <Registerinput type="text" placeholder='Last Name' />
            <Registerinput type="number" placeholder='Phone Number' />
            <Registerinput type="email" placeholder='E-mail'/>
         </Formwrapper>
        </Registercontainer>
       <div style={{marginLeft: "47rem", paddingTop:"1rem"}}>
       <Registerbtn>
            Register
        </Registerbtn>
       </div>
        </div>
    </RegisterhereWrpper>
  )
}
