import axios from "axios";
import { WeatherResponse } from "./weather";

export const getWeather = async (latitude: number, longitude: number, timezone: string) => {
  return await axios.get<WeatherResponse>("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: latitude,
      longitude: longitude,
      hourly: "temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m",
      daily: "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum",
      current_weather: true,
      precipitation_unit: "inch",
      timeformat: "unixtime",
      timezone: timezone
    }
  });
};