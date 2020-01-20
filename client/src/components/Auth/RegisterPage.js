import React, { useState, useEffect, useRef } from "react";
import { Alert } from "reactstrap";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { withRouter } from "react-router";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

import { BrowserRouter as Router, Link } from "react-router-dom";

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
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[700],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: "rgb(178,67, 87)",
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: "rgb(178,67, 87)",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const RegisterPage = ({ error, register, history, isAuthenticated }) => {
  const classes = useStyles();
  const [msg, setMsg] = useState(null);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangeFirstName = e => {
    setFirst_name(e.target.value);
  };
  const onChangeLastName = e => {
    setLast_name(e.target.value);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg.msg);
      setOpen(false);

      setLoading(false);
      setSuccess(false);
    } else {
      setMsg(null);
    }

    if (isAuthenticated) {
      history.push("/dashboard");
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    setMsg(null);
    setOpen(true);
    clearErrors();
    const newUser = {
      first_name,
      last_name,
      email,
      password
    };
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        register(newUser);
      }, 5000);
    }
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
          Register
        </Typography>
        {msg ? <Alert color="danger">{msg}</Alert> : null}
        <form onSubmit={onSubmit}>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
            onChange={onChangeFirstName}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            onChange={onChangeLastName}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={onChangeEmail}
          />
          <CssTextField
            style={{
              borderColor: "rgb(178,67, 87)",
              "&.Mui-focused fieldset": {
                borderColor: "#ced4da"
              }
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangePassword}
            color="rgb(178,67, 87)"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "rgb(178,67, 87)", color: "white" }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
      <Backdrop className={classes.backdrop} open={open}>
        <div className={classes.wrapper}>
          <Fab aria-label="save" className={buttonClassname} onClick={onSubmit}>
            {success ? <CheckIcon /> : <HourglassEmptyIcon />}
          </Fab>
          {loading && (
            <CircularProgress size={68} className={classes.fabProgress} />
          )}
        </div>
      </Backdrop>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default withRouter(
  connect(mapStateToProps, { register, clearErrors })(RegisterPage)
);
