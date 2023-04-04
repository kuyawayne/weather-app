import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";

import moment from "moment";

import DashboardCard from "./components/DashboardCard";
import Container from "./components/Container";
import NavigationBar from "./components/NavigationBar";
import { getWeather } from "./api";
import { Button, Card } from "react-daisyui";
import Skeleton from "./components/Skeleton";

interface CoordinateProps {
  latitude: number;
  longitude: number;
}

interface WeatherProps {
  day: number;
  maxTemperature: number;
  minTemperature: number;
}

const Application: FunctionComponent = (): JSX.Element => {
  const [coordinates, setCoordinates] = React.useState<CoordinateProps>();
  const [weatherData, setWeatherData] = React.useState<WeatherProps[]>([]);

  React.useEffect(() => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;

        setCoordinates({ latitude, longitude });
      });
    }

    return () => {
      // unmount component
    };
  }, []);

  const { isLoading, data } = useQuery("weather", () => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

    if (coordinates) {
      const { latitude, longitude } = coordinates;

      return getWeather(latitude, longitude, timeZone);
    }
  }, {
    enabled: !!coordinates
  });

  React.useEffect(() => {
    if (data) {
      const { temperature_2m_max, time, temperature_2m_min } = data.data.daily;

      const weatherData = time.map((date, index) => {
        return {
          day: date,
          maxTemperature: temperature_2m_max[index],
          minTemperature: temperature_2m_min[index]
        };
      });

      setWeatherData(weatherData);
    }
  }, [data]);

  console.log(data);

  return (
    <Container>
      <DashboardCard>
        <NavigationBar />

        <section className="grid grid-cols-7 gap-4 p-4">
          {
            isLoading ?
              new Array(7).map((_, index) => {
                return (
                  <Skeleton key={index} />
                );
              })
              :
              weatherData.map(({ day, maxTemperature }, index) => {
                const dayOfWeek = moment.unix(day).format("dddd");

                return (
                  <Card key={index} className={"bg-neutral-800 col-span-1 p-4 w-full"}>
                    <Card.Body>
                      <Card.Title className={"justify-center"}>
                        <span>{maxTemperature}</span>
                        <span>{data?.data.daily_units.apparent_temperature_max}</span>
                      </Card.Title>

                      <h3 className={"text-center text-lg"}>{dayOfWeek}</h3>
                    </Card.Body>

                    <Card.Actions className={"justify-center"}>
                      <Button className={"bg-blue-500 text-black hover:bg-blue-300"}>See More</Button>
                    </Card.Actions>
                  </Card>
                );
              })
          }
        </section>
      </DashboardCard>
    </Container>
  );
};

export default Application;