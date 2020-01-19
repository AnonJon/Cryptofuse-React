import React, { Suspense } from "react";
import ChartistGraph from "react-chartist";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Deposits from "../Home/Portfolio-total";
import Orders from "../Home/Orders";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Chart3 from "../Chart3";
import Completion from "./completion";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
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

const Home = props => {
  const classes = useStyles();

  const { isAuthenticated, user } = props.auth;

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
              <p className={classes.cardCategory}>Bitcoin Wallet</p>
              <h3 className={classes.cardTitle}>0.000</h3>
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
              <h3 className={classes.cardTitle}>$34,245</h3>
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
              <h3 className={classes.cardTitle}>{user.coin_total}</h3>
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
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
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
  auth: state.auth
});
export default connect(mapStateToProps, null)(Home);
