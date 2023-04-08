interface WeatherProps {
  datetime: string,
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string[];
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: string[];
  source: string;
}

interface WeatherByDayProps extends WeatherProps {
  hours: WeatherProps[]
}

export interface WeatherResponseProps {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: WeatherByDayProps[],
  alerts: string[],
  stations: {
    RPVD: {
      distance: number;
      latitude: number;
      longitude: number;
      useCount: number;
      id: string;
      name: string;
      quality: number;
      contribution: number
    }
  },
  currentConditions: WeatherProps
}