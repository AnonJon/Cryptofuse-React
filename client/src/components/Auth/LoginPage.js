import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { withRouter } from "react-router";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

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

// const onSubmit = e => {
//   e.preventDefault();

//   const { email, password } = this.state;

//   const user = {
//     email,
//     password
//   };

//   // Attempt to login
//   this.props.login(user);

//   this.props.history.push("/dashboard");
// };

const LoginPage = ({ error, login, history }) => {
  const [msg, setMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
  });

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    // Attempt to login

    login(user);

    history.push("/dashboard");
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
          Login
        </Typography>
        {msg ? <Alert color="danger">{msg}</Alert> : null}
        <form onSubmit={onSubmit}>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
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
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>

    // <Modal centered={true} isOpen={this.state.modal} toggle={this.toggle}>
    //   <ModalHeader toggle={this.toggle}>Login</ModalHeader>
    //   <ModalBody>
    //     {this.state.msg ? (
    //       <Alert color="danger">{this.state.msg}</Alert>
    //     ) : null}
    //     <Form onSubmit={this.onSubmit}>
    //       <FormGroup>
    //         <Label for="email">Email</Label>
    //         <Input
    //           type="email"
    //           name="email"
    //           id="email"
    //           placeholder="Email"
    //           className="mb-3"
    //           onChange={this.onChange}
    //         />

    //         <Label for="password">Password</Label>
    //         <Input
    //           type="password"
    //           name="password"
    //           id="password"
    //           placeholder="Password"
    //           className="mb-3"
    //           onChange={this.onChange}
    //         />

    //         <Button
    //           style={{
    //             marginTop: "2rem",
    //             backgroundColor: "indianred",
    //             border: "none"
    //           }}
    //           block
    //         >
    //           Login
    //         </Button>
    //       </FormGroup>
    //     </Form>
    //   </ModalBody>
    // </Modal>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default withRouter(
  connect(mapStateToProps, { login, clearErrors })(LoginPage)
);
