import Creativespeakers from './design-system/components/Creativespeakers/Creativespeakers';
import Speakersdata from './design-system/components/Creativespeakers/Speakersdata';



function App() {
  return (
    <div className="App">
     
    {/* <div style={{display: "flex" , justifyContent:"space-between" , alignItems:"center" , padding:"20px 10px" , background:"#4e4e4e"} }>
    {OverviewData.map(item=>{
      return(
        <Overview icon={item.icon} title={ item.title} description={item.description} key={item.id}/>
      )
     })}

    </div> */}
    <div style={{display:"flex"}}>
      {Speakersdata.map(item =>{
        return(
          <Creativespeakers img={item.img} alt={item.alt} name={item.name} Job={item.Job} key={item.id}/>
        )
      })}
    </div>

    </div>
  );
}

export default App;
