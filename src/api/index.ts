import axios from "axios";
import { WeatherResponseProps } from "./weather";

export const getWeather = async (address: string) => {
  const response = await axios.get<WeatherResponseProps>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    params: {
      unitGroup: "metric",
      include: "include=events%2Cdays%2Ccurrent%2Chours%2Calerts",
      key: "8HZM8KRWJMTENV5Z8HX7B4MAT",
      contentType: "json"
    }
  });

  return response;
};