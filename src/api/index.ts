import axios from "axios";
import { WeatherResponseProps } from "./weather";

export const getWeather = async (address: string) => {
  const response = await axios.get<WeatherResponseProps>(`http://localhost/weather/${address}`);

  return response;
};