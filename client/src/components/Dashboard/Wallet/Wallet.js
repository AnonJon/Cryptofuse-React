import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ReceiveModal from "./ReceiveModal";
import SendModal from "./SendModal";

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
  }
}));

export default function Wallet() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <img
            className="#"
            src={require("../../../images/images/btc-80x80.png")}
            alt=""
          />
          <Typography>0 BTC</Typography>
          <Typography>$0.00 USD</Typography>
          <Container className={classes.buttons}>
            <SendModal />
            <ReceiveModal />
          </Container>
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
        </Paper>
      </Container>
    </div>
  );
}
