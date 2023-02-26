import { H2, Jobs, SpeakersWrapper } from './style';

export default function Creativespeakers({img , name ,Job ,alt}) {
  return (
    <SpeakersWrapper>
          <img src={img} alt={alt} width='100%'/>
          <H2>{name}</H2>
          <Jobs>{Job}</Jobs>
    </SpeakersWrapper>
  )
}
