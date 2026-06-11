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
        <>
        <div className="Fdiv"> weather
         </div>
         <div className="Fdiv"> weather
         </div>

        </>
        
        
         
    );
}