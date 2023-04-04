export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: number;
  },
  hourly_units: {
    time: string;
    temperature_2m: string;
    apparent_temperature: string;
    precipitation: string;
    weathercode: string;
    windspeed_10m: string;
  },
  hourly: {
    time: number[],
    temperature_2m: number[],
    apparent_temperature: number[],
    precipitation: number[],
    weathercode: number[],
    windspeed_10m: number[]
  },
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_sum: string;
  },
  daily: {
    time: number[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_sum: number[];
  }
}