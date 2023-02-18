import { SpeakersWrapper } from './style';

export default function Creativespeakers({img , name ,Job ,alt}) {
  return (
    <SpeakersWrapper>
          <img src={img} alt={alt} width='100%'/>
          <h2>{name}</h2>
          <span>{Job}</span>
    </SpeakersWrapper>
  )
}
