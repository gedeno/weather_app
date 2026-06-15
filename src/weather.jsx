import axios from "axios"
import icon1 from "./assets/11n.png"
import { useState ,useEffect } from "react"
import "./weather.css"

export const Weather_data = () => {
    const [weather , setWeather] = useState({list:[{main:{temp:0}, wind:{speed:0}, weather:[]}]})
    const [city , setcity] = useState("adama")
    const [temps, setTemps] =  useState([])
    const [time ,setTime] = useState([])
    const [humdity , sethumdity] = useState(0)
    const [Wspeed , setWspeed] = useState(0)
    const [icon , setIcon] = useState([])
    const [prodcustC , setprodcustC] = useState([])
    const [prodcustI , setprodcustI] = useState([])
    const ap = "e8dda8cf771d6292c8f62887f2ce38d5"
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ap}&units=metric`
    
    useEffect(()=>{
        axios.get(API).then((response)=>{
            setWeather(response.data)
            
        }).catch((error)=>{
          console.log(error)
        })
    },[city])
    const Cityinput = (e) => {
      setcity(e.target.value)
    }
    
    const DayTemp = () => {
      axios.get(API).then((response)=>{
        console.log(response.data)
        }).catch((error)=>{
          console.log(error)
        })
      const temps = weather.list.slice(0, 8).map((item) => item.main.temp)
      const time = weather.list.slice(0,8).map(item => item.dt_txt.slice(11,16))
      const humdity = weather.list[0].main.feels_like
      const WSpeed = weather.list[0].wind.speed
      const icon = weather.list.slice(0,8).map(item => `${item.weather[0].icon}.png`)
      if (!weather.list) return;
      let prodcustC = []
      for(let i = 0; i < 48; i+=7){
        prodcustC.push(weather.list[i]?.weather[0]?.main)
       
      }
      let prodcustI = []
      for(let j = 0; j < 48; j+=7){
        prodcustI.push(`${weather.list[j]?.weather[0]?.icon}.png`)
      }
      

      
      setTemps(temps);
      setTime(time);
      setWspeed(WSpeed)
      sethumdity(humdity)
      setIcon(icon)
      console.log(prodcustC)
      console.log(prodcustI)
    };

    return (
      <div className="ALL1">
        <div className="searchDiv">
          <input
            value={city}
            className="Search"
            type="text"
            onChange={Cityinput}
          />
          <button className="searchB" onClick={DayTemp}>
            search
          </button>
        </div>
        <div className="leftDiv">
          <div className="Today"> </div>
          <div className="Today_pro">
            {time.map((time, index) => (
              <p key={index}>{time}</p>
            ))}
            {icon.map((i, index) => (
              <img src={`/src/assets/${i}`} alt="" />
            ))}
            {temps.map((temp, index) => (
              <p key={index}>{temp}°C</p>
            ))}
          </div>
          <br />
          <div className="Air_con">
            <div className="air_con">
              <div className="air">
                  <img className="icon" src="/src/assets/temp.png" alt="" />
                  <h2 >humdity:{humdity}°</h2>
                  
               
              </div>
              <div className="air">
                <img src="/src/assets/wind.png" alt="" />
                <h2>wind speed:{Wspeed}Km/h</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="SevDAY">
          <h3>7 Day prodcast </h3>
        </div>
      </div>
    );
}