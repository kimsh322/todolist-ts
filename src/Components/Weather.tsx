import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  border-radius: 10px;
  overflow: hidden;
  .left-box {
    width: 30%;
    height: 100%;
    background-color: orange;
  }
  .right-box {
    width: 70%;
    height: 100%;
    background-color: white;
  }
`;

interface Data {
  currentTemp: number;
  weatherIcon: string;
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<Data>();
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=fa617d936fde71460aa6aae2656168d1")
      .then((res) => res.json())
      .then((data) => {
        const currentTemp = data.main.temp;
        const weatherIcon = data.weather[0].icon;
        setWeatherData({ currentTemp, weatherIcon });
      });
  }, []);
  return (
    <WeatherContainer>
      <div className="left-box">
        {weatherData ? (
          <img src={`https://openweathermap.org/img/wn/${weatherData?.weatherIcon}@2x.png`} alt="weatherIcon" />
        ) : null}
        {weatherData ? <div>현재 기온은 {(weatherData?.currentTemp - 273.15).toFixed(1)} </div> : null}
      </div>
      <div className="right-box"></div>
    </WeatherContainer>
  );
};

export default Weather;
