import React, { useEffect, useState } from "react";
import axios from "axios";

import ChartistGraph from "react-chartist";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../variables/charts";
const Chartist = require("chartist");
export const Chart3 = () => {
  const [labels1, setLabels1] = useState({ labels: [], series: [[5000]] });

  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=7`
      )
      .then(data => {
        let priceData = [
          data.data.Data.Data[0].open,
          data.data.Data.Data[1].open,
          data.data.Data.Data[2].open,
          data.data.Data.Data[3].open,
          data.data.Data.Data[4].open,
          data.data.Data.Data[5].open,
          data.data.Data.Data[6].open,
          data.data.Data.Data[7].open
        ];
        let timeData = new Date([data.data.Data.Data[0].time] * 1000);
        let timeData1 = new Date([data.data.Data.Data[1].time] * 1000);
        let timeData2 = new Date([data.data.Data.Data[2].time] * 1000);
        let timeData3 = new Date([data.data.Data.Data[3].time] * 1000);
        let timeData4 = new Date([data.data.Data.Data[4].time] * 1000);
        let timeData5 = new Date([data.data.Data.Data[5].time] * 1000);
        let timeData6 = new Date([data.data.Data.Data[6].time] * 1000);
        let timeData7 = new Date([data.data.Data.Data[7].time] * 1000);

        setLabels1({ labels: [34], series: [[data.data.Data.Data[0].open]] });
      });
  }, []);

  let data = {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[labels1]]
  };

  return (
    <div>
      <ChartistGraph
        data={labels1}
        options={completedTasksChart.options}
        listener={completedTasksChart.animation}
        className="ct-chart"
        type="Line"
      />
    </div>
  );
};

export default Chart3;
