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
  Container,
  Table,
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

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
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
      <Container maxWidth="lg" className="car-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bolder" }}>ID</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>First Name</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Last Name</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Coin Total</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Delete</TableCell>
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
                  <UpdateCoin update={updateCoinTotal} id={user._id} />
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
      </Container>
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
