import React, { useState, useEffect } from 'react';
import axios from "axios";
import Forecast from './Forecast';

function App() {
  const [weather, setWeather] = useState([]);
  const [zipcode, setZipcode] = useState("92701")
  const KEY = "c48220bc58aa270f2b032dac0b7f1917"
  const [city, setCity] = useState("")

  const getWeather = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${KEY}`).then((response) => {
      console.log(response)
      setCity(response.data.city.name)
      setWeather(response.data.list);
    });
  };
  useEffect(() => {
    getWeather();
  }, []);
  function handleClick(event) {
    getWeather()
  }

  function handleChange(event) {
    setZipcode(event.target.value)
  }
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"main-container"}>
          <header className="header-content">{`${city}'s 5 Day Forecast`}</header>
          <input onChange={handleChange} />
          <button onClick={handleClick}>Get Some Weather</button>
          {weather.map((day, i) => {
            if (i % 8 === 0) {
              return (
                <Forecast key={day.dt} temp={day.main.temp} icon={day.weather[0].icon} description={day.weather[0].description} />
              )
            }
            return
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
