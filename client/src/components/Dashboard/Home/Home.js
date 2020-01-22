import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartistGraph from "react-chartist";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Deposits from "../Home/Portfolio-total";
import Orders from "../Home/Orders";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import ChartBitcoin from "../Chart";
import Chart3 from "../Chart3";
import Completion from "./completion";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { getAdmin } from "../../../actions/adminAuctions";
import CircularProgress from "@material-ui/core/CircularProgress";
//icons
import Icon from "@material-ui/core/Icon";
import FaceIcon from "@material-ui/icons/Face";
import EditIcon from "@material-ui/icons/Edit";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
//components
import Table from "../components/Table/Table.js";
import Tasks from "../components/Tasks/Tasks.js";
import CustomTabs from "../components/CustomTabs/CustomTabs.js";
import Danger from "../components/Typography/Danger.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../UserProfile/Card/CardHeader";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem.js";
import LoginPage from "../../Auth/LoginPage";
import SnackbarError from "../../Auth/SnackbarError";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts";

const useStyles = makeStyles(styles);

const Home = ({ auth, admin, history }) => {
  const classes = useStyles();
  const [fusePrice, setFusePrice] = useState(null);
  const [portValue, setPortValue] = useState(null);
  const [userPortValue, setUserPortValue] = useState(null);
  const [coinTotal, setCoinTotal] = useState(null);
  const [data, setData] = useState({
    bitcoin: 0,
    ethereum: 0,
    litecoin: 0,
    dash: 0,
    xrp: 0,
    bitcoinCash: 0,
    stellar: 0,
    bat: 0,
    nem: 0
  });

  const { isAuthenticated, user, isTwoFactorVerified } = auth;

  useEffect(() => {
    getAdmin();
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,BCH,DASH,XLM,XEM,BAT&tsyms=USD`
      )
      .then(data => {
        setData({
          bitcoin: data.data.RAW.BTC.USD.PRICE,
          ethereum: data.data.RAW.ETH.USD.PRICE,
          litecoin: data.data.RAW.LTC.USD.PRICE,
          dash: data.data.RAW.DASH.USD.PRICE,
          xrp: data.data.RAW.XRP.USD.PRICE,
          bitcoinCash: data.data.RAW.BCH.USD.PRICE,
          stellar: data.data.RAW.XLM.USD.PRICE,
          bat: data.data.RAW.BAT.USD.PRICE,
          nem: data.data.RAW.XEM.USD.PRICE
        });
      });
  }, []);

  useEffect(() => {
    if (admin.adminLoaded && isAuthenticated) {
      let finalPrice =
        data.bitcoin * admin[0].bitcoin_total_amount +
        data.ethereum * admin[0].ethereum_total_amount +
        data.litecoin * admin[0].litecoin_total_amount +
        data.dash * admin[0].dash_total_amount +
        data.xrp * admin[0].xrp_total_amount +
        data.bitcoinCash * admin[0].bitcoinCash_total_amount +
        data.stellar * admin[0].stellar_total_amount +
        data.bat * admin[0].bat_total_amount +
        data.nem * admin[0].nem_total_amount;

      setPortValue(Math.round(finalPrice * 100) / 100);
      setFusePrice(
        Math.round((portValue / admin[0].fuse_token_amount) * 100) / 100
      );
      setUserPortValue(Math.round(user.coin_total * fusePrice * 100) / 100);
    }
    if (isAuthenticated) {
      setCoinTotal(user.coin_total);
    }

    if (isAuthenticated) {
      if (user.twoFactorSetup && !isTwoFactorVerified) {
        history.push("/two-factor");
      }
    }
  });

  const ifAuth = (
    <div style={{ marginTop: "100px" }}>
      <CardHeader color="primary" style={{ marginBottom: "25px" }}>
        <h4 className={classes.cardTitleWhite}>Dashboard</h4>
        <p className={classes.cardCategoryWhite}>Main</p>
      </CardHeader>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AccountBalanceIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Fuse Token Price</p>
              <h3 className={classes.cardTitle}>
                ${fusePrice == null ? <CircularProgress /> : fusePrice}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <Link to="/dashboard/wallet">Deposit more Bitcoin</Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoneyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Portfolio Value</p>
              <h3 className={classes.cardTitle}>${userPortValue}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Current Value
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <img
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                  src={require("../../../images/logo-1white-beaker.png")}
                />
              </CardIcon>
              <p className={classes.cardCategory}>Fuse Tokens</p>
              <h3 className={classes.cardTitle}>{coinTotal}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                <Link to="/dashboard/invest">Purchase More Tokens</Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FaceIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Cryptofuse Investor</p>
              <h3 className={classes.cardTitle}>{new Date().toDateString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <EditIcon />
                <Link to="/dashboard/profile">Edit Profile</Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <Chart3 />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Performance History</h4>
              <p className={classes.cardCategory}>Portfolio</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> last 12 months
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartBitcoin />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Bitcoin</h4>
              <p className={classes.cardCategory}>Weekly Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> for the week
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
  return (
    <div className={classes.main}>
      {isAuthenticated ? (
        ifAuth
      ) : (
        <>
          <LoginPage />
          <SnackbarError />
        </>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin
});
export default connect(mapStateToProps, { getAdmin })(Home);
