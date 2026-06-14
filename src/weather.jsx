import axios from "axios"
import { useState ,useEffect } from "react"
import "./weather.css"

export const Weather_data = () => {
    const [weather , setWeather] = useState({list:[]})
    const [city , setcity] = useState("adama")
    const [temps, setTemps] =  useState([])
    const ap = "e8dda8cf771d6292c8f62887f2ce38d5"
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ap}&units=metric`
    
    useEffect(()=>{
        axios.get(API).then((response)=>{
            setWeather(response.data)
            setTemps(response.data.list.slice(0,8).map(item => item.main.temp));
            const humdity= response.data.list[0].main.feels_like
            const windSpeed = response.data.list[0].wind.speed;
        }).catch((error)=>{
          console.log(error)
        })
    },[])
    const Cityinput = (e) => {
      setcity(e.target.value)
    }
    const HumAir = () => {
        const humdity = weather.list[0].main.feels_like
        const WSpeed = weather.list[0].wind.speed
        return ({humdity , WSpeed});
        console.log(humdity)
    }
    const DayTemp = () => {
      const temps = weather.list.slice(0, 8).map((item) => item.main.temp);
      setTemps(temps);
      console.log(temps);
    };
    
    return (
      <div className="ALL1">
        <div className="searchDiv">
          <input className="Search" type="text" onChange={Cityinput} />
          <button className="searchB" onClick={DayTemp}>
            search
          </button>
        </div>
        <div className="leftDiv">
          <div className="Today"> </div>
          <div className="Today_pro">
              {temps.map((temp, index) => (
                <p key={index}>{temp}°C</p>
              ))}
            
          </div>
          <br />
          <div className="Air_con">
            {" "}
            <h3>Air condition</h3>
            <h3>humdity: {humdity}</h3>
            <h3>wind speed: {windSpeed}</h3>
          </div>
        </div>
        <div className="SevDAY">
          <h3>7 Day prodcast </h3>
        </div>
      </div>
    );
}