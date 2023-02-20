import { useLocation } from 'react-router-dom';
import theme from '../../../../design-system/config';
import links from './links';
import Navlinks from './Navlinks';

export default function Navitems() {
    const items = links();
    const route = useLocation() ;
  return  items.map((links , index )=>{
    return(
      <Navlinks color= {route.pathname === links.navLink ? theme.active : theme.white}
       navLink={links.navLink} 
        navText={links.navText} key={index}/>
    );
  })
}

