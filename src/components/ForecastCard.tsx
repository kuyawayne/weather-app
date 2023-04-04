import React, { FunctionComponent } from "react";

interface ForecastCardProps {
  day: string;
  temperature: number;
  realFeel: number;
  windDirectionAndSpeed: number;
}

const ForecastCard: FunctionComponent<ForecastCardProps> = ({ day, temperature, realFeel, windDirectionAndSpeed }) => {
  return (
    <div className="w-full shadow-xl card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{day}</h2>

        <h3>{temperature}</h3>

        <h3>{realFeel}</h3>

        <h3>{windDirectionAndSpeed}</h3>
      </div>
    </div>
  );
};

export default ForecastCard;