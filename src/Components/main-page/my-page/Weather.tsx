import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 3% 0 0 3%;
  background-color: #ba90c6;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: 30%;
    position: relative;
    .weather-text {
      width: 30%;
      font-size: 2em;
    }
  }
  .weather-img {
    width: 100%;
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 50%;
      top: 0;
      left: 20%;
    }
  }
  .weather-main {
    font-size: 1.5em;
    @media screen and (max-width: 600px) {
      font-size: 2em;
    }
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
  const cityID = 1835848; // 서울 ID
  const authorize = process.env.REACT_APP_authorize;
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${authorize}`)
      .then((res) => res.json())
      .then((data) => {
        const currentTemp = data.main.temp;
        const weatherIcon = data.weather[0].icon;
        const weatherMain = data.weather[0].main;
        setWeatherData({ currentTemp, weatherIcon, weatherMain });
      });
  }, [authorize]);
  return (
    <WeatherContainer>
      <h3 className="weather-text"> 현재 날씨</h3>
      {weatherData ? (
        <>
          <img
            className="weather-img"
            src={`https://openweathermap.org/img/wn/${weatherData?.weatherIcon}@2x.png`}
            alt="weatherIcon"
          />
          <div className="weather-main">{weatherData.weatherMain}</div>
          <div className="weather-temp">{(weatherData?.currentTemp - 273.15).toFixed(1)}℃ </div>
        </>
      ) : null}
    </WeatherContainer>
  );
};

export default Weather;
