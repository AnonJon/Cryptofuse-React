import React, { useState, useEffect, Suspense } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LoadingBackdrop from "../Auth/LoadingBackdrop";

import LoginPage from "../Auth/LoginPage";
import SnackbarError from "../Auth/SnackbarError";
import UpdateCoin from "./UpdateCoin";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogDelete from "./DialogDelete";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import Warning from "@material-ui/icons/Warning";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Accessibility from "@material-ui/icons/Accessibility";
import LoopIcon from "@material-ui/icons/Loop";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import {
  getUsers,
  deleteUser,
  updateCoinTotal
} from "../../actions/userActions";
import { getAdmin } from "../../actions/adminAuctions";
import Danger from "../Dashboard/components/Typography/Danger";
import CardFooter from "../Dashboard/components/Card/CardFooter.js";
import CardIcon from "../Dashboard/components/Card/CardIcon.js";
import GridItem from "../Dashboard/UserProfile/Grid/GridItem";
import GridContainer from "../Dashboard/UserProfile/Grid/GridContainer.js";
// import Table from "./Table";
import Card from "../Dashboard/UserProfile/Card/Card";
import CardHeader from "../Dashboard/UserProfile/Card/CardHeader";
import CardBody from "../Dashboard/UserProfile/Card/CardBody";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
const useStyles = makeStyles(styles);

const AdminHome = ({
  users,
  auth,
  getUsers,
  deleteUser,
  updateCoinTotal,
  getAdmin,
  admin,
  history
}) => {
  const classes = useStyles();
  const {
    user,
    isLoading,
    isLoaded,
    isAuthenticated,
    isTwoFactorVerified
  } = auth;
  const [open, setOpen] = useState(true);
  const [tokenCount, setTokenCount] = useState(null);
  const [fusePrice, setFusePrice] = useState(null);

  useEffect(() => {
    getUsers();
    getAdmin();
  }, []);

  useEffect(() => {
    if (admin.adminLoaded) {
      setTokenCount(admin[0].fuse_token_amount);
      setFusePrice(admin[0].fuse_price);
    }
    if (isAuthenticated) {
      if (user.twoFactorSetup && !isTwoFactorVerified) {
        history.push("/two-factor");
      }
    }
  });

  if (!isLoaded || user.first_name !== "admin") {
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
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AccountBalanceIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Fuse Token Price</p>
              <h3 className={classes.cardTitle}>${fusePrice}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <ScatterPlotIcon />
                Fuse
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <LoopIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Total Fuse Tokens Issued</p>
              <h3 className={classes.cardTitle}>
                {tokenCount === null ? <h4>Loading...</h4> : tokenCount}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <ScatterPlotIcon />
                Current Total
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total Users</p>
              <h3 className={classes.cardTitle}>{users.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <ScatterPlotIcon />
                Users
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
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
    users: state.users,
    admin: state.admin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getAdmin: () => dispatch(getAdmin()),
    deleteUser: id => dispatch(deleteUser(id)),
    updateCoinTotal: (id, coin_total) =>
      dispatch(updateCoinTotal(id, coin_total))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminHome)
);
