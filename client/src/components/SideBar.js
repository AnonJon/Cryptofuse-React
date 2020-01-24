import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import SchoolIcon from "@material-ui/icons/School";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import MainListItems from "../components/Dashboard/listItems";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import SideBarHeader from "./SideBarHeader";
import Avatar from "@material-ui/core/Avatar";
import ReactTooltip from "react-tooltip";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    backgroundColor: "#F0F0F0"
  },
  fullList: {
    width: "auto"
  },
  drawer: {
    opacity: "40%"
  },
  AppBar: {
    backgroundColor: "rgb(41,48, 49)"
  },
  title: {
    flexGrow: 1
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function SideBar(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const { isAuthenticated, user } = props.auth;

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const bottomSideBar = (
    <div className={classes.list}>
      <ReactTooltip />
      <Link
        data-tip="Home"
        to="/"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link
        data-tip="Contact"
        to="/contact"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </Link>

      <ReactTooltip />

      <div style={{ backgroundColor: "#F0F0F0", height: "500px" }}></div>
    </div>
  );

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <SideBarHeader />

      <Divider />
      <MainListItems />
      <Divider />
      {bottomSideBar}
    </div>
  );

  //   const fullList = side => (
  //     <div
  //       className={classes.fullList}
  //       role="presentation"
  //       onClick={toggleDrawer(side, false)}
  //       onKeyDown={toggleDrawer(side, false)}
  //     >
  //       <List>
  //         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {["All mail", "Trash", "Spam"].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   );

  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <Link to="/">
                <img
                  style={{ paddingLeft: "20px" }}
                  alt=""
                  className="logo"
                  src={require("../images/images/logo-1white.png")}
                />
              </Link>
            </Typography>

            <IconButton color="inherit">
              <Badge badgeContent={0} color="default">
                {isAuthenticated ? (
                  <Avatar>
                    {user.first_name[0].toUpperCase()}
                    {user.last_name[0].toUpperCase()}
                  </Avatar>
                ) : (
                  ""
                )}
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button> */}
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      {/* <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer> */}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(SideBar);
