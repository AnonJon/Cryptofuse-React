import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import SchoolIcon from "@material-ui/icons/School";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SecurityIcon from "@material-ui/icons/Security";

import { Link } from "react-router-dom";

import Logout from "../Auth/Logout";

import { connect } from "react-redux";

import ReactTooltip from "react-tooltip";

const MainListItems = props => {
  const { isAuthenticated, user } = props.auth;

  const loggedIn = (
    <div>
      <ReactTooltip />
      <Link
        data-tip="Dashboard"
        to="/dashboard"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Invest" />
      </ListItem>
      <Link
        to="#"
        data-tip="Edit Profile"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Profile" />
        </ListItem>
      </Link>
      <Link
        data-tip="Graph Data"
        to="/dashboard/graph-data"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="Graph Data" />
        </ListItem>
      </Link>
      {isAuthenticated && user.first_name === "admin" ? (
        <Link
          data-tip="Admin Dashboard"
          to="/admin"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <InsertChartIcon />
            </ListItemIcon>
            <ListItemText primary="Admin Dashboard" />
          </ListItem>
        </Link>
      ) : null}
      <Link
        data-tip="Wallet"
        to="/dashboard/wallet"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Wallet" />
        </ListItem>
      </Link>

      <Logout />
    </div>
  );

  const loggedOut = (
    <div>
      <ReactTooltip />
      <Link
        data-tip="Learn More"
        to="/learn-more"
        exact
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Learn More" />
        </ListItem>
      </Link>
      <Link
        data-tip="Portfolio"
        to="/portfolio"
        exact
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
      </Link>
      <Link
        data-tip="Register"
        to="/register"
        exact
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
      </Link>
      <Link
        data-tip="Login"
        to="/login"
        exact
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>
    </div>
  );

  return <>{isAuthenticated ? loggedIn : loggedOut}</>;
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(MainListItems);
