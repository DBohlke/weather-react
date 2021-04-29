import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let showWeather = {
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 36,
    description: "Clear",
    high: 41,
    low: 27,
    wind: 7,
    realFeel: 30,
    city: "Rochester",
    date: "Monday, April 19",
    time: "10:05pm",
  };

  return (
    <div className="container">
      <div className="card-group" id="current-conditions">
        <div className="card" id="current-forecast">
          <div className="box">
            <img
              className="img-responsive"
              id="icon"
              src={showWeather.imgUrl}
              alt="Clear"
            />
            <div className="img-title">
              <text className="currently" id="temperature">
                {showWeather.temperature}
              </text>
              <span id="unit">°F</span>
              <h3 id="description">{showWeather.description}</h3>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title" id="today">
              Today
            </h5>
            <p className="current-forecast-paragraph">
              H: <span id="max-temp">{showWeather.high}</span>
              <span id="max-unit">°F</span> L:
              <span id="min-temp"> {showWeather.low}</span>
              <span id="min-unit">°F </span>
              <a href="/" id="unit-convert">
                <span id="unit-link">°C</span>
              </a>
              <br />
              <text id="wind">Wind: {showWeather.wind} MPH</text> |{" "}
              <text id="real-feel">Feels like: {showWeather.realFeel}</text>
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
              {showWeather.city}
            </h5>
            <p className="card-text" id="location-paragraph">
              <text id="date">{showWeather.date}</text>
              <br />
              <text id="time">{showWeather.time}</text>
            </p>
            <br />
            <small>
              <a href="https://openweathermap.org/">Get Extended Forecast</a>
            </small>
          </div>
        </div>
      </div>
      <div className="tag-line">
        <a href="https://github.com/DBohlke/weather-app">Open-source code,</a>
        by Dani Bohlke 🐱
      </div>
    </div>
  );
}
