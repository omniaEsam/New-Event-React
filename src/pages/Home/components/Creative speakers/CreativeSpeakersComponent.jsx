import Slider from './Slider';
import { Create, CreateSpeakerswrapper, Deascription, Sliderwrapper, Speakers } from './style';

export default function CreateSpeakersComponent() {
  return (
    <CreateSpeakerswrapper>
      <div className='container'>
      <Create> Create</Create>
      <Speakers>Speakers</Speakers>
      <Deascription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quasi quaerat ab
      </Deascription>
     <Sliderwrapper>
     <Slider/>
     </Sliderwrapper>
      </div>
    </CreateSpeakerswrapper>
  )
}
