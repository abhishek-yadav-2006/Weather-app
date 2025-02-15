import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState( {
            city: "Delhi",
            feelslike: 23.33,
            temp: 23.34,
            humidity: 2.34,
            maxtemp : 34.43,
            mintemp: 12.34,
            description: "hazy"
        
    })

    let updateInfo = (result)=>{
      setWeatherInfo(result)
    }
    return (
    
    <div style={{textAlign: "center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo= {updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
}