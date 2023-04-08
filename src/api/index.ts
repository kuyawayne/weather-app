import { api } from "./api";
import { WeatherResponseProps } from "./weather";

export const getWeather = async (address: string) => {
  const response = await api().get<WeatherResponseProps>(`/weather/${address}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  return response;
};