import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Homepage from "./components/StaticPages/Homepage";
import Footer from "./components/StaticPages/Footer";
import Learnmore from "./components/StaticPages/LearnMore";
import Portfolio from "./components/StaticPages/Portfolio";
import GraphData from "./components/Dashboard/GraphData/GraphData";
import Home from "./components/Dashboard/Home/Home";
import AdminHome from "./components/AdminDashboard/AdminHome";
import LoginPage from "./components/Auth/LoginPage";
import Wallet from "./components/Dashboard/Wallet/Wallet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import RegisterPage from "./components/Auth/RegisterPage";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser(loadUser()));
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <SideBar />
          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route path="/dashboard/graph-data" component={GraphData} />
            <Route exact path="/" component={Homepage} />
            <Route path="/learn-more" component={Learnmore} />
            <Route path="/portfolio" component={Portfolio} />
            <Route exact path="/admin" component={AdminHome} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard/wallet" component={Wallet} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
