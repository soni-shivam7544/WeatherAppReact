import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "mathura",
        feelsLike: 34.34,
        temp: 34.34,
        tempMin: 24.45,
        tempMax: 34.23,
        humidity: 34,
        weather: "haze",
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>  
        </div>
    )
}