import React, { useState, useEffect } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LoginPage from "../Auth/LoginPage";
import SnackbarError from "../Auth/SnackbarError";
import UpdateCoin from "./UpdateCoin";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogDelete from "./DialogDelete";
import {
  Table,
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

import {
  getUsers,
  deleteUser,
  updateCoinTotal
} from "../../actions/userActions";

import GridItem from "../Dashboard/UserProfile/Grid/GridItem";
import GridContainer from "../Dashboard/UserProfile/Grid/GridContainer.js";
// import Table from "./Table";
import Card from "../Dashboard/UserProfile/Card/Card";
import CardHeader from "../Dashboard/UserProfile/Card/CardHeader";
import CardBody from "../Dashboard/UserProfile/Card/CardBody";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
}));

const AdminHome = ({ users, auth, getUsers, deleteUser, updateCoinTotal }) => {
  const classes = useStyles();
  const { user, isLoading, isLoaded } = auth;
  const [open, setOpen] = useState(true);

  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading || !isLoaded || user.first_name !== "admin") {
    return (
      <div>
        <LoginPage />
        <SnackbarError />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>All Users</h4>
              <p className={classes.cardCategoryWhite}>Manage Users</p>
            </CardHeader>
            <CardBody>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bolder" }}>ID</TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      First Name
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      Last Name
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      Email
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      Coin Total
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user._id}>
                      <TableCell component="th" scope="row">
                        {user._id}
                      </TableCell>
                      <TableCell>{user.first_name}</TableCell>
                      <TableCell>{user.last_name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.coin_total}
                        <UpdateCoin
                          update={updateCoinTotal}
                          getUsers={getUsers}
                          id={user._id}
                        />
                      </TableCell>
                      <TableCell>
                        <DialogDelete
                          delete={deleteUser}
                          id={user._id}
                          coinTotal={user.coin_total}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    deleteUser: id => dispatch(deleteUser(id)),
    updateCoinTotal: (id, coin_total) =>
      dispatch(updateCoinTotal(id, coin_total))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminHome)
);
