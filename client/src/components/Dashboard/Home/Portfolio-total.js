import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Title";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

const Deposits = props => {
  const { user } = props.auth;
  const classes = useStyles();
  return (
    <Fragment>
      <Title>Total Portfolio Value</Title>
      <Typography component="p" variant="h4">
        $0.00
      </Typography>
      <Title>Total Fuse Tokens</Title>
      <Typography component="p" variant="h4">
        {user.coin_total}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {new Date().toDateString()}
      </Typography>
      <div>
        <Link to="/dashboard/wallet" color="primary">
          BTC Wallet Ballance
        </Link>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(Deposits);
