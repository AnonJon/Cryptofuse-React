import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import SimpleModal from "./modal";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    backgroundColor: "rgb(178,67, 87)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
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
  fixedHeight: {}
}));

export default function GraphData() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
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
