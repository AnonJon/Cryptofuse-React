import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginPage from "../../Auth/LoginPage";
import SnackbarError from "../../Auth/SnackbarError";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ReceiveModal from "./ReceiveModal";
import SendModal from "./SendModal";

import Card from "../UserProfile/Card/Card.js";

import CardAvatar from "../UserProfile/Card/CardAvatar";
import CardBody from "../UserProfile/Card/CardBody.js";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(4),
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "center"
  },
  main: {
    paddingTop: "100px",
    backgroundColor: "#F0F0F0"
  }
}));

const Wallet = ({ auth, history }) => {
  const {
    isAuthenticated,
    user,
    isTwoFactorVerified,
    isLoaded,
    isLoading
  } = auth;
  const classes = useStyles();
  const [bitcoin, setBitcoin] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      if (user.twoFactorSetup && !isTwoFactorVerified) {
        history.push("/two-factor");
      }
    }

    setBitcoin(user.bitcoin_amount);
  });
  if (isLoading || !isLoaded) {
    return (
      <div>
        <LoginPage />
        <SnackbarError />
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              className="#"
              src={require("../../../images/images/btc-80x80.png")}
              alt=""
            />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>{bitcoin} BTC</h6>
          <h4 className={classes.cardTitle}>$0.00 USD</h4>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "15px"
            }}
          >
            <SendModal />
            <ReceiveModal />
          </div>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                The cryptocurrency that started it all, Bitcoin is the first
                digital currency to solve the "double spending" or
                counterfeiting problem without the aid of a central authority,
                such as a bank or a government, making Bitcoin truly
                peer-to-peer.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardBody>
      </Card>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps, null)(Wallet));
