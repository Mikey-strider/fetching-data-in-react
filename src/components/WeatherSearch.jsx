// src/components/WeatherSearch.jsx
import { useState } from 'react';

const WeatherSearch = ({getWeather}) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll call the fetch function here
    getWeather(city)
    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
