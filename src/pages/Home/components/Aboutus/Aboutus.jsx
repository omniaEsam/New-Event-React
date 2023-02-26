import { Aboutuswrapper ,Span , P, Divimage, Divcontant } from "./style"
import about from "../../../../shared/assests/imags/overview-img.jpg" ;
export default function Aboutus() {
  return (
    <div className='container'>
        <Aboutuswrapper>
         <Divcontant>
            <Span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                 Mollitia nostrum .
            </Span>
            <P>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolor quas saepe est error porro tempora, fugiat vitae deleniti iste veniam in dolorum recusandae
                 sit distinctio dolorem.
            </P>
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas voluptas animi eligendi debitis! Voluptatum laudantium officiis eius impedit perferendis
                 est saepe voluptatem .
            </P>
         </Divcontant>
         <Divimage>
            <img width='100%' src={about} alt="about-us" />
         </Divimage>
        </Aboutuswrapper>
    </div>
  )
}
