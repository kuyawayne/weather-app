import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { WeatherProps } from "../api/weather";
import { api } from "../api/api";

const WeatherAIComponent: FunctionComponent<{ data: WeatherProps }> = (props) => {
  const { isLoading, data } = useQuery<{ message: string }>("weather-gpt", async () => {
    const { data } = await api().post<{ message: string }>("/openai", {
      data: props.data
    }, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    console.log(data.message);

    return { message: data.message };
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