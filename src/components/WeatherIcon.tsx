import React, { FunctionComponent } from "react";
import { Card } from "react-daisyui";

import clearDay from "./../img/clear-day.svg";
import clearNight from "./../img/clear-night.svg";
import cloudy from "./../img/cloudy.svg";
import fog from "./../img/fog.svg";
import hail from "./../img/hail.svg";
import partlyCloudyDay from "./../img/partly-cloudy-day.svg";
import partlyCloudyNight from "./../img/partly-cloudy-night.svg";
import rainSnowShowersDay from "./../img/rain-snow-showers-day.svg";
import rainSnowShowersNight from "./../img/rain-snow-showers-night.svg";
import rainSnow from "./../img/rain-snow.svg";
import rain from "./../img/rain.svg";
import showersDay from "./../img/showers-day.svg";
import showersNight from "./../img/showers-night.svg";
import sleet from "./../img/sleet.svg";
import snowShowersDay from "./../img/snow-showers-day.svg";
import snowShowersNight from "./../img/snow-showers-night.svg";
import snow from "./../img/snow.svg";
import thunderRain from "./../img/thunder-rain.svg";
import thunderShowersDay from "./../img/thunder-showers-day.svg";
import thunderShowersNight from "./../img/thunder-showers-night.svg";
import thunder from "./../img/thunder.svg";
import wind from "./../img/wind.svg";

interface IconProps {
  icon: string;
  className?: string;
}

interface ImageProps {
  "clear-day": string;
  "clear-night": string;
  "cloudy": string;
  "fog": string;
  "hail": string;
  "partly-cloudy-day": string;
  "partly-cloudy-night": string;
  "rain-snow-showers-day": string;
  "rain-snow-showers-night": string;
  "rain-snow": string;
  "rain": string;
  "showers-day": string;
  "showers-night": string;
  "sleet": string;
  "snow-showers-day": string;
  "snow-showers-night": string;
  "snow": string;
  "thunder-rain": string;
  "thunder-showers-day": string;
  "thunder-showers-night": string;
  "thunder": string;
  "wind": string;
  [key: string]: string;
}

const WeatherIcon: FunctionComponent<IconProps> = ({ icon, className }): JSX.Element => {
  const Image: ImageProps = {
    "clear-day": clearDay,
    "clear-night": clearNight,
    "cloudy": cloudy,
    "fog": fog,
    "hail": hail,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    "rain-snow-showers-day": rainSnowShowersDay,
    "rain-snow-showers-night": rainSnowShowersNight,
    "rain-snow": rainSnow,
    "rain": rain,
    "showers-day": showersDay,
    "showers-night": showersNight,
    "sleet": sleet,
    "snow-showers-day": snowShowersDay,
    "snow-showers-night": snowShowersNight,
    "snow": snow,
    "thunder-rain": thunderRain,
    "thunder-showers-day": thunderShowersDay,
    "thunder-showers-night": thunderShowersNight,
    "thunder": thunder,
    "wind": wind,
  };

  return (
    <Card.Image src={Image[icon]} alt={icon} className={className} />
  );
};

export default WeatherIcon;