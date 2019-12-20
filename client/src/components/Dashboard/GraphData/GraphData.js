import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import SimpleModal from "./modal";
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {},
  main: {
    paddingTop: "70px"
  }
}));

export default function GraphData() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.main}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/btc-80x80.png")}
                name="Bitcoin"
                coin="BTC"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/eth_logo-80x80.jpg")}
                name="Ethereum"
                coin="ETH"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/xrp-80x80.png")}
                name="XRP"
                coin="XRP"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/litecoin-logo-80x80.png")}
                name="Litecoin"
                coin="LTC"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/12-bitcoin-cash80x80.png")}
                name="Bitcoin Cash"
                coin="BCH"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/dash-80x80.png")}
                name="Dash"
                coin="DASH"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/str-80x80.png")}
                name="Stellar"
                coin="XLM"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/bat-80x80.png")}
                name="Basic Attention Token"
                coin="BAT"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Paper className={fixedHeightPaper}>
              <SimpleModal
                src={require("../../../images/xem-80x80.png")}
                name="NEM"
                coin="XEM"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
