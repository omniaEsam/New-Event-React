import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import Speakersdata from '../../../../design-system/components/Creativespeakers/Speakersdata';
import Creativespeakers from '../../../../design-system/components/Creativespeakers/Creativespeakers';
export default function Slider() {
  return (
    <Swiper
    autoplay={ { 
      delay: 3000 ,
      disableOnInteraction: false
    } }
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={4}
  >
    {Speakersdata.map(item =>{
        return(
          <SwiperSlide  key={item.id}>
          <Creativespeakers img={item.img} alt={item.alt} name={item.name} Job={item.Job}/>
          </SwiperSlide> 
        )
            
        
      })}
  
  </Swiper>
  )
}
