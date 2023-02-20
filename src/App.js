import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/main.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
     {/* ============= Overview component=============== */}
    {/* <div style={{display: "flex" , justifyContent:"space-between" , alignItems:"center" , padding:"20px 10px" , background:"#4e4e4e"} }>
    {OverviewData.map(item=>{
      return(
        <Overview icon={item.icon} title={ item.title} description={item.description} key={item.id}/>
      )
     })}

    </div> */}
    {/* ================ Creativespeakers component================ */}
    {/* <div style={{display:"flex"}}>
      {Speakersdata.map(item =>{
        return(
          <Creativespeakers img={item.img} alt={item.alt} name={item.name} Job={item.Job} key={item.id}/>
        )
      })}
    </div> */}
{/* ================= Ourprograms component =============*/}
    {/* {Ourprogramsdata.map(item =>{
      return(
        <Ourprograms img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} title={item.title} name={item.name} description={item.description} key ={item.id}/>
      )
    })} */}
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
