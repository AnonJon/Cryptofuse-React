import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PortfolioChart extends Component {
  state = {
    chartData: {
      labels: ["BTC", "ETH", "XRP", "LTC", "BCH", "DASH", "XML", "NEM", "BAT"],
      datasets: [
        {
          label: "Portfolio Total",
          data: [11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11],
          backgroundColor: [
            "rgb(248, 142, 21)",
            "rgb(46, 46, 46)",
            "rgb(45, 155, 212)",
            "rgb(190, 190, 190)",
            "rgb(60, 179, 0)",
            "rgb(37, 141, 231)",
            "rgb(98, 237, 244)",
            "rgb(70, 207, 125)",
            "rgb(158, 32, 99)"
          ]
        }
      ]
    }
  };

  render() {
    return (
      <div className="donut">
        <Doughnut data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default PortfolioChart;
