import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";
import WeatherDescriptin from "./WeatherDescription";
import WeatherForcast from "./WeatherForcast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "740cff2b03b6ff4fa9525993b36f2fc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    /*is false by defualt */ return (
      <div className="App">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-lg-8 grid-margin stretch-card">
                <div className="card card-weather">
                  <div className="card-body" id="background">
                    <div className="weather-date-location">
                      <h3 id="day">
                        <FormattedDate date={weatherData.date} />
                      </h3>
                      <p className="text-gray">
                        <span id="city" className="weather-location">
                          {weatherData.city}
                        </span>
                      </p>
                      <form onSubmit={handleSubmit} id="search-form">
                        <div className="row">
                          <div className="col-9">
                            <input
                              type="search"
                              placeholder="Search a city...."
                              autoFocus="on"
                              autocomplete="off"
                              id="city-input"
                              className="form-control shadow-sm"
                              onChange={handleCityChange}
                            />
                          </div>
                          <div className="col-3">
                            <input
                              type="submit"
                              value="Search"
                              className="form-control btn btn-primary shadow-sm"
                            />
                          </div>
                        </div>
                      </form>
                      <img
                        src={weatherData.icon}
                        alt={weatherData.description}
                        id="icon"
                        // style="float: right"
                        width="150"
                        height="150"
                      />
                    </div>
                    <WeatherDescriptin data={weatherData} />
                  </div>
                  <WeatherForcast />
                </div>
                <p>
                  <a href="https://github.com/abeveryday/react-weather-app">
                    Open-source code
                  </a>
                  By: Ashley B
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
