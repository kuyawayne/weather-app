import axios from "axios";
import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { WeatherProps } from "../api/weather";

const WeatherAIComponent: FunctionComponent<{data: WeatherProps}> = (props) => {
  const {isLoading, data} = useQuery<{ message: string }>("weather-gpt", async () => {
    const { data } = await axios.post<{message: string}>("http://localhost/openai", { data: props.data });

    console.log(data.message);

    return {message: data.message};
  });

  return (
    <>
      {
        isLoading ?
          <p>Analyzing Weather...</p>
          :
          <p>{data?.message}</p>
      }
    </>
  );
};

export default WeatherAIComponent;