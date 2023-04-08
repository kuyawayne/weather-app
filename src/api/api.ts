import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: "https://weather-gpt-api.onrender.com"
  });
};