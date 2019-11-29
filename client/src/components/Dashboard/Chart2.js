import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Title from "./Title";

export default class Chart2 extends Component {
  state = {
    chartData: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        new Date().toDateString()
      ],
      datasets: [
        {
          label: "Bitcoin",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgb(178,67, 87)",
          borderColor: "rgb(178,67, 87)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(178,67, 87))",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(178,67, 87)",
          pointHoverBorderColor: "rgb(178,67, 87)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }
      ]
    }
  };
  async componentDidMount() {
    const url =
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=7";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let priceData = [
      data.Data.Data[0].open,
      data.Data.Data[1].open,
      data.Data.Data[2].open,
      data.Data.Data[3].open,
      data.Data.Data[4].open,
      data.Data.Data[5].open,
      data.Data.Data[6].open,
      data.Data.Data[7].open
    ];
    let timeData = new Date([data.Data.Data[0].time] * 1000);
    let timeData1 = new Date([data.Data.Data[1].time] * 1000);
    let timeData2 = new Date([data.Data.Data[2].time] * 1000);
    let timeData3 = new Date([data.Data.Data[3].time] * 1000);
    let timeData4 = new Date([data.Data.Data[4].time] * 1000);
    let timeData5 = new Date([data.Data.Data[5].time] * 1000);
    let timeData6 = new Date([data.Data.Data[6].time] * 1000);
    let timeData7 = new Date([data.Data.Data[7].time] * 1000);
    console.log(priceData);
    this.setState({
      chartData: {
        labels: [
          timeData,
          timeData1,
          timeData2,
          timeData3,
          timeData4,
          timeData5,
          timeData6,
          timeData7
        ],
        datasets: [
          {
            data: priceData
          }
        ]
      }
    });
  }
  render() {
    return (
      <div>
        <Title>Chart.js</Title>
        <Line data={this.state.chartData} options={{}} />
      </div>
    );
  }
}
