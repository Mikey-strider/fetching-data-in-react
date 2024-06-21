// src/components/WeatherDetails.jsx
const WeatherDetails = ({weatherData}) => {
  return (
    <section>
      <h2>Weather Details</h2>
      <p>Location: {weatherData.location}</p>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Condition: {weatherData.condition}</p>
    </section>
  );
};

export default WeatherDetails;
