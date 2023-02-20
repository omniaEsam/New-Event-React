import Navitems from './Navitems';
import { Event, Linkwrapper, NavbarWrapper, Navcontainer, Navtitle } from './style';

export default function Navbar() {
  return (
    <NavbarWrapper>
              <div className='container'>
                <Navcontainer>
                 <div>
                  <Navtitle>New <Event>Event</Event></Navtitle>
                 </div>
                 <Linkwrapper>
                 <Navitems/>
                 </Linkwrapper>
                  </Navcontainer> 
              </div>
    </NavbarWrapper>
  )
}
