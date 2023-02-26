import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/main.css";
import Home from "./pages/Home";

function App() {
  return (
  <div className="App">
   

{/* ===============Oursponsors component============= */}
    {/* <div style={{display:"flex" , gap:'1rem'}}>
    {OursponsorsData.map(item =>{
      return(
        <Oursponsors img={item.img} alt={item.alt} key={item.id} />
      )
    })}
    </div> */}
       <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
        </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
