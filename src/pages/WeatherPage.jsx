import React, { useState, useEffect } from "react";
import { getWeatherData } from "../data/weatherapi";
import { WeatherCard } from "../components/WeaterCard";

export function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Moscow');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.massage);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Погода</h1>
      <div className="input-form">
        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Введите город" />
        <button type="button" onClick={() => getData()}>
          Поиск
        </button>
      </div>
      <div className="container">
        {loading && <p>Loading ...</p>}
        {weatherData && 
        <div className="info">
        <h3>{weatherData.city.name}</h3>
        {[ ...weatherData.list ].map(element => <WeatherCard element={element} key={ element.dt }/>)}
        </div>
        }
      </div>
    </div>
  );
}
