import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

export default function WeatherApp() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather ${weather?.location.name ?? ''} | React App`;
  }, [weather]);

  async function loadInfo(city = "london") {
    
    try {

      const request = await fetch(`${import.meta.env.VITE_WEATHER_URL}&key=${import.meta.env.VITE_WEATHER_KEY}&q=${city}`);

      const json = await request.json();

      setWeather(json);

    } catch (error) {
     console.error('Error: ', error.message); 
    }

  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  console.log(weather);

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}