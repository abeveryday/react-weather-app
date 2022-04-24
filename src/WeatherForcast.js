import React from "react";

export default function WeatherForcast() {
  return (
    <div className="card-body p-0">
      <div className="d-flex weakly-weather">
        <div className="weakly-weather-item">
          <p className="mb-0" id="day-one"></p>
          <i className="mdi mdi-weather-cloudy"></i>
          <p className="mb-0" id="forcast-one"></p>
        </div>
        <div className="weakly-weather-item">
          <p className="mb-1" id="day-two"></p>
          <i className="mdi mdi-weather-hail"></i>
          <p className="mb-0" id="forcast-two"></p>
        </div>
        <div className="weakly-weather-item">
          <p className="mb-1" id="day-three"></p>
          <i className="mdi mdi-weather-partlycloudy"></i>
          <p className="mb-0" id="forcast-three"></p>
        </div>
        <div className="weakly-weather-item">
          <p className="mb-1" id="day-four"></p>
          <i className="mdi mdi-weather-pouring"></i>
          <p className="mb-0" id="forcast-four"></p>
        </div>
        <div className="weakly-weather-item">
          <p className="mb-1" id="day-five"></p>
          <i className="mdi mdi-weather-pouring"></i>
          <p className="mb-0" id="forcast-five"></p>
        </div>
        <div className="weakly-weather-item">
          <p className="mb-1" id="day-six"></p>
          <i className="mdi mdi-weather-snowy-rainy"></i>
          <p className="mb-0" id="forcast-six"></p>
        </div>
        <div className="weakly-weather-item">
          <p className="mb-1" id="day-seven"></p>
          <i className="mdi mdi-weather-snowy"></i>
          <p className="mb-0" id="forcast-seven"></p>
        </div>
      </div>
    </div>
  );
}
