import React from "react";

export default function WeatherDescriptin(props) {
  return (
    <div className="weather-data d-flex">
      <div className="mr-auto">
        <div className="tempE">
          <strong id="temperature">{Math.round(props.data.temperature)}</strong>
          <span className="units"></span>
          <a href="/" id="celsius-link" className="active">
            {" "}
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheit-link">
            {" "}
            °F
          </a>{" "}
          <span />
        </div>
        <span id="description">{props.data.description}</span>
        <br />
        <span id="humidity">Humidity: {props.data.humidity}%</span>
        <br />
        <span id="wind"> Wind: {props.data.wind} km/h </span>
      </div>
    </div>
  );
}
