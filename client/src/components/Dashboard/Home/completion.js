import React, { Component } from "react";
import Chart from "react-apexcharts";
import Title from "../Title";

export default class Completion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            tools: {
              download: false
            }
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 0,
            opacity: 0.25
          }
        },
        colors: ["#b24357"],
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: `${this.props.name} Price USD`,
          data: []
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Title>{this.props.name} Closing Weekly</Title>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="840"
        />
      </div>
    );
  }
}
