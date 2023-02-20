import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper, Image, ImageWrapper, OurprogramsWrapper } from "./style";

export default function Ourprograms({img , alt , time , roomNumber , title , name , description}) {
  return (
    <OurprogramsWrapper>
       <ImageWrapper>
        <Image src={img} alt={alt} />
       </ImageWrapper>
       <div>
       <IconWrapper>
        <div>
        <FontAwesomeIcon size="xs" icon={faClock} /> {time}
        </div>
       <div>
       <FontAwesomeIcon size="xs" icon={faMapMarker} /><span> Room</span> {roomNumber}
       </div>
       </IconWrapper>
       <h2>{title}</h2>
       <span>{name}</span>
       <p>
        {description}
       </p>
        </div>
    </OurprogramsWrapper>
  )
}
