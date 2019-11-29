import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReactTooltip from "react-tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <ReactTooltip />
        <Link
          data-tip="Logout"
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button onClick={this.props.logout}>
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
