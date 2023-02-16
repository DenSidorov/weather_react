import React from "react"

export function WeatherCard({element}) {

    return (
        <div>          
          <div className="card">
            <div className="data"><p>{new Date(element.dt_txt).toLocaleString()}</p></div>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`}
                alt=""
              />
            </div>
            <div className="temperature">
              <h1>{element.main.temp}&deg;C</h1>
              <div className="weather-details">
                <h4>
                  {element.weather[0].description.toUpperCase()}
                </h4>
                <h4>Ощущается как: {element.main.feels_like}</h4>
                <h4>
                  Мин: {element.main.temp_min}&deg;C | Макс:{" "}
                  {element.main.temp_max}&deg;C | Влажность:{" "}
                  {element.main.humidity}%
                </h4>
              </div>
            </div>
          </div>
        </div>
    )
};