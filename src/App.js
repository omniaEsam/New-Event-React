import Overview from './design-system/components/Overview';
import { faUserGroup , faClock , faMicrophone} from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
     <Overview icon={faUserGroup} title={ "650 ipsum dolor"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit, nesciunt quam omnis minus rerum dolor quia magni porro obcaecati."}/>
     {/* <Overview icon={faClock} title={ "24 ipsum dolor"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit, nesciunt quam omnis minus rerum dolor quia magni porro obcaecati."}/>
     <Overview icon={faMicrophone} title={ "11 ipsum dolor"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit, nesciunt quam omnis minus rerum dolor quia magni porro obcaecati."}/> */}

    </div>
  );
}

export default App;
