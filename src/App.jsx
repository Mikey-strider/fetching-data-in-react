import { useState, useEffect } from "react";
import './App.css'
import * as weatherService from './services/weatherServices.js'
import WeatherSearch from './components/WeatherSearch';
// src/App.jsx
import WeatherDetails from './components/WeatherDetails';



const App = () => {

  const [weatherData, setWeatherData] = useState({});

  const getWeather = async (city) => {
    const data = await weatherService.show(city)
    console.log('data:', data)
    const myWeather = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeatherData(myWeather);
  }

  useEffect(() => {
    console.log('Use Effect running');
    const getDefaultData = async () => {
      const data = await weatherService.show('San Francisco');
        const newWeatherData = {
          location: data.location.name,
          temperature: data.current.temp_f,
          condition: data.current.condition.text,
        };
        setWeatherData(newWeatherData);
    }
    getDefaultData()
  }, []);
  
  return (
    <>
    <h1>Weather App</h1>
    <WeatherSearch getWeather={getWeather} />
    <WeatherDetails weatherData={weatherData} />
    {/* <button onClick={getWeather}> Fetch Weather</button> */}
    </>
  );
}

export default App

