import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";

import moment from "moment";

import DashboardCard from "./components/DashboardCard";
import Container from "./components/Container";
import NavigationBar from "./components/NavigationBar";
import { getWeather } from "./api";
import { Card } from "react-daisyui";

const Application: FunctionComponent = (): JSX.Element => {
  const { data } = useQuery("weather", () => {
    return getWeather("Dumaguete City");
  });

  return (
    <Container>
      <DashboardCard>
        <NavigationBar address={data?.data.resolvedAddress} />

        <section className="grid grid-cols-7 gap-4 p-4">
          {
            data?.data.days.map((day, index) => {
              if (index > 0) {
                const dayOfWeek = moment(day.datetime).format("LL");

                return (
                  <div className="col-span-1" key={index}>
                    <Card className="flex-row justify-between p-4">
                      <div>
                        <small className="text-gray-500">{dayOfWeek}</small>
                        <p>{day.conditions}</p>
                      </div>

                      <div>
                        <strong>{JSON.stringify(day.temp)} &deg;C</strong>
                      </div>
                    </Card>
                  </div>
                );
              }
            })
          }
        </section>
      </DashboardCard>
    </Container>
  );
};

export default Application;