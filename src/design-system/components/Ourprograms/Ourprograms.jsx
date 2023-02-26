import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description } from "../Overview/styles";
import { IconWrapper, Image, ImageWrapper, Name, OurprogramsWrapper, Roomnumber, Title } from "./style";

export default function Ourprograms({img , alt , time , roomNumber , title , name , description}) {
  return (
    <OurprogramsWrapper>
       <ImageWrapper>
        <Image src={img} alt={alt} />
       </ImageWrapper>
       <div>
       <IconWrapper>
        <div>
        <FontAwesomeIcon size="xs" icon={faClock} /> 
        <span> {time}</span>
        </div>
       <div>
       <FontAwesomeIcon style={{paddingRight:"0 .4rem"}} size="xs" icon={faMapMarker} />
       <span> Room</span> 
       <Roomnumber>{roomNumber}</Roomnumber>
       </div>
       </IconWrapper>
       <Title>{title}</Title>
       <Name>{name}</Name>
       <Description>
        {description}
       </Description>
        </div>
    </OurprogramsWrapper>
  )
}
