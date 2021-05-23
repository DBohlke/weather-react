import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    

    setWeatherData({
      ready: true,
      icon: "http://openweathermap.org/img/wn/04d@2x.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card-group" id="current-conditions">
          <div className="card" id="current-forecast">
            <div className="box">
              <img
                className="img-responsive"
                id="icon"
                src={weatherData.icon}
                alt={weatherData.description}
              />
              <div className="img-title">
                <text className="currently" id="temperature">
                  {Math.round(weatherData.temperature)}
                </text>
                <span id="unit">°F</span>
                <h3 id="description">{weatherData.description}</h3>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title" id="today">
                Today
              </h5>
              <p className="current-forecast-paragraph">
                H: <span id="max-temp">{Math.round(weatherData.high)}</span>
                <span id="max-unit">°F</span> L:
                <span id="min-temp">{Math.round(weatherData.low)}</span>
                <span id="min-unit">°F </span>
                <a href="/" id="unit-convert">
                  <span id="unit-link">°C</span>
                </a>
                <br />
                <text id="wind">
                  Wind: {Math.round(weatherData.wind)} MPH
                </text>{" "}
                |{" "}
                <text id="real-feel">
                  Feels like: {Math.round(weatherData.realFeel)}
                </text>
                <span id="real-feel-unit">°F</span>
              </p>
            </div>
          </div>
          <div className="card" id="city-search">
            <div className="card-body">
              <form id="search-input">
                <input
                  type="text"
                  placeholder="Enter City"
                  autoComplete="off"
                  autoFocus="on"
                  id="search-text-input"
                />
                <input
                  type="submit"
                  value="Search"
                  className="search-button"
                  id="search-button"
                />
              </form>
              <input
                type="submit"
                value="Current Location"
                className="current-location-button"
                id="current-location-button"
              />
              <h5 className="card-title" id="city-state">
                {weatherData.city}
              </h5>
              <p className="card-text" id="location-paragraph">
                <FormattedDate date={weatherData.date} />
              </p>
              <br />
              <small>
                <a href="https://openweathermap.org/" rel="noreferre">
                  Get Extended Forecast
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="tag-line">
          <a href="https://github.com/DBohlke/weather-react" rel="noreferrer">
            Open-source code,{" "}
          </a>
          by Dani Bohlke 🐱
        </div>
      </div>
    );
  } else {
    const apiKey = "18646baba3751e0ddacc065cb85e47a6";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
