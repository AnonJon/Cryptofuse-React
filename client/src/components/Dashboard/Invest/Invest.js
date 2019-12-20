import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "../UserProfile/CustomButtons/Button";
import Card from "../UserProfile/Card/Card.js";

import CardAvatar from "../UserProfile/Card/CardAvatar";
import CardBody from "../UserProfile/Card/CardBody.js";
import CardHeader from "../UserProfile/Card/CardHeader.js";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

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
  },
  main: {
    paddingTop: "100px",
    backgroundColor: "#F0F0F0"
  }
}));

const Invest = ({ auth }) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div style={{ paddingBottom: "40px" }}>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Invest</h4>
          <p className={classes.cardCategoryWhite}>Manage Fuse Tokens</p>
        </CardHeader>
      </div>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <AccountBalanceIcon
              style={{
                height: "80px",
                width: "80px",
                color: "rgb(178,67, 87)"
              }}
            />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>
            {auth.user.bitcoin_amount} BTC
          </h6>
          <h4 className={classes.cardTitle}>$0.00 USD</h4>

          <Button color="primary" round>
            Invest
          </Button>

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

export default withRouter(connect(mapStateToProps, null)(Invest));
