import React,{ useState } from 'react'
import axios from "axios"
let baseUrl = ''
if(window.location.href.split(":")[0] === "http"){
  baseUrl = "http://localhost:5001/"
}
function App() {
  const [weatherData, setWeather] = useState(null)
  const [cityName, setCityName] = useState('')

  // URL parameters example
  // const weahther =() =>{
  //   axios
  //   .get(`${baseUrl}weather/${cityName}`)
  //   .then((res)=>{
  //       setWeather(res.data)
  //       console.log(res.data);
  //   })
  //   .catch((err)=>{
  //      console.log(err);
  //   })
  // }

  // query parameters Example
  const weahther =() =>{
    axios
    .get(`${baseUrl}weather?city=${cityName}`)
    .then((res)=>{
        setWeather(res.data)
        console.log(res.data);
    })
    .catch((err)=>{
       console.log(err);
    })
  }
  return (
    <>
    <input type='text' placeholder='enter city name' onChange={(e)=>setCityName(e.target.value)}/>
    <button onClick={weahther}>to get weather</button>
    {(weatherData === null )?null:(
      <div>
        cityName : {weatherData.city}
        <br/>
        Temperature : {Math.round(weatherData.temperature)}
        <br/>
        min : {Math.round(weatherData.min)}
        <br/>
        max : {Math.round(weatherData.min)}
        <br/>
        TIme : {weatherData.time}
        
      </div>
    )}
    </>
  );
}

export default App;
