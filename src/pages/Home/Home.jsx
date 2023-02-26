import Watchvideo from "../../design-system/components/Watchvideo/Watchvideo";
import Aboutus from "./components/Aboutus/Aboutus";
import CreateSpeakersComponent from "./components/Creative speakers/CreativeSpeakersComponent";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import OurprogramsComponent from "./components/OurPrograms/OurprogramsComonent";
import Overview from "./components/Overview/Overview";
import Registerhere from "./components/RegisterHere/Registerhere";

export default function Home() {
  return (
    <div>
        <>
        <Navbar/>
        <Header/>
        <Aboutus/>
        <Overview/>
        <Watchvideo/>
        <CreateSpeakersComponent/>
        <OurprogramsComponent/>
        <Registerhere/>
        </>
    </div>
  )
}
