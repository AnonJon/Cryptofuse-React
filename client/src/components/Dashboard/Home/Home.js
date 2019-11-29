import React from "react";
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

import { Redirect } from "react-router-dom";
import LoginPage from "../../Auth/LoginPage";
import SnackbarError from "../../Auth/SnackbarError";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },

  container: {
    // marginTop: "150px",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

const Home = props => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { isAuthenticated } = props.auth;

  const ifAuth = (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Orders />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Completion />
          </Paper>
        </Grid>
        {/* Portfolio Total */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Chart3 />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
  return (
    <div>
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
