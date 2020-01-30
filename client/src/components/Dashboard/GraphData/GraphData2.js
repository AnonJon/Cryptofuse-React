import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "../components/Card/Card.js";
import CardHeader from "../UserProfile/Card/CardHeader";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem.js";
import PortfolioValueChart from "../PortfolioValueChart";
import ChartBitcoin from "../Chart";
import FuseWeeklyChart from "../FuseWeeklyChart";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";
import CoinGraph from "./CoinGraph";

import SimpleModal from "./modal";
const useStyles = makeStyles(styles);

export default function GraphData2() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "100px" }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <CoinGraph name="Bitcoin" coin="BTC" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/btc-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>Bitcoin</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <CoinGraph name="Ethereum" coin="ETH" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/eth_logo-80x80.jpg")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>Ethereum</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <CoinGraph name="XRP" coin="XRP" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/xrp-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>XRP</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <CoinGraph name="Litecoin" coin="LTC" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/litecoin-logo-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>Litecoin</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <CoinGraph name="Bitcoin Cash" coin="BCH" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/12-bitcoin-cash80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>Bitcoin Cash</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <CoinGraph name="Dash" coin="DASH" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/dash-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>DASH</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <CoinGraph name="Stellar" coin="XLM" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/str-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>Stellar</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <CoinGraph name="Basic Attention Token" coin="BAT" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/bat-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>Basic Attention Token</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <CoinGraph name="NEM" coin="XEM" />
            </CardHeader>
            <CardBody>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../images/xem-80x80.png")}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                <h4 className={classes.cardTitle}>NEM</h4>
              </div>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart></CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
