import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { twoFactorLoginCode } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { withRouter } from "react-router";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgb(178,67, 87)"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(178,67, 87)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(178,67, 87)"
      },
      "&:hover fieldset": {
        borderColor: "rgb(178,67, 87)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(178,67, 87)"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const TwoFactorLogin = ({
  error,
  twoFactorLoginCode,
  history,
  isTwoFactorVerified,
  auth,
  clearErrors
}) => {
  const classes = useStyles();
  const [msg, setMsg] = useState(null);
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  const { user, isLoadedTwoFactor } = auth;

  const onChangeCode = e => {
    setCode(e.target.value);
  };

  useEffect(() => {
    // Check for register error
    if (isLoadedTwoFactor === false) {
      setMsg("Invalid Credentials");
      setOpen(false);
    } else {
      setMsg(null);
    }
    if (isTwoFactorVerified) {
      history.push("/dashboard");
    }
  });

  const onSubmit = e => {
    const { totpSecret } = auth.user;

    e.preventDefault();
    clearErrors();
    setMsg(null);
    setOpen(true);

    const twoFactorCheck = { totpSecret, code };
    setTimeout(() => {
      twoFactorLoginCode(twoFactorCheck);
    }, 2000);
  };

  return (
    <Container
      data-aos="fade"
      component="main"
      maxWidth="xs"
      style={{ paddingTop: "150px" }}
    >
      <CssBaseline />
      <div className="login-avatar">
        <img
          alt=""
          className="beaker-img-login"
          src={require("../../images/beaker-logo.png")}
        />
        <Typography component="h1" variant="h5">
          Two-Factor Authentication
        </Typography>
        {msg ? <Alert color="danger">{msg}</Alert> : null}
        <form onSubmit={onSubmit}>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="code"
            label="2FA"
            name="code"
            autoComplete="code"
            autoFocus
            onChange={onChangeCode}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "rgb(178,67, 87)", color: "white" }}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

const mapStateToProps = state => ({
  isTwoFactorVerified: state.auth.isTwoFactorVerified,
  auth: state.auth,
  error: state.error
});

export default withRouter(
  connect(mapStateToProps, { twoFactorLoginCode, clearErrors })(TwoFactorLogin)
);
