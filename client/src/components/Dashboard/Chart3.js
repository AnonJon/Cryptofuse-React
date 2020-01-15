import React, { Component } from "react";
import Chart from "react-apexcharts";
import Title from "./Title";

export default class Chart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        colors: ["#b24357"],
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "Bitcoin Price USD",
          data: []
        }
      ]
    };
  }
  async componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=7`;
    const response = await fetch(url);
    const data = await response.json();

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

    this.setState({
      options: {
        xaxis: {
          categories: [
            timeData,
            timeData1,
            timeData2,
            timeData3,
            timeData4,
            timeData5,
            timeData6,
            timeData7
          ]
        }
      },
      series: [{ data: priceData }]
    });
  }

  render() {
    return (
      <div>
        <Title>Bitcoin Closing Weekly</Title>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="350"
        />
      </div>
    );
  }
}
