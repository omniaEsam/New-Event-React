import { Deascription, Our, Ourprogramswrapper, Programs, Tapswrapper } from "./style";
import Taps from "./Taps";

export default function OurprogramsComponent() {
  return (
    <div className="container">
    <Ourprogramswrapper>
      
      <Our> Our</Our>
      <Programs>Programs</Programs>
      <Deascription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur esse delectus perferendis ducimus excepturi nobis. </Deascription>
      <Tapswrapper>
        <Taps/>
      </Tapswrapper>
     
    </Ourprogramswrapper>
    </div>
  )
}
