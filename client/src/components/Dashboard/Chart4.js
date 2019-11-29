import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

export default class Chart4 extends Component {
  state = { data: [] };

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
    function createData(time, amount) {
      return { time, amount };
    }
    this.setState({
      data: [
        createData(timeData, priceData[0]),
        createData(timeData1, priceData[1]),
        createData(timeData2, priceData[2]),
        createData(timeData3, priceData[3]),
        createData(timeData4, priceData[4]),
        createData(timeData5, priceData[5]),
        createData(timeData6, priceData[6]),
        createData(timeData7, priceData[7])
      ]
    });
  }
  render() {
    return (
      <React.Fragment>
        <Title>ReCharts</Title>
        <ResponsiveContainer>
          <LineChart
            data={this.state.data}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24
            }}
          >
            <XAxis dataKey="time" />
            <YAxis>
              <Label
                angle={270}
                position="left"
                style={{ textAnchor: "middle" }}
              >
                Price ($)
              </Label>
            </YAxis>
            <Line
              type="monotone"
              dataKey="amount"
              stroke="rgb(178,67, 87)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
