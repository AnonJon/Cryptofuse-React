import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import { getAdmin } from "../../actions/adminAuctions";

const FuseWeeklyChart = ({ admin, auth }) => {
  const [fuseHistory, setFuseHistory] = useState([]);

  const { isAuthenticated } = auth;

  useEffect(() => {
    if (admin.adminLoaded) {
      setFuseHistory(admin[0].fuse_price_history);
    }
  });
  console.log(admin);
  let options = {
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
    }
  };
  let series = {
    series: [
      {
        name: "Fuse Price USD",
        data: fuseHistory
      }
    ]
  };
  console.log(series.series);
  return (
    <div>
      <Chart options={options.options} series={series.series} type="line" />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin
});
export default connect(mapStateToProps, { getAdmin })(FuseWeeklyChart);
