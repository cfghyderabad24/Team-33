import React, { useState } from "react";
import clear_icon from "./clear.jpg";
import clouds_icon from "./clouds.jpg";
import drizzle_icon from "./drizzle.jpg";
import humidity_icon from "./humidity.jpg";
import mist_icon from "./mist.jpg";
import rain_icon from "./rain.jpg";
import search_icon from "./search.jpg";
import snow_icon from "./snow.jpg";
import wind_icon from "./wind.jpg";
import { FaSearch } from "react-icons/fa";

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

  const styles = {
    container: {
      width: "607px",
      height: "829px",
      margin: "auto",
      marginTop: "75px",
      borderRadius: "12px",
      backgroundColor: "skyblue",
      textAlign: "center",
    },
    searchIcon: {
      cursor: "pointer",
      borderRadius: "40px",
    },
    topBar: {
      display: "flex",
      justifyContent: "center",
      gap: "14px",
      paddingTop: "60px",
    },
    input: {
      width: "362px",
      height: "78px",
      border: "none",
      outline: "none",
      borderRadius: "40px",
      fontSize: "20px",
      paddingLeft: "40px",
    },
    cloudy: {
      marginTop: "20px",
      width: "200px",
      height: "200px",
    },
    weatherTemp: {
      color: "white",
      fontSize: "120px",
    },
    weatherLocation: {
      color: "white",
      fontSize: "60px",
    },
    dataContainer: {
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
      color: "white",
    },
    element: {
      margin: "auto",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    data: {
      fontSize: "34px",
    },
    text: {
      fontSize: "20px",
    },
    icon: {
      height: "70px",
      width: "70px",
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <input type="text" className="cityInput" placeholder="Search" style={styles.input} />
          <div style={styles.searchIcon} onClick={() => search()}>
            <FaSearch style={{height:'70px',width:'70px'}}/>
          </div>
        </div>
        <div className="weather-image">
          <img src={Wicon} alt="cloudy" style={styles.cloudy} />
        </div>
        <div className="weather-temp" style={styles.weatherTemp}>24°c</div>
        <div className="weather-location" style={styles.weatherLocation}>India</div>
        <div style={styles.dataContainer}>
          <div style={styles.element}>
            <img src={humidity_icon} alt="not available" style={styles.icon} />
            <div className="data" style={styles.data}>
              <div className="humidity-percent">64%</div>
              <div className="text" style={styles.text}>Humidity</div>
            </div>
          </div>
          <div style={styles.element}>
            <img src={wind_icon} alt="not available" style={styles.icon} />
            <div className="data" style={styles.data}>
              <div className="wind-rate">18 km/hr</div>
              <div className="text" style={styles.text}>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
