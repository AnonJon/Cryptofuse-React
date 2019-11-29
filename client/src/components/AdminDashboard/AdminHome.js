import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LoginPage from "../Auth/LoginPage";
import SnackbarError from "../Auth/SnackbarError";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const AdminHome = props => {
  const classes = useStyles();
  const { isAuthenticated, user, isLoading, isLoaded } = props.auth;
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (isLoading || !isLoaded || user.first_name !== "admin") {
    return (
      <div>
        <LoginPage />
        <SnackbarError />
      </div>
    );
  }

  return (
    <div>
      <h1>{user.first_name}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default withRouter(connect(mapStateToProps, null)(AdminHome));
