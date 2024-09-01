import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function displayTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      precipitation: response.data.precipitation.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <h1> {city} </h1>
        {/* <h2>Thursday 15:12</h2> */}
        <h3>{weather.description}</h3>
        <h2>
          {" "}
          <img src={weather.icon} alt={weather.description} />
          {""}
          {Math.round(weather.temperature)} °F
        </h2>
        <ul>
          <li>Wind: {Math.round(weather.wind)}mph</li>
          <li>Precipitation: {Math.round(weather.precipitation)}%</li>
          <li>Humidity: {Math.round(weather.humidity)}</li>
        </ul>
        <br />
        <div>
          <ul>
            <li>
              Mon
              <br />
              <img src={weather.icon} alt={weather.description} />
            </li>
            <li>
              Tue
              <br />
              <img src={weather.icon} alt={weather.description} />
            </li>
            <li>
              Wed
              <br />
              <img src={weather.icon} alt={weather.description} />
            </li>
            <li>
              Thurs
              <br />
              <img src={weather.icon} alt={weather.description} />
            </li>
            <li>
              Fri
              <br />
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
