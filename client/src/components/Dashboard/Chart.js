import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class ChartBitcoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 5000
          }
        },
        colors: ["#ffffff"],
        xaxis: {
          categories: []
        },
        grid: {
          show: true,
          strokeDashArray: 2,
          borderColor: "#90A4AE"
        },
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          theme: false,
          style: {
            fontSize: "12px",
            fontFamily: undefined
          },
          onDatasetHover: {
            highlightDataSeries: false
          },
          x: {
            show: true,
            format: "dd MMM",
            formatter: undefined
          },
          y: {
            formatter: undefined,
            title: {
              formatter: seriesName => seriesName
            }
          },
          z: {
            formatter: undefined,
            title: "Size: "
          },

          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0
          }
        },
        marker: {
          show: true
        },

        stroke: {
          show: true,
          curve: "straight",
          lineCap: "butt",
          colors: undefined,
          width: 4,
          dashArray: 0
        },
        markers: {
          size: 4,
          colors: undefined,
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          hover: {
            size: undefined,
            sizeOffset: 3
          }
        },
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#515151",
            opacity: 0.35
          }
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
          categories: []
        }
      },
      series: [{ data: priceData }]
    });
  }

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
        />
      </div>
    );
  }
}
