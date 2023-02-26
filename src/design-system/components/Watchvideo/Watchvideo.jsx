import { Divcontant, P, Span, Watchvideowrapper ,DivVideo ,Subtitle} from "./style";

export default function Watchvideo() {
  return (
    <div className="container">
        <Watchvideowrapper>
        <Divcontant>
            <Span>
                WATCH VIDEO
            </Span>
            <Subtitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolor quas saepe est error porro tempora, fugiat vitae deleniti iste veniam.
            </Subtitle>
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas voluptas animi eligendi debitis! Voluptatum laudantium officiis eius impedit perferendis
                 est saepe voluptatem .
            </P>
         </Divcontant>
         <DivVideo>
            <iframe 
            width= "100%"
            height= "350px"
            src="http://www.youtube.com/embed/XDPwXQjAlB0" title="web-design video">  </iframe>
         </DivVideo>

        </Watchvideowrapper>
        </div>
  )
}
