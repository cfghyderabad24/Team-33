import React, { useState } from "react";
import clear_icon from "../Assets/clear.png";
import clouds_icon from "../Assets/clouds.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import mist_icon from "../Assets/mist.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import "./WeatherApp.css";
const WeatherApp = () => {
  let api_key = "";
  const [Wicon, setWicon] = useState(clouds_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/hr";
    temperature[0].innerHTML = data.main.temp + " °c";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather.icon === "01n") {
      setWicon(clear_icon);
    } else if (data.weather[0].icon === "02d" || data.weather.icon === "02n") {
      setWicon(clouds_icon);
    } else if (data.weather[0].icon === "03d" || data.weather.icon === "03n") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "04d" || data.weather.icon === "04n") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "09d" || data.weather.icon === "09n") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "10d" || data.weather.icon === "10n") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "13d" || data.weather.icon === "13n") {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <div className="search_icon" onClick={() => search()}>
            <img
              src={search_icon}
              width="70px"
              height="70px"
              alt="Enter city name"
            />
          </div>
        </div>
        <div className="weather-image">
          <img src={Wicon} alt="cloudy" className="cloudy" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">India</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="not available" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="not available" className="icon" />
            <div className="data">
              <div className="wind-rate">18 km/hr</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
