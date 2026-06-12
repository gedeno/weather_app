import axios from "axios"
import { useState ,useEffect } from "react"
import "./weather.css"

export const Weather_data = () => {
    const [weather , setWeather] = useState({list:[]})
    const city = "konso"
    const ap = "e8dda8cf771d6292c8f62887f2ce38d5"
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ap}&units=metric`

    useEffect(()=>{
        axios.get(API).then((response)=>{
            setWeather(response.data)
        })
    },[])
    

    const HumAir = () => {
        const humdity = weather.list[0].main.feels_like
        const WSpeed = weather.list[0].wind.speed
        return ({humdity , WSpeed});
        console.log(humdity)
    }

    const dayTemp = weather.list
    let j = 0
    
    for(let i = 0; i < 8; i++){
        console.log(dayTemp[i].main.temp)
        

    }

    return (
      <div className="ALL1">
        <div className="searchDiv">
          <input className="Search" type="text" />
          <button className="searchB">search</button>
        </div>
        <div className="leftDiv">
          <div className="Today"> </div>
          <div className="Today_pro">
            <h3> Today prodcast</h3>
          </div>
          <br />
          <div className="Air_con">
            {" "}
            <h3>Air condition</h3>
          </div>
        </div>
        <div className="SevDAY">
          <h3>7 Day prodcast </h3>
        </div>
      </div>
    );
}