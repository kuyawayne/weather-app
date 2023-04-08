import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";

import moment from "moment";

import DashboardCard from "./components/DashboardCard";
import Container from "./components/Container";
import NavigationBar from "./components/NavigationBar";
import { getWeather } from "./api";
import { Card } from "react-daisyui";
import WeatherIcon from "./components/WeatherIcon";
import WeatherAIComponent from "./components/WeatherAIComponent";
import { WeatherResponseProps } from "./api/weather";

const Application: FunctionComponent = (): JSX.Element => {
  const { data } = useQuery<{data: WeatherResponseProps}>("weather", () => {
    return getWeather("Dumaguete City");
  });

  return (
    <Container>
      <DashboardCard>
        <NavigationBar address={data?.data.resolvedAddress} />

        <section className={"grid grid-cols-2 p-4"}>
          <div className={"col-span-1"}>
            <Card className={"p-4 border border-neutral"}>
              <Card.Title className={"justify-center"}>
                <h1>
                  <span>
                    {
                      data?.data ?
                        moment.unix(data?.data.currentConditions.datetimeEpoch).format("LL")
                        :
                        "Today"
                    }
                  </span>

                  <span> - Weather Conditions</span>
                </h1>
              </Card.Title>

              <Card.Body className={"flex flex-row justify-between"}>
                <div className={"flex gap-4 flex-col"}>
                  {
                    data?.data ?
                      <>
                        <strong className={"text-2xl"}>{data.data.currentConditions.conditions}</strong>
                        <WeatherAIComponent data={data?.data.currentConditions}/>
                      </>
                      :
                      null
                  }
                </div>

                <div>
                  {
                    data?.data ?
                      <p className={"text-center"}>
                        <WeatherIcon icon={data.data.currentConditions.icon} className={"w-24"} />
                        <strong className={"text-2xl"}>{data.data.currentConditions.temp}&deg;C</strong>
                      </p>
                      :
                      <></>
                  }
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-span-1"></div>
        </section>

        <section className="grid grid-cols-7 gap-4 p-4">
          {
            data?.data.days.map(({ datetime, icon, conditions, temp }, index) => {
              if (index > 0) {
                const dayOfWeek = moment(datetime).format("LL");

                return (
                  <div className="col-span-1" key={index}>
                    <Card className="flex-row justify-between h-full p-4 border border-neutral">
                      <div>
                        <small className="text-gray-500">{dayOfWeek}</small>
                        <p>{conditions}</p>
                      </div>

                      <div>
                        <WeatherIcon icon={icon} />
                        <strong className={"break-keep"}>{temp}&deg;C</strong>
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