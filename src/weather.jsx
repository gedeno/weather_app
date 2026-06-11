import axios from "axios"
import { useState } from "react"
import "./weather.css"

export const Weather_data = () => {
    const [weather , setWeather] = useState(null)
    const city = "konso"
    const ap = "e8dda8cf771d6292c8f62887f2ce38d5"
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ap}&units=metric`

    axios.get(API).then((response)=>{
            console.log(response.data)
            setWeather(response.data)
        })

    return(
        <div className="ALL1">
            <div className="searchDiv">
                <input className="Search" type="text" />
                <button className="searchB">search</button>
            </div>
            <div className="leftDiv">
                <div className="Today"> </div>
                <div className="Today_pro"> <h3> Today prodcast</h3> </div><br />
                <div className="Air_con"> <h3>Air condition</h3> </div>
            </div>
            <div className="SevDAY"><h3>7 Day prodcast </h3></div>
        </div>
         
    );
}