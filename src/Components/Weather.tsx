import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .weather-img {
    width: 100%;
  }
  .weather-main {
    font-size: 1.5em;
  }
  .weather-temp {
    font-size: 2em;
  }
`;

interface Data {
  currentTemp: number;
  weatherIcon: string;
  weatherMain: string;
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<Data>();
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=fa617d936fde71460aa6aae2656168d1")
      .then((res) => res.json())
      .then((data) => {
        const currentTemp = data.main.temp;
        const weatherIcon = data.weather[0].icon;
        const weatherMain = data.weather[0].main;
        setWeatherData({ currentTemp, weatherIcon, weatherMain });
      });
  }, []);
  return (
    <WeatherContainer>
      <h3 className="weather-text"> 현재 날씨</h3>
      {weatherData ? (
        <img
          className="weather-img"
          src={`https://openweathermap.org/img/wn/${weatherData?.weatherIcon}@2x.png`}
          alt="weatherIcon"
        />
      ) : null}
      {weatherData ? <div className="weather-main">{weatherData.weatherMain}</div> : null}
      {weatherData ? <div className="weather-temp">{(weatherData?.currentTemp - 273.15).toFixed(1)}℃ </div> : null}
    </WeatherContainer>
  );
};

export default Weather;
