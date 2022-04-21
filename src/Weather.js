import "./Weather.css";

export default function Weather() {
  return (
    <div className="App">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-8 grid-margin stretch-card">
              <div className="card card-weather">
                <div className="card-body" id="background">
                  <div className="weather-date-location">
                    <h3 id="day">Friday</h3>
                    <p className="text-gray">
                      <span id="city" className="weather-location">
                        Las Vegas
                      </span>
                    </p>
                    <form id="search-form">
                      <div className="row">
                        <div className="col-9">
                          <input
                            type="search"
                            placeholder="Search a city...."
                            autoFocus="on"
                            autocomplete="off"
                            id="city-input"
                            className="form-control shadow-sm"
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
                  </div>
                  <div className="weather-data d-flex">
                    <div className="mr-auto">
                      <div className="tempE">
                        <strong id="temperature"></strong>
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
                      <span id="description">Partially Cloudy</span>
                      <br />
                      <span id="humidity">Humidity: 7%</span>
                      <br />
                      <span id="wind"> 6 km/h </span>
                    </div>
                  </div>
                </div>
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
}
