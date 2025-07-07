import React, { useState, useEffect } from 'react';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if (!city || !API_KEY) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  if (loading) return <p>Loading...</p>;

  if (!weather || weather.error) {
    return <p>{weather?.error?.message || 'City not found or API error.'}</p>;
  }

  return (
    <div>
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <p>🌡️ Temperature: {weather.current.temp_c}°C</p>
      <p>☁️ Condition: {weather.current.condition.text}</p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        style={{ width: 64, height: 64 }}
      />
    </div>
  );
}

export default Weather;
