import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { getUserBitcoinAmount } from "../../../actions/userActions";

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
import CardHeader from "../UserProfile/Card/CardHeader.js";

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
    paddingTop: "120px",
    backgroundColor: "#F0F0F0",
    paddingBottom: "100px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
}));

const Wallet = ({ auth, history, getUserBitcoinAmount }) => {
  const {
    isAuthenticated,
    user,
    isTwoFactorVerified,
    isLoaded,
    isLoading
  } = auth;
  const classes = useStyles();
  const [bitcoin, setBitcoin] = useState(null);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      if (user.twoFactorSetup && !isTwoFactorVerified) {
        history.push("/two-factor");
      }
    }
    if (isAuthenticated) {
      axios
        .get(
          `https://api.blockcypher.com/v1/bcy/test/addrs/${user.receiveAddress}/full`
        )
        .then(res => {
          console.log(res.data);
          setBitcoin(res.data.balance);
        });
    }
  });
  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`
      )
      .then(data => {
        setBitcoinPrice(data.data.RAW.BTC.USD.PRICE);
      });
  }, []);

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
      <div style={{ paddingBottom: "40px" }}>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Wallet</h4>
          <p className={classes.cardCategoryWhite}>Send & Receive</p>
        </CardHeader>
      </div>
      <Container>
        <Card profile>
          <CardAvatar profile>
            <img
              className="#"
              src={require("../../../images/images/btc-80x80.png")}
              alt=""
            />
          </CardAvatar>
          <CardBody profile>
            <h6 className={classes.cardCategory}>{bitcoin} BTC</h6>
            <h4 className={classes.cardTitle}>
              ${Math.round((bitcoinPrice * bitcoin * 100) / 100)} USD
            </h4>

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
      </Container>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(
  connect(mapStateToProps, { getUserBitcoinAmount })(Wallet)
);
