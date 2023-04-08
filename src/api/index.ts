import axios from "axios";
import { WeatherResponseProps } from "./weather";

export const getWeather = async (address: string) => {
  const response = await axios.get<WeatherResponseProps>(`https://weather-gpt-api.onrender.com/weather/${address}`);

  return response;
};