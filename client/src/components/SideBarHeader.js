import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "rgb(178,67, 87)",

    display: "flex",
    flexDirection: "column"
  },
  icon: {
    color: "white",
    fontSize: "40px"
  },
  iconBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "130px"
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px"
  },
  logoImg: {
    height: "45px",
    width: "210px"
  }
}));
const SideBarHeader = props => {
  const classes = useStyles();
  const { isAuthenticated, user } = props.auth;
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img
          alt=""
          className={classes.logoImg}
          src={require("../images/images/logo-1white.png")}
        />
      </div>

      <div className={classes.iconBox}>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title={`Click To Edit Profile`}
          placement="right"
        >
          <Link to="/dashboard/profile">
            <IconButton color="inherit">
              <Badge badgeContent={0} color="default">
                <Avatar>
                  <PersonIcon className={classes.icon} />
                </Avatar>
              </Badge>
            </IconButton>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(SideBarHeader);
