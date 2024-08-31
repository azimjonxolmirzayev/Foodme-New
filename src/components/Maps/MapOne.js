import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import mapData from "./uz-all.geo.js";

const MapOne = () => {
  useEffect(() => {
    import("highcharts/modules/exporting")
      .then((module) => {
        module.default(Highcharts);
      })
      .catch((error) => {
        console.error("Error loading exporting module:", error);
      });
  }, []);

  const options = {
    chart: {
      map: "countries/uz/uz-all",
      backgroundColor: "transparent",
      events: {
        load: function () {
          const chart = this;

          Highcharts.addEvent(chart.series[0].points, "mouseover", function () {
            this.update({
              color: "#005a9c",
            });
            chart.setTitle({ text: this.name });
          });

          Highcharts.addEvent(chart.series[0].points, "mouseout", function () {
            this.update({
              color: null,
            });
            chart.setTitle({ text: "UZBEKISTAN" });
          });
        },
      },
    },
    title: {
      text: "UZBEKISTAN",
    },
    colorAxis: {
      min: 0,
      max: 100,
      stops: [
        [0, "#005a9c"],
        [1, "#005a9c"],
      ],
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        data: [],
        mapData: mapData,
        joinBy: "id",
        name: "UZBEKISTAN",
        states: {
          hover: {
            color: "green",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.point.name;
          },
        },
      },
    ],
  };

  return (
    <div
      id="container"
      className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7"
    >
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
};

export default MapOne;
