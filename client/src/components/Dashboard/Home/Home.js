import React, { Suspense } from "react";
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
import CardHeader from "../UserProfile/Card/CardHeader";
import LoginPage from "../../Auth/LoginPage";
import SnackbarError from "../../Auth/SnackbarError";

const useStyles = makeStyles(theme => ({
  grid1: {
    display: "flex",
    justifyContent: "space-Between",
    flexWrap: "wrap"
  },

  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#F0F0F0"
  },
  paper: {
    display: "flex",

    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  main: {
    backgroundColor: "#F0F0F0"
  },
  dash: {
    paddingTop: "100px"
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
}));

const Home = props => {
  const classes = useStyles();

  const { isAuthenticated, user } = props.auth;
  console.log(user);

  const ifAuth = (
    <div className={classes.dash}>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Dashboard</h4>
        <p className={classes.cardCategoryWhite}>Main</p>
      </CardHeader>
      <div maxwidth="lg" className={classes.container}>
        <div className={classes.grid1}>
          <Grid item xs={6} sm={3}>
            <Paper>
              <Orders />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper>
              <Completion />
            </Paper>
          </Grid>
          {/* Portfolio Total */}
          <Grid item xs={6} sm={3}>
            <Paper>
              <Deposits />
            </Paper>
          </Grid>
        </div>
        {/* Chart */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Chart3 />
          </Paper>
        </Grid>
      </div>
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
