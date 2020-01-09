import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import { Alert } from "reactstrap";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  FormControlLabel,
  FormHelperText
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "100px",
    backgroundColor: "f4f4f4"
  },
  left: {
    paddingLeft: "10%",
    paddingTop: "5%"
  },
  span: {
    padding: "20px"
  },
  contact: {
    backgroundColor: "white",
    boxShadow: "0px 1px 30px -5px rgba(184,131,131,1)",
    borderRadius: "2%"
  }
}));
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

export default function Contact() {
  const classes = useStyles();
  const [msg, setMsg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangeSubject = e => {
    setSubject(e.target.value);
  };
  const onChangeMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <div className={classes.main}>
      <div
        className={classes.left}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1>Have a Question?</h1>
        <p>Reach out to our team with all of your questions.</p>
        <div>
          <MailIcon />
          <span className={classes.span}>info@cryptofuse.net</span>
          <br />
          <PhoneIcon />
          <span className={classes.span}>1-800-222-4545</span>
          <br></br>
          <RoomIcon />

          <span className={classes.span}>Location</span>
        </div>
      </div>
      <Container
        data-aos="fade"
        component="main"
        maxWidth="xs"
        className={classes.contact}
      >
        <Box mt={4}></Box>
        <div className="login-avatar">
          <img
            alt=""
            src={require("../../images/beaker-logo.png")}
            style={{ paddingTop: "10px", height: "60px", width: "45px" }}
          />
          <Typography component="h1" variant="h5">
            Contact
          </Typography>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <form>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name "
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={onChangeName}
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
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="subject"
              label="Subject"
              name="subject"
              autoComplete="subject"
              onChange={onChangeSubject}
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
              name="message"
              label="Message"
              type="message"
              id="message"
              autoComplete="message"
              onChange={onChangeMessage}
              color="rgb(178,67, 87)"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "rgb(178,67, 87)", color: "white" }}
            >
              Send
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}
