import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { getAdmin } from "./actions/adminAuctions";

import SideBar from "./components/SideBar";
import News from "./components/Dashboard/News/News";
import Homepage from "./components/StaticPages/Homepage";
import Footer from "./components/StaticPages/Footer";
import Learnmore from "./components/StaticPages/LearnMore";
import Portfolio from "./components/StaticPages/Portfolio";
import GraphData2 from "./components/Dashboard/GraphData/GraphData2";
import Home from "./components/Dashboard/Home/Home";
import AdminHome from "./components/AdminDashboard/AdminHome";
import LoginPage from "./components/Auth/LoginPage";
import Wallet from "./components/Dashboard/Wallet/Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import RegisterPage from "./components/Auth/RegisterPage";
import Invest from "./components/Dashboard/Invest/Invest";
import UserProfile from "./components/Dashboard/UserProfile/UserProfile";
import Contact from "./components/StaticPages/Contact";
import TwoFactorLogin from "./components/Auth/TwoFactorLogin";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser(loadUser()));
    store.dispatch(getAdmin(getAdmin()));
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <SideBar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/learn-more" component={Learnmore} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/admin" component={AdminHome} />
            <Route path="/login" component={LoginPage} />
            <Route path="/two-factor" component={TwoFactorLogin} />
            <Route path="/register" component={RegisterPage} />
            <Route exact path="/dashboard" component={Home} />
            <Route path="/dashboard/graph-data" component={GraphData2} />
            <Route path="/dashboard/wallet" component={Wallet} />
            <Route path="/dashboard/invest" component={Invest} />
            <Route path="/dashboard/profile" component={UserProfile} />
            <Route path="/dashboard/news" component={News} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
